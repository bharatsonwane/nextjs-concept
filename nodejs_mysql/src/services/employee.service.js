const db = require("../database/db");

exports.addEmployeePersonalData = async (employeePersonalData) => {
  try {
    const {
      title,
      firstName,
      middleName,
      lastName,
      maidenName,
      gender,
      dob,
      bloodGroup,
      marriedStatus,
      pan,
      aadhar,
    } = employeePersonalData;

    const dobDate = new Date(dob);
    const formattedDob = dobDate.toISOString().slice(0, 19).replace("T", " ");

    const data = await db.execute(
      "INSERT INTO employee (title, firstName, middleName, lastName, maidenName, gender, dob, bloodGroup, marriedStatus, pan, aadhar) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        title,
        firstName,
        middleName,
        lastName,
        maidenName,
        gender,
        formattedDob,
        bloodGroup,
        marriedStatus,
        pan,
        aadhar,
      ]
    );
    const [result] = data;
    return result;
  } catch (error) {
    next(error);
  }
};
