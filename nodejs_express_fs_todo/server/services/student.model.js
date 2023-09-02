
const fsHelper = require('../helper/functions/fsHelper');
const uniqueId = require('../helper/functions/uniqueIdHelper')

module.exports = class Studnet {
    constructor(userInfo, reqObj) {
        this.createdOn = reqObj && reqObj.createdOn ? reqObj.createdOn : new Date().toISOString();
        this.modifiedOn = null;
        this.id = reqObj.id;
        this.firstName = reqObj.firstName
        this.lastName = reqObj.lastName
        this.dateOfBirth = reqObj.dateOfBirth;
        this.gender = reqObj.gender;
        this.knownLanguages = reqObj.knownLanguages;
        this.address = reqObj.address;
        this.course = reqObj.course;
    }


    async createStudent() {
        this.id = uniqueId.getUniqueId(5);
        // store that in a database or in a file
        const data = fsHelper.studentExtractFileData()
        data.push(this);
        fsHelper.studentWriteFileData(data)
        return this // return created Object
    }

    static async retrieveStudentList() {
        const data = fsHelper.studentExtractFileData()
        return data
    }

    async updateStudent() {
        const data = fsHelper.studentExtractFileData()
        if (this.id) {
            this.modifiedOn = new Date().toISOString()
            const existingStudnetIndex = data.findIndex(item => item.id === this.id);
            const newStudnetList = [...data];// data ==> Studnet list
            newStudnetList[existingStudnetIndex] = this;
            fsHelper.studentWriteFileData(newStudnetList)
            return this // return created Object
        }
    }

    static deleteStudent(reqId) {
        const data = fsHelper.studentExtractFileData()
        let filteredStudnet = data.filter(item => item.id !== reqId)
        fsHelper.studentWriteFileData(filteredStudnet)
        return reqId
    }

    static async retrieveStudentbyId(reqId) {
        const data = fsHelper.studentExtractFileData()
        const student = data.find(item => item.id === reqId);
        return student
    }
};
