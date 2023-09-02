const express = require('express');

const auth = require('../helper/middleware/auth');
const taskController = require('../controllers/task.controller');

const router = express.Router();



router.post('/', auth, taskController.postCreateTask); // create task

router.get('/', auth, taskController.getRetrieveTaskList); // retrieve task list

router.get('/:id', auth, taskController.getRetrieveTaskById);

router.put('/', auth, taskController.putUpdateTask); // update task

router.delete('/:id', auth, taskController.deleteDeleteTask);

router.put('/updateCompleteStatus', auth, taskController.putUpdateTaskCompleteStatus);

router.put('/updateTestingReport', auth, taskController.putUpdateTaskTestingReport);


module.exports = router;