"use strict";

const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());


app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
  res.send("Hello, Express server is running and serving static files 🚀");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
  console.log("Press Ctrl+C to end this process.");
});

