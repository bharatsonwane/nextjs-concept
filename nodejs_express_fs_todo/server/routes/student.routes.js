const express = require('express');

const studentController = require('../controllers/student.controller');

const router = express.Router();



router.post('/', studentController.postCreateStudent);

router.put('/', studentController.putUpdateStudent);

router.get("/", studentController.getRetrieveStudentList);

router.get('/:id', studentController.getRetrieveStudentById);

router.delete('/:id', studentController.deleteDeleteStudent);

module.exports = router;