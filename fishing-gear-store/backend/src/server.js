const express = require("express");
const bodyParser = require("body-parser"); // This is used to parse URL-encoded data, if needed
const app = express();
const PORT = 5000;
const productRoutes = require("./routes/productRoutes"); // Ensure correct path for productRoutes
const cors = require("cors");

app.use(cors());

// Middleware
app.use(express.json()); // Parse incoming JSON data
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// Use the routes for products under "/api"
app.use("/api", productRoutes);

// Check if server is running
app.get("/", (req, res) => {
  res.send("Server is running. Welcome to the API!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
