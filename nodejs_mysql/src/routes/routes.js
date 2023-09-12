const express = require("express");
const router = express.Router();

// import from other files----------------------------------------------
const productRoutes = require("./product.routes");

router.use("/product", productRoutes);

module.exports = router;
