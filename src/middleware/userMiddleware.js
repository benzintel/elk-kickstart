exports.verifyToken = async function (req, res, next) {
	try {
		// Check Middleware conduction
		console.log('Middleware conduction');
		next();
	} catch (err) {
		res.send(Response.handleError(err));
	}
};