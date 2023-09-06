const express = require("express");
const router = express.Router();

// import from other files----------------------------------------------
const projectRoutes = require("./project.routes");

router.use("/project", projectRoutes);

module.exports = router;
