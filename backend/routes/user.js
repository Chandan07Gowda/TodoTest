const express = require('express');
const User = require('../controller/user');

const app = express.Router();

app.post('/user/register', User.register);
app.post('/user/login', User.login);

module.exports = app;