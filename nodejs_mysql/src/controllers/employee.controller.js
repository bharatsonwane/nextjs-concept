const employee = require("../services/employee.service");

/**
 * @description CREATE EMPLOYEE WITH PERSONAL DETAIL
 * @returns employeeDetails
 */
exports.addEmployeePersonalData = async (req, res, next) => {
  try {
    const employeeId = await employee.addEmployeePersonalData(req.body);
    const data = await employee.getEmployeeDetails(employeeId);
    await res.status(200).send(data);
  } catch (error) {
    next(error);
  }
};

/**
 * @description update employee personal details
 * @returns employeeDetails
 */
exports.updateEmployeePersonalData = async (req, res, next) => {
  try {
    const { employeeId } = req.params;
    await employee.updateEmployeePersonalData(employeeId, req.body);
    const data = await employee.getEmployeeDetails(employeeId);
    await res.status(200).send(data);
  } catch (error) {
    next(error);
  }
};

/**
 * @description get employee details details
 * @returns employeeDetails
 */
exports.getEmployeeDetails = async (req, res, next) => {
  try {
    const { employeeId } = req.params;
    const data = await employee.getEmployeeDetails(employeeId);
    await res.status(200).send(data);
  } catch (error) {
    next(error);
  }
};
