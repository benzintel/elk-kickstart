exports.pgMainDatabase = {
  client: process.env.DATABASE_DERIVE || 'pg',
  connection: {
    host: process.env.DATABASE_HOST || '127.0.0.1',
    user: process.env.DATABASE_USER || 'user',
    password: process.env.DATABASE_PASS || 'password',
    database: process.env.DATABASE_DB || 'DATABASE'
  }
};

exports.redisDatabase = {
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: process.env.REDIS_PORT || 6379,
  password: process.env.REDIS_PASSWORD || 'password',
  db: process.env.REDIS_DB || 0,
  prefix: process.env.REDIS_PREFIX || 'xxx'
};

exports.elasticsearchDatabase = {
  node: process.env.ELASTIC_HOST || 'http://localhost:9200',
  auth: {
    username: process.env.ELASTIC_USER || 'username',
    password: process.env.ELASTIC_PASS || 'password'
  }
};