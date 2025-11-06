const express = require("express");
const app = express();
const cors = require('cors')

// Import the routes (correct relative path from this file)
const aiRoutes = require('./routes/ai.routes');

app.use(cors())

// Middleware to parse JSON request bodies
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// AI routes
app.use("/ai", aiRoutes);

module.exports = app;
