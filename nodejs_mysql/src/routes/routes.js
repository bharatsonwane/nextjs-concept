const express = require("express");
const router = express.Router();

// import from other files----------------------------------------------
const lookupRotes = require("./lookup.routes");
const productRoutes = require("./product.routes");

router.use("/lookup", lookupRotes);

router.use("/product", productRoutes);

module.exports = router;
