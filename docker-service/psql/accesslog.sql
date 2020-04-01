CREATE SCHEMA logs;

create sequence logs.access_log_id_seq;

alter sequence logs.access_log_id_seq
  owner to root;

create table logs.access_log
(
  id          bigserial                                     not null
    constraint access_log_pkey
    primary key,
  status_code varchar(20) default 0                         not null,
  request     text default '-' :: text                      not null,
  response    text default '-' :: text                      not null,
  ip          varchar(255) default '-' :: character varying not null,
  created_at  timestamp default now()                       not null,
  updated_at  timestamp default now()                       not null
);

alter table logs.access_log
  owner to root;

create unique index access_log_id_uindex
  on logs.access_log (id);