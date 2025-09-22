const express = require('express');
const User = require('../controller/user');
const router = express.Router(); // Use Router() instead of creating a new instance of express

// Fix 1: Use .post() for both routes to register and login
router.route('/user/register').post(User.register);
router.route('/user/login').post(User.login);

// Fix 2: Ensure that the router is exported as a middleware function
module.exports = router; // Export the router instance directly