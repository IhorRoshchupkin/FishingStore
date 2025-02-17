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

// Get a product by ID
exports.getProductById = async (req, res) => {
  const { id } = req.params; // Get the ID from the request parameters

  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(id) }, // Search for the product by ID
    });

    if (!product) {
      return res.status(404).json({ error: "Product was not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Product was not found" });
  }
};
