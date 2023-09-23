const express = require("express");

const employeeController = require("../controllers/employee.controller");

const router = express.Router();

router.post("/personal", employeeController.addEmployeePersonalData);


module.exports = router;
