const express = require("express");

const employeeController = require("../controllers/employee.controller");

const router = express.Router();

router.post("/personal", employeeController.addEmployeePersonalData);

router.put(
  "/:employeeId/personal",
  employeeController.updateEmployeePersonalData
); // employee/1/personal

router.put(
  "/:employeeId/contact",
  employeeController.addOrUPdateEmployeeContactData
);

router.put(
    "/:employeeId/job",
    employeeController.addOrUPdateEmployeeJobData
  );

  router.put(
    "/:employeeId/skill",
    employeeController.addOrUPdateEmployeeSkillData
  );

router.get("/:employeeId", employeeController.getEmployeeDetails); // employee/1

module.exports = router;
