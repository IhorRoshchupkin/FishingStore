const Variant = require("../models/variantModel");

const VariantService = {
  async getAllVariants() {
    return await Variant.findAll();
  },

  async getVariantById(id) {
    return await Variant.findById(id);
  },

  async createVariant(data) {
    return await Variant.create(data);
  },

  async updateVariant(id, data) {
    return await Variant.update(id, data);
  },

  async deleteVariant(id) {
    return await Variant.delete(id);
  },
};

module.exports = VariantService;
