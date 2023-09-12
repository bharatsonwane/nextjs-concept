const db = require("../database/db");

module.exports = class Product {
  constructor(reqObj) {
    this.title = reqObj.title;
    this.date = reqObj.date;
    this.description = reqObj.description;
    this.technology = reqObj.technology;
    this.library = reqObj.library;
  }

  async createProduct() {
    return this; // return created Object
  }

  static async retrieveProductList() {
    return;
  }

  async updateProduct() {}

  static deleteProduct(reqId) {
    return reqId;
  }

  static async retrieveProductbyId(reqId) {
    return this;
  }
};
