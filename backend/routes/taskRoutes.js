const express = require('express');
const TodoController = require('../controller/todo');
const Authenticate = require('../controller/auth')
const router = express.Router(); // Use Router() instead of creating a new instance of express

// Secure the routes by using .all to apply security checks to all HTTP methods
router.all('/getAllTasks', Authenticate.authenticateToken, TodoController.getAllTask);
router.all('/addTasks', Authenticate.authenticateToken, TodoController.creatTask);
router.all('/deleteTasks/:id', Authenticate.authenticateToken, TodoController.deleteTask);
router.all('/updateTask/:id', Authenticate.authenticateToken, TodoController.updateTask);

// Ensure the router is mounted to an existing express app instance
const app = express(); // Create a new express app instance
app.use(router); // Mount the router to the app

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
module.exports=router;