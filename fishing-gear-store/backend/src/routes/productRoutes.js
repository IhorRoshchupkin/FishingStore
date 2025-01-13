const express = require("express");
const {
  getProducts,
  createProduct,
} = require("../controllers/productController"); // Ensure the correct path for the controller

const router = express.Router();

// GET all products
router.get("/products", getProducts);

// POST create a new product
router.post("/products", createProduct);

module.exports = router;
