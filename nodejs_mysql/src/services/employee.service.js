const db = require("../database/db");

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
  } catch (error) {
    throw error;
  }
};

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

    const formattedDob = new Date(dob)
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");

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
    throw error;
  }
};

exports.updateEmployeePersonalData = async (
  employeeId,
  employeePersonalData
) => {
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

    const formattedDob = new Date(dob)
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");

    const query = `
    UPDATE employee SET 
      title = "${title}", firstName= "${firstName}", middleName= "${middleName}", lastName= "${lastName}", maidenName= "${maidenName}", 
      gender= "${gender}", dob= "${formattedDob}", bloodGroup= "${bloodGroup}", marriedStatus= "${marriedStatus}", 
      pan= "${pan}", aadhar= "${aadhar} "
    WHERE id = ${employeeId};`;

    const data = await db.execute(query);
    return data[0];
  } catch (error) {
    throw error;
  }
};

/**
 *
 * @param {*} employeeId
 * @param {*} employeePersonalData
 * @returns
 */
exports.addOrUPdateEmployeeContactData = async (
  employeeId,
  employeeContactData
) => {
  let connection;
  try {
    connection = await db.getConnection();
    // Start the transaction
    await connection.beginTransaction();

    const { contacts, addresses } = employeeContactData;

    // insert/update data in contact table
    if (contacts?.[0]) {
      await Promise.all(
        contacts.map(async (item) => {
          const { id, contactType, value } = item;
          let query;
          if (item.id) {
            query = `
            UPDATE contact SET
              contactType = "${contactType}", value = "${value}"
            WHERE id = ${id};
            `;
          } else {
            query = `
            INSERT INTO contact (contactType, value, employeeId) VALUES ("${contactType}", "${value}", ${employeeId});
            `;
          }
          const queryResponse = await connection.query(query);
          return queryResponse;
        })
      );
    }

    // insert/update data in address table
    if (addresses?.[0]) {
      await Promise.all(
        addresses.map(async (item) => {
          const {
            id,
            addressType,
            country,
            zipCode,
            state,
            district,
            taluka,
            villageCity,
            street,
            landmark,
            area,
            houseNo,
          } = item;
          let query;
          if (item.id) {
            query = `
            UPDATE address SET
              addressType = "${addressType}", country = "${country}", zipCode = "${zipCode}", 
              state = "${state}", district = "${district}", taluka = "${taluka}", villageCity = "${villageCity}",
              street = "${street}", landmark = "${landmark}", area = "${area}", houseNo = "${houseNo}"
            WHERE id = ${id};
            `;
          } else {
            query = `
            INSERT INTO address 
              (addressType, country, zipCode, state, district, taluka, villageCity, street, landmark, area, houseNo, employeeId) 
            VALUES 
              ("${addressType}", "${country}", "${zipCode}", "${state}", "${district}", "${taluka}", "${villageCity}", "${street}", "${landmark}", "${area}", "${houseNo}", ${employeeId});
            `;
          }
          const queryResponse = await connection.query(query);
          return queryResponse;
        })
      );
    }

    // Commit the transaction if all queries are successful
    await connection.commit();
    // connection.release();
  } catch (error) {
    // Roll back the transaction in case of an error
    if (connection) {
      await connection.rollback();
    }
    throw error;
  } finally {
    // Release the connection back to the pool
    if (connection) {
      connection.release();
    }
  }
};
