# Benzintel Kickstarter ELK
# Start Docker

  - Install Docker
  - Check Docker running...

- Start Service Docker
```
$ sh start.sh OR docker-compose up --build
```

- Stop Service Docker
```
$ sh stop.sh OR docker-compose down
```

- Remove Images And Container
```
$ docker rm $(docker ps -a -q)
$ docker rmi $(docker images -a -q)
```