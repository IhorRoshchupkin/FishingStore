const Product = require("../models/productModel");

const ProductService = {
  async getAllProducts() {
    return await Product.findAll();
  },

  async getProductById(id) {
    return await Product.findById(id);
  },

  async createProduct(data) {
    return await Product.create(data);
  },

  async updateProduct(id, data) {
    return await Product.update(id, data);
  },

  async deleteProduct(id) {
    return await Product.delete(id);
  },

  async addProductImage(productId, imageUrl, isPrimary) {
    return await Product.addImage(productId, imageUrl, isPrimary);
  },
};

module.exports = ProductService;
