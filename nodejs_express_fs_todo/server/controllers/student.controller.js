const Student = require('../services/student.service');


exports.postCreateStudent = async (req, res, next) => {
    try {
        const { firstName = "", lastName = "", dateOfBirth = "", gender = "", knownLanguages = [], address = "", course = "" } = req.body
        reqObj = { firstName, lastName, dateOfBirth, gender, knownLanguages, address, course }
        const studentObject = new Student(null, reqObj)
        const resObj = await studentObject.createStudent()
        await res.status(200).send(resObj);
    } catch (error) {
        res.status(error.statusCode ? error.statusCode : 500).send({ error: error.message })
    }
};


exports.getRetrieveStudentList = async (req, res, next) => {
    try {
        const resObj = await Student.retrieveStudentList()
        await res.status(200).send(resObj);
    } catch (error) {
        res.status(error.statusCode ? error.statusCode : 500).send({ error: error.message })
    }
};


exports.putUpdateStudent = async (req, res, next) => {
    try {
        const {id, firstName, lastName, dateOfBirth, gender, knownLanguages, address, course } = req.body
        const reqObj = {id, firstName, lastName, dateOfBirth, gender, knownLanguages, address, course }
        const studentObject = new Student(null, reqObj)
        const resObj = await studentObject.updateStudent()
        await res.status(200).send(resObj);
    } catch (error) {
        res.status(error.statusCode ? error.statusCode : 500).send({ error: error.message })
    }
};



exports.deleteDeleteStudent = async (req, res, next) => {
    let reqId = req.params.id
    try {
        let resObj = await Student.deleteStudent(reqId)
        await res.status(200).send({ id: resObj, message: "task deleted succesfully" });
    } catch (error) {
        res.status(error.statusCode ? error.statusCode : 500).send({ error: error.message })
    }
}



exports.getRetrieveStudentById = async (req, res, next) => {
    let reqId = req.params.id
    try {
        let resObj = await Student.retrieveStudentbyId(reqId)
        await res.status(200).send(resObj);
    } catch (error) {
        res.status(error.statusCode ? error.statusCode : 500).send({ error: error.message })
    }
}
