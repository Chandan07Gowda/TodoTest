const express = require('express');
const User = require('../controller/user');

// Fix 1: Use Router() to create a separate instance for each route
const router = express.Router(); // Use Router() instead of creating a new instance of express

// Fix 2: Secure the framework from disclosing version information by default
router.get('/', (req, res) => {
    res.status(403).send('Forbidden');
});

// Fix 3: Ensure that the routes are properly secured with authentication middleware
const authenticate = (req, res, next) => {
    // Placeholder for authentication logic
    if (!authenticatedUser) {
        return res.status(401).send('Unauthorized');
    }
    next();
};

// Apply the authentication middleware to all routes that require it
router.use('/user', authenticate); // Secure all user-related routes with authentication

// Fix 4: Use the router instance for the routes
router.post('/user/register', User.register);
router.post('/user/login', User.login);

module.exports = router; // Export the router instance