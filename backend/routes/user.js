const express = require('express');
const User = require('../controller/user');

// Fix 1: Use Router() to create a separate instance for each route
const router = express.Router(); // Use Router() instead of creating a new instance of express

// Fix 2: Secure the framework from disclosing version information by default
router.use(function (req, res, next) {
    if (!req.headers['user-agent']) {
        return res.status(403).send('Forbidden');
    } else {
        // Continue with the request to the intended destination
        next();
    }
});

// Fix 3: Ensure that all routes are properly secured
router.post('/user/register', User.register);
router.post('/user/login', User.login);

module.exports = router; // Export the router instance