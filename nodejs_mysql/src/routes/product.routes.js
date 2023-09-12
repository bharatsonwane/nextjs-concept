const express = require('express');

const productController = require('../controllers/product.controller');

const router = express.Router();



router.post('/', productController.postCreateProject);

router.put('/', productController.putUpdateProject);

router.get("/", productController.getRetrieveProjectList);

router.get('/:id', productController.getRetrieveProjectById);

router.delete('/:id', productController.deleteDeleteProject);

module.exports = router;