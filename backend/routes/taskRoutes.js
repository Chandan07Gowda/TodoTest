const express = require('express');
const TodoController = require('../controller/todo');
const Authenticate = require('../controller/auth')
const router = express.Router(); // Use Router() instead of creating a new instance of express

// Secure the routes by using .all() to apply security middleware to all HTTP methods
router.all('/getAllTasks', Authenticate.authenticateToken, TodoController.getAllTask);
router.all('/addTasks', Authenticate.authenticateToken, TodoController.creatTask);
router.all('/deleteTasks/:id', Authenticate.authenticateToken, TodoController.deleteTask);
router.all('/updateTask/:id', Authenticate.authenticateToken, TodoController.updateTask);

// Export the router instance to be used in the main app.js file
module.exports = router; // This line is correct and should not be duplicated