const Product = require("../services/product.service");

exports.createProduct = async (req, res, next) => {
  try {
    const { name, description, price } = req.body;
    const reqObj = { name, description, price };

    const productObj = new Product(reqObj);
    const data = await productObj.createProduct();

    await res.status(200).send("resObj");
  } catch (error) {
    next(error);
  }
};

exports.retrieveProductList = async (req, res, next) => {
  try {
    const data = await Product.retrieveProductList();
    await res.status(200).send(data);
  } catch (error) {
    next(error);
  }
};

exports.retrieveProductById = async (req, res, next) => {
  try {
    let reqId = req.params.id;
    const data = await Product.retrieveProductById(reqId);
    await res.status(200).send(data);
  } catch (error) {
    next(error);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    await res.status(200).send("resObj");
  } catch (error) {
    next(error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    let reqId = req.params.id;
    await res
      .status(200)
      .send({ id: "resObj", message: "task deleted succesfully" });
  } catch (error) {
    next(error);
  }
};
