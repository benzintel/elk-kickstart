const assert = require('assert');

const mainService = require('../service/mainService');
const sMain = new mainService();


describe('Calculator Tests', function () {
	// And then we describe our testcases.
	it('returns sMain.pingPong(1) = 20', function (done) {
		assert.equal(sMain.pingPong(1), 20);
		// Invoke done when the test is complete.
		done();
	});

	it('returns sMain.pingPong(2) = 40', function (done) {
		assert.equal(sMain.pingPong(2), 30);
		// Invoke done when the test is complete.
		done();
	});
});

return false;