const express = require('express');
const User = require('../controller/user');

// Fix 1: Use Router() to create a separate instance for each route
const userRouter = express.Router();

userRouter.post('/register', User.register);
userRouter.post('/login', User.login);

module.exports = userRouter; // Export the router instance