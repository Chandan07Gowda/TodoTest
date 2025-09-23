const express = require('express');
const TodoController = require('../controller/todo');
const Authenticate = require('../controller/auth')
const router = express.Router(); // Use Router() instead of creating a new instance of express

router.route('/getAllTasks').get(Authenticate.authenticateToken, TodoController.getAllTask);

router.route('/addTasks').post(Authenticate.authenticateToken, TodoController.creatTask)

router.route('/deleteTasks/:id').delete(Authenticate.authenticateToken, TodoController.deleteTask)

router.route('/updateTask/:id').patch(Authenticate.authenticateToken, TodoController.updateTask)
module.exports=router;