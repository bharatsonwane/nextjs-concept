const employee = require("../services/employee.service");

exports.addEmployeePersonalData = async (req, res, next) => {
  try {
    const data = await employee.addEmployeePersonalData(req.body);
    await res.status(200).send(data);
  } catch (error) {
    next(error);
  }
};