const express = require('express');
const User = require('../controller/user');
const router = express.Router(); // Use Router() instead of creating a new instance of express

// Fix 1: Use Router() to create a separate route handler for each endpoint
router.post('/user/register', User.register);
router.post('/user/login', User.login);

// Fix 2: Ensure that the router is exported as a middleware function
module.exports = router;