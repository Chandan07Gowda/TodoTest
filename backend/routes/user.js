const express = require('express');
const User = require('../controller/user');
const router = express.Router(); // Use Router() to create a separate instance for each route

// Fix 1: Use Router() to create routes for user registration and login
router.post('/user/register', User.register);
router.post('/user/login', User.login);

// Fix 2: Ensure that the router is exported as a middleware function
module.exports = router; // Export the router instance