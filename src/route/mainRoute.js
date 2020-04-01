const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const mainController = require('../controller/mainController');
const userMiddleware = require('../middleware/userMiddleware');


module.exports = function (server, prefixUrl) {

  // URL Example: {domain}/main/{route}
  server.get(`${prefixUrl}/`, csrfProtection, userMiddleware.verifyToken, mainController.main);
  server.get(`${prefixUrl}/view`, csrfProtection, userMiddleware.verifyToken, mainController.testView);
  server.post(`${prefixUrl}/postData`, mainController.postData);

};