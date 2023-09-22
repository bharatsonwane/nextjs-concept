const express = require("express");

const lookupController = require("../controllers/lookup.controller");

const router = express.Router();

router.get("/", lookupController.retrieveLookupList);


module.exports = router;
