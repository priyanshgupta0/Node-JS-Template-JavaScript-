// src/routes/index.js
const express = require("express");
const router = express.Router();

// Import user routes
const userRoutes = require("./userRoutes");

// Set up the user routes with a sub-route
router.use("/users", userRoutes);

// You can add additional route groups here
// e.g., router.use("/posts", require("./postRoutes"));

module.exports = router;
