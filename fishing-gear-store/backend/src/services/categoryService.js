const Category = require("../models/categoryModel");

const CategoryService = {
  async getAllCategories() {
    return await Category.findAll();
  },

  async getCategoryById(id) {
    return await Category.findById(id);
  },

  async createCategory(data) {
    return await Category.create(data);
  },

  async updateCategory(id, data) {
    return await Category.update(id, data);
  },

  async deleteCategory(id) {
    return await Category.delete(id);
  },
};

module.exports = CategoryService;
