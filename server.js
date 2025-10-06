"use strict";

const express = require("express");
const app = express();

// Define the port
const port = 5500;

// Serve static files from the "public" directory
app.use(express.static("./public"));

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: false }));

// Example route (root)
app.get("/", (req, res) => {
  res.send("Hello, Express server is running and serving static files 🚀");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
  console.log("Press Ctrl+C to end this process.");
});

