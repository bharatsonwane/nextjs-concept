const express = require("express");
const router = express.Router();

// import from other files----------------------------------------------
const lookupRotes = require("./lookup.routes");
const employeeRoutes = require("./employee.routes");
const productRoutes = require("./product.routes");

router.use("/lookup", lookupRotes);

router.use("/employee", employeeRoutes);

// dummy route
router.use("/product", productRoutes);

module.exports = router;
