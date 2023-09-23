const employee = require("../services/employee.service");

/**
 * @description CREATE EMPLOYEE WITH PERSONAL DETAIL
 * @returns
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
 * @returns
 */
exports.updateEmployeePersonalData = async (req, res, next) => {
  try {
    const { employeeId } = req.params;
    const data = await employee.updateEmployeePersonalData(
      employeeId,
      req.body
    );
    await res.status(200).send(data);
  } catch (error) {
    next(error);
  }
};

/**
 * @description get employee details details
 * @returns
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
