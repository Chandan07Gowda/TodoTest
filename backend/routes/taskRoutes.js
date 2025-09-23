const express = require('express');
const TodoController = require('../controller/todo');
const Authenticate = require('../controller/auth')
const router = express.Router(); // Use Router() to create a new instance of the Express router

// Secure the routes by using authenticateToken middleware before each route
router.route('/getAllTasks').get(Authenticate.authenticateToken, TodoController.getAllTask);
router.route('/addTasks').post(Authenticate.authenticateToken, TodoController.creatTask)
router.route('/deleteTasks/:id').delete(Authenticate.authenticateToken, TodoController.deleteTask)
router.route('/updateTask/:id').patch(Authenticate.authenticateToken, TodoController.updateTask)

// Export the router instance to be used in the main application
module.exports = router;
module.exports=router;