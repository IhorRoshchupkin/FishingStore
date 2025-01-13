const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany(); // Replace with your database logic
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  const { name, description, price, imageUrl } = req.body;

  try {
    const newProduct = await prisma.product.create({
      data: { name, description, price, imageUrl },
    });
    res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to create product" + error });
  }
};
