const db = require("../database/db");
const authHelper = require("../helper/authHelper");

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
  let connection;
  try {
    connection = await db.getConnection();
    // Start the transaction
    await connection.beginTransaction();

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

    // add data in employee table
    const employeeInsertResponse = await connection.query(
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
    const [result] = employeeInsertResponse;
    const employeeId = result.insertId;

    // add data in user table
    const username = `${firstName}.${lastName}@etevatech.com`;
    const hashPassword = await authHelper.hashPassword("Ganesh@33");

    const data = await connection.query(
      "INSERT INTO user (username, password, status, employeeId) VALUES (?, ?, ?, ?)",
      [username, hashPassword, "active", employeeId]
    );

    // Commit the transaction if all queries are successful
    await connection.commit();

    return employeeId;
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
            WHERE id = ${id} AND employeeId = ${employeeId};
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
            WHERE id = ${id} AND employeeId = ${employeeId};
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

/**
 *
 * @param {*} employeeId
 * @param {*} employeePersonalData
 * @returns
 */
exports.addOrUPdateEmployeeJobData = async (employeeId, employeeJobData) => {
  let connection;
  try {
    connection = await db.getConnection();
    // Start the transaction
    await connection.beginTransaction();

    const { currentJobDetail, experience } = employeeJobData;
    const {
      hiringDate,
      joiningDate,
      modeOfWork,
      probationPeriodMonth,
      // probationCompletionDate,
      CTC,
      designationLookupId,
      userRoleLookupId, // userRoleLookupId in user table
    } = currentJobDetail;

    const formattedHiringDate = new Date(hiringDate)
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");

    const formattedJoiningDate = new Date(joiningDate)
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");

    // const formattedProbationCompletionDate = new Date(probationCompletionDate)
    //   .toISOString()
    //   .slice(0, 19)
    //   .replace("T", " ");

    // update data personal table for current job details
    const currentJobDetailQuery = `
    UPDATE employee SET
      hiringDate = "${formattedHiringDate}", joiningDate = "${formattedJoiningDate}", modeOfWork = "${modeOfWork}", 
      probationPeriodMonth = "${probationPeriodMonth}", CTC = "${CTC}", designationLookupId = "${designationLookupId}"
    WHERE id = ${employeeId};
    `;

    await connection.query(currentJobDetailQuery);

    // update user role
    const updateUserRoleQuery = `
    UPDATE user SET
      userRoleLookupId = ${userRoleLookupId}
    WHERE employeeId = ${employeeId};
    `;
    await connection.query(updateUserRoleQuery);

    // insert/update data in address table
    if (experience?.[0]) {
      await Promise.all(
        experience.map(async (item) => {
          const {
            id,
            organisationName,
            startDate,
            endDate,
            designationLookupId,
          } = item;

          const formattedStartDate = new Date(startDate)
            .toISOString()
            .slice(0, 19)
            .replace("T", " ");

          const formattedEndDate = new Date(endDate)
            .toISOString()
            .slice(0, 19)
            .replace("T", " ");

          let query;
          if (item.id) {
            query = `
            UPDATE experience SET
              organisationName = "${organisationName}", startDate = "${formattedStartDate}", 
              endDate = "${formattedEndDate}", designationLookupId = "${designationLookupId}"
            WHERE id = ${id} AND employeeId = ${employeeId};
            `;
          } else {
            query = `
            INSERT INTO experience 
              (organisationName, startDate, endDate, employeeId, designationLookupId) 
            VALUES 
              ("${organisationName}", "${formattedStartDate}", "${formattedEndDate}", ${employeeId}, ${designationLookupId});
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

/**
 *
 * @param {*} employeeId
 * @param {*} employeePersonalData
 * @returns
 */
exports.addOrUPdateEmployeeSkillData = async (
  employeeId,
  employeeSkillData
) => {
  let connection;
  try {
    connection = await db.getConnection();
    // Start the transaction
    await connection.beginTransaction();

    const { skills, hobbiesRecord } = employeeSkillData;

    // insert/update data in contact table
    if (skills?.[0]) {
      await Promise.all(
        skills.map(async (item) => {
          const {
            id,
            notes,
            skillType,
            skillName,
            skillLevel,
            skillExperienceYear,
          } = item;
          let query;
          if (item.id) {
            query = `
            UPDATE skill SET
              notes = "${notes}", skillType = ${skillType}, skillName = ${skillName}
              skillLevel = ${skillLevel}, skillExperienceYear = ${skillExperienceYear}
            WHERE id = ${id} AND employeeId = ${employeeId};
            `;
          } else {
            query = `
            INSERT INTO skill (notes, skillType, skillName, skillLevel, skillExperienceYear, employeeId) 
            VALUES ("${notes}", ${skillType}, ${skillName}, ${skillLevel}, ${skillExperienceYear}, ${employeeId});
            `;
          }
          const queryResponse = await connection.query(query);
          return queryResponse;
        })
      );
    }

    // insert/update data in address table
    if (hobbiesRecord?.[0]) {
      await Promise.all(
        hobbiesRecord.map(async (item) => {
          const { id, hobbiesType, hobbiesName } = item;
          let query;
          if (item.id) {
            query = `
            UPDATE hobbiesRecord SET
              hobbiesType = ${hobbiesType}, hobbiesName = ${hobbiesName}
            WHERE id = ${id} AND employeeId = ${employeeId};
            `;
          } else {
            query = `
            INSERT INTO address 
              (hobbiesType, hobbiesName, employeeId) 
            VALUES 
              (${hobbiesType}, ${hobbiesName}, ${employeeId});
            `;
          }
          const queryResponse = await connection.query(query);
          return queryResponse;
        })
      );
    }

    // Commit the transaction if all queries are successful
    await connection.commit();
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
