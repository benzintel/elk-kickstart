const _ = require('lodash');
const config = require('./../config/database');
const utils = require('./../utils/utils');
const redis = require("redis");
const client = redis.createClient(config.redisDatabase);
const { promisify } = require('util');
const getAsync = promisify(client.get).bind(client);

client.on('error', (error) => {
  console.log(error.message);
});
client.on('connect', () => {
  console.log('Successfully connected to redis');
});

const self = module.exports = {

  setCache: (key, value, ttl) => {
    let data;
    if (_.isArray(value) || _.isObject(value)) {
      data = JSON.stringify(value)
    } else {
      data = value;
    }

    if (!_.isNumber(ttl)) {
      ttl = utils.convertMinuteToSecond(1); // 60 sec
    }

    client.set(key, data);
    client.expire(key, ttl);
  },

  getCache: async (key) => {
    let dataCache = await getAsync(key).then(function (reply, err) {
      if (err) {
        return false;
      } else {
        if (reply != undefined) {
          let convert = JSON.parse(reply);
          if (_.isArray(convert) || _.isObject(convert)) {
            return convert;
          }

          return reply;
        } else {
          return false;
        }
      }
    });

    return dataCache;
  },

  deleteCache: (key) => {
    client.del(key, (err, response) => {
      if (response == 1) {
        return true;
      } else {
        return false;
      }
    });
  }

}