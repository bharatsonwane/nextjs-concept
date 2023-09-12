const db = require("../database/db");

module.exports = class Product {
  constructor(reqObj) {
    this.name = reqObj.name;
    this.description = reqObj.description;
    this.price = reqObj.price;
  }

  async createProduct() {
    const [result] = await db.execute(
      "INSERT INTO products (name, description, price) VALUES (?, ?, ?)",
      [this.name, this.description, this.price]
    );
    return result; // return created Object
  }

  static async retrieveProductList() {
    const [rows] = await db.execute("SELECT * FROM products");
    return rows;
  }

  static async retrieveProductById(reqId) {
    const [rows] = await db.execute(
      `SELECT * FROM products WHERE id = "${reqId}"`
    );
    if (rows.length === 0) {
      throw {
        statusCode: 404,
        error: "Product not found",
      };
    }
    return rows;
  }

  async updateProduct() {}

  static deleteProduct(reqId) {
    return reqId;
  }
};
