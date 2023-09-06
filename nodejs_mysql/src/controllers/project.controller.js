// const Project = require("../services/project.service");

exports.postCreateProject = async (req, res, next) => {
  try {
    const { title, date, description, technology, library } = req.body;
    const reqObj = { title, date, description, technology, library };

    await res.status(200).send("resObj");
  } catch (error) {
    res
      .status(error.statusCode ? error.statusCode : 500)
      .send({ error: error.message });
  }
};

exports.getRetrieveProjectList = async (req, res, next) => {
  try {
    await res.status(200).send("resObj");
  } catch (error) {
    res
      .status(error.statusCode ? error.statusCode : 500)
      .send({ error: error.message });
  }
};

exports.putUpdateProject = async (req, res, next) => {
  try {
    await res.status(200).send("resObj");
  } catch (error) {
    res
      .status(error.statusCode ? error.statusCode : 500)
      .send({ error: error.message });
  }
};

exports.deleteDeleteProject = async (req, res, next) => {
  try {
    let reqId = req.params.id;
    await res
      .status(200)
      .send({ id: "resObj", message: "task deleted succesfully" });
  } catch (error) {
    res
      .status(error.statusCode ? error.statusCode : 500)
      .send({ error: error.message });
  }
};

exports.getRetrieveProjectById = async (req, res, next) => {
  try {
    let reqId = req.params.id;
    await res.status(200).send("resObj");
  } catch (error) {
    res
      .status(error.statusCode ? error.statusCode : 500)
      .send({ error: error.message });
  }
};
