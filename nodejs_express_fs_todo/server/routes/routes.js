const express = require('express');
const router = express.Router();

// import from other files----------------------------------------------
const userRoutes = require('./user.routes');
const taskRoutes = require('./task.routes');
const projectRoutes = require('./project.routes');
const studentRoutes = require('./student.routes');
const employeeRoutes = require("./employee.routes")
const feedbackRoutes = require('./feedback.routes');



router.use('/user', userRoutes);
router.use('/todo', taskRoutes);
router.use('/project', projectRoutes);
router.use('/student', studentRoutes);
router.use("/employee", employeeRoutes)
router.use('/feedback', feedbackRoutes);

module.exports = router;