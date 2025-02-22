const prisma = require("../utils/prismaClient");

const Variant = {
  async findAll() {
    return await prisma.productVariant.findMany({
      include: { product: true }, // Include related product
    });
  },

  async findById(id) {
    return await prisma.productVariant.findUnique({
      where: { id: parseInt(id) },
      include: { product: true },
    });
  },

  async create(data) {
    return await prisma.productVariant.create({ data });
  },

  async update(id, data) {
    return await prisma.productVariant.update({
      where: { id: parseInt(id) },
      data,
    });
  },

  async delete(id) {
    return await prisma.productVariant.delete({
      where: { id: parseInt(id) },
    });
  },
};

module.exports = Variant;
