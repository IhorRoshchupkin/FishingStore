const prisma = require("../utils/prismaClient");

const Category = {
  async findAll() {
    return await prisma.category.findMany();
  },

  async findById(id) {
    return await prisma.category.findUnique({
      where: { id: parseInt(id) },
      include: { products: true }, // Include related products
    });
  },

  async create(data) {
    return await prisma.category.create({ data });
  },

  async update(id, data) {
    return await prisma.category.update({
      where: { id: parseInt(id) },
      data,
    });
  },

  async delete(id) {
    return await prisma.category.delete({
      where: { id: parseInt(id) },
    });
  },
};

module.exports = Category;
