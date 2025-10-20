const express = require('express');
const User = require('../controller/user');

const router = express.Router();

// Fix 1: Use Router() to create a separate instance for each route
router.post('/user/register', User.register);
router.post('/user/login', User.login);

module.exports = router;