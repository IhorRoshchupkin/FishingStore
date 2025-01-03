const express = require("express");
const bodyParser = require("express"); // Middleware to parse JSON and URL-encoded data
const app = express();
const PORT = 5000;
const productRoutes = require("./productRoutes");

// Middleware
app.use(express.json()); // Parse incoming JSON data
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use("/api", productRoutes);

// Simulated database
let products = [];

// Route to create a product
app.post("/api/products", (req, res) => {
  // Extract data from query parameters
  const { name, description, price, imageUrl } = req.query;

  // Check if all fields are provided
  if (!name || !description || !price || !imageUrl) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Create a new product object
  const newProduct = {
    id: products.length + 1,
    name,
    description,
    price: parseFloat(price),
    imageUrl,
  };

  // Save to "database"
  products.push(newProduct);

  // Return success response
  res
    .status(201)
    .json({ message: "Product created successfully", product: newProduct });
});

app.get("/api/products", getProducts);

// Check if server works
app.get("/", (req, res) => {
  res.send("Server is running. Welcome to the API!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
