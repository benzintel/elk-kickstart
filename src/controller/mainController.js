const _ = require('lodash');
const redis = require('../utils/redis')
const mainService = require('../service/mainService');
const sMain = new mainService();



exports.main = async (req, res) => {
  const a = await sMain.pingPong(50);
  const b = await sMain.queryData();
  res.send(JSON.stringify({
    status: true,
    data: a,
    res: b
  }));
};

exports.testView = async (req, res) => {
  res.render('index', {
    csrfToken: req.csrfToken()
  });
};

exports.postData = async (req, res) => {
  const paramA = req.body.nameA;

  res.send({
    a: paramA
  })
}