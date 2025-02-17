const express = require("express");
const {
  getProducts,
  createProduct,
  getProductById,
} = require("../controllers/productController"); // Ensure the correct path for the controller

const router = express.Router();

// GET all products
router.get("/products", getProducts);

// POST create a new product
router.post("/products", createProduct);

// GET a product by ID
router.get("/products/:id", getProductById);

module.exports = router;
