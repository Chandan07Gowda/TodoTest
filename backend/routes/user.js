const express = require('express');
const User = require('../controller/user');
const router = express.Router(); // Use Router() from express to create a new instance of a middleware chain for the given route prefix ("/").

// Fix 1: Use .post instead of .route('/path').post
router.post('/user/register', User.register);
router.post('/user/login', User.login);

module.exports = router; // Export the router instance to be used by the app.