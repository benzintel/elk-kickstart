# Benzintel Kickstarter expressJS
# Start NodeJS

  - install NodeJS >= 8 [Download: https://nodejs.org/en/]
  - install nodemon
  - New terminal 
  - check node and npm
```sh
$ node -v
v.8.xx.x
$ npm -v
x.x.x
$ npm install -g nodemon
```
- cd /users/kickstartes_express
```sh
$ npm install gulp@3.9.1 yarn pm2 -g
$ npm install
```
- install all packet on npm
```sh
$ npm run dev
Example app listening on port 4000
```
- You has a test function 
```
$ npm run test
```

- You has a build scss to css (watch all)
```
$ npm run build
```

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