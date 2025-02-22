const prisma = require("../utils/prismaClient");

const Product = {
  async findAll() {
    return await prisma.product.findMany({
      include: { category: true, variants: true, images: true }, // Include related data
    });
  },

  async findById(id) {
    return await prisma.product.findUnique({
      where: { id: parseInt(id) },
      include: { category: true, variants: true, images: true },
    });
  },

  async create(data) {
    return await prisma.product.create({ data });
  },

  async update(id, data) {
    return await prisma.product.update({
      where: { id: parseInt(id) },
      data,
    });
  },

  async delete(id) {
    return await prisma.product.delete({
      where: { id: parseInt(id) },
    });
  },

  async addImage(productId, imageUrl, isPrimary) {
    return await prisma.productImage.create({
      data: {
        productId,
        imageUrl,
        isPrimary,
      },
    });
  },
};

module.exports = Product;
