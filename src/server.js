// src/server.js
const express = require("express");
const app = express();
const connectDB = require("./config/database");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
const cors = require("cors");

// Load environment variables
require("dotenv").config();

// Connect to MongoDB
connectDB();

app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Import and use centralized routes
const routes = require("./routes/index");
app.use("/api", routes);

// Default route for testing
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start the server
const PORT = process.env.PORT || 5000;
const ipAddress = "0.0.0.0";
app.listen(PORT, ipAddress, () => {
  console.log(`Server started on http://localhost:${PORT}`);
  console.log(`Server running at http://172.31.192.1:${PORT}/`);
});
