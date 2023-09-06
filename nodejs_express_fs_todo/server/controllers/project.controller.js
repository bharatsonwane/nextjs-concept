const Project = require('../services/project.service');


exports.postCreateProject = async (req, res, next) => {
    try {
        const { title, date, description, technology, library } = req.body
        const reqObj = { title, date, description, technology, library }
        const projectObject = new Project(null, reqObj)
        const resObj = await projectObject.createProject()
        await res.status(200).send(resObj);
    } catch (error) {
        res.status(error.statusCode ? error.statusCode : 500).send({ error: error.message })
    }
};


exports.getRetrieveProjectList = async (req, res, next) => {
    try {
        const resObj = await Project.retrieveProjectList()
        await res.status(200).send(resObj);
    } catch (error) {
        res.status(error.statusCode ? error.statusCode : 500).send({ error: error.message })
    }
};


exports.putUpdateProject = async (req, res, next) => {
    try {
        const { id, title, date, description, technology, library } = req.body
        const reqObj = { id, title, date, description, technology, library }
        const projectObject = new Project(null, reqObj)
        const resObj = await projectObject.updateProject()
        await res.status(200).send(resObj);
    } catch (error) {
        res.status(error.statusCode ? error.statusCode : 500).send({ error: error.message })
    }
};



exports.deleteDeleteProject = async (req, res, next) => {
    let reqId = req.params.id
    try {
        let resObj = await Project.deleteProject(reqId)
        await res.status(200).send({ id: resObj, message: "task deleted succesfully" });
    } catch (error) {
        res.status(error.statusCode ? error.statusCode : 500).send({ error: error.message })
    }
}



exports.getRetrieveProjectById = async (req, res, next) => {
    let reqId = req.params.id
    try {
        let resObj = await Project.retrieveProjectbyId(reqId)
        await res.status(200).send(resObj);
    } catch (error) {
        res.status(error.statusCode ? error.statusCode : 500).send({ error: error.message })
    }
}
