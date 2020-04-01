FROM nginx:latest
ADD nginx.conf etc/nginx/conf.d/default.conf

###############################################################################
#                                INSTALLATION
###############################################################################

### install Filebeat

ENV FILEBEAT_VERSION 7.6.1


RUN apt-get update -qq \
  && apt-get install -qqy curl \
  && apt-get clean

RUN curl -L -O https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-${FILEBEAT_VERSION}-amd64.deb \
  && dpkg -i filebeat-${FILEBEAT_VERSION}-amd64.deb \
  && rm filebeat-${FILEBEAT_VERSION}-amd64.deb


###############################################################################
#                                CONFIGURATION
###############################################################################

### tweak nginx image set-up

# remove log symlinks
# RUN rm /var/log/nginx/access.log /var/log/nginx/error.log


### configure Filebeat

# config file
ADD filebeat.yml /etc/filebeat/filebeat.yml
RUN chmod 644 /etc/filebeat/filebeat.yml

# CA cert
# RUN mkdir -p /etc/pki/tls/certs
# ADD logstash-beats.crt /etc/pki/tls/certs/logstash-beats.crt

# create template based on filebeat version (assumption: it is the same version as elasticsearch version)
# RUN filebeat export template --es.version ${FILEBEAT_VERSION} > /etc/filebeat/filebeat.template.json

# RUN filebeat -e