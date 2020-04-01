const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Add env
require('dotenv').config();

// parse cookies
// we need this because "cookie" is true in csrfProtection
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, '/public')));

// init Session
app.use(session({
	secret: process.env.SESSION_SECRET || 'Shh, its a secret!',
	resave: true,
	saveUninitialized: true
}));

// Add Route

/**
 * @description route
 */

/** 
 * @param app 
 * @param path_route
 * @description example path {domain}/main/{route}
 */
require('./src/route/mainRoute')(app, '/main');

app.listen(process.env.START_SERVER || 4000, () =>
	console.log(`Example app listening on port ${process.env.START_SERVER || 4000}`)
);

// Route Error 404
app.get('*', function (req, res) {
	res.render('notFound/index');
});