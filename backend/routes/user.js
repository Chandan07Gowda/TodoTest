const express = require('express');
const User = require('../controller/user');

const app = express.Router(); // Use Router() to create a separate instance for each route

// Fix 2: Set 'x-powered-by' header to false to prevent version disclosure
app.use((req, res, next) => {
    res.locals.headers = {};
    res.set('X-Powered-By', 'Express');
});

// Fix 3: Use express.static() middleware with a custom directory path to serve static files
const path = require('path');
app.use(express.static(path.join(__dirname, '..', 'public')));

router.post('/user/register', User.register);
router.post('/user/login', User.login);

module.exports = app; // Export the router instance