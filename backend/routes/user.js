const express = require('express');
const User = require('../controller/user');
const router = express.Router(); // Use Router() instead of creating a new instance of express

// Security fix: Disable the default header that exposes version information
router.disable('x-powered-by');

// Security fix: Implement CSRF protection (Cross-Site Request Forgery)
const csrf = require('csurf'); // You need to install csurf as a dependency
const csrfProtection = csrf({ cookie: true });
router.use(csrfProtection); // Apply CSRF protection to all routes

// Security fix: Add CSRF token to the login form
router.get('/user/login', (req, res) => {
  res.render('login', { csrfToken: req.csrfToken() });
});

// Security fix: Validate CSRF token on POST requests
router.post('/user/register', csrfProtection, User.register);
router.post('/user/login', csrfProtection, User.login);

module.exports = router;