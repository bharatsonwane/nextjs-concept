const db = require("../database/db");

/**
 * 
 * @param {*} employeePersonalData 
 * @returns employeeId
 */
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
    return result.insertId;
  } catch (error) {
    next(error);
  }
};

exports.updateEmployeePersonalData = async (
  employeeId,
  employeePersonalData
) => {};

exports.getEmployeeDetails = async (employeeId) => {
  try {
    const [rows] = await db.execute(
      `SELECT * FROM employee WHERE id = ${employeeId}`
    );
    const employeeData = rows[0];

    const newEmployeeData = {
      ...employeeData,
      personalDetial: {},
      jobDetail: {},
    };

    const dataReorganize = {
      personalDetial: [
        "id",
        "title",
        "firstName",
        "middleName",
        "lastName",
        "maidenName",
        "gender",
        "dob",
        "bloodGroup",
        "marriedStatus",
        "pan",
        "aadhar",
      ],
      jobDetail: [
        "hiringDate",
        "joiningDate",
        "modeOfWork",
        "probationPeriodMonth",
        "probationCompletionDate",
        "exitDate",
        "createdAt",
        "updatedAt",
        "designationLookupId",
        "CTC",
      ],
    };

    Object.entries(dataReorganize).map(([objectKey, objectValue]) => {
      objectValue.forEach((item) => {
        if (item === "id") {
          newEmployeeData.employeeId = newEmployeeData[item];
          delete newEmployeeData[item];
        } else {
          newEmployeeData[objectKey][item] = newEmployeeData[item];
          delete newEmployeeData[item];
        }
      });
    });


    return newEmployeeData;
  } catch (error) {}
};
