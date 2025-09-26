const express = require('express');
const User = require('../controller/user');

// Fix 1: Use Router() to create a separate instance for each route
const router = express.Router(); // Use Router() instead of creating a new instance of express

// Fix 2: Secure the framework against implicit disclosure of version information
router.use(function (req, res, next) {
    if (req.originalUrl === '/favicon.ico') {
        return res.status(404).send(); // Return a 404 for favicon requests to prevent leaking version info
    } else {
        next();
    }
});

// Fix 3: Ensure that the router is mounted at a specific path
router.post('/user/register', User.register);
router.post('/user/login', User.login);

module.exports = router; // Export the router instance