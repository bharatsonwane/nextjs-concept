const express = require("express");

const productController = require("../controllers/product.controller");

const router = express.Router();

router.post("/", productController.createProduct);

router.get("/", productController.retrieveProductList);

router.get("/:id", productController.retrieveProductById);

router.put("/", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
