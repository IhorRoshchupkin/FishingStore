const ProductService = require("../services/productService");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await ProductService.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await ProductService.getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const newProduct = await ProductService.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await ProductService.updateProduct(
      req.params.id,
      req.body
    );
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await ProductService.deleteProduct(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.uploadProductImage = async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const imageUrl = `/uploads/${req.file.filename}`; // Path to the uploaded file
    const isPrimary = req.body.isPrimary === "true"; // isPrimary parameter from the request body

    // Save image information in the database
    const newImage = await ProductService.addProductImage(
      productId,
      imageUrl,
      isPrimary
    );

    res.status(201).json(newImage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
