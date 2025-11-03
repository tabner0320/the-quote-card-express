"use strict";

const express = require("express");
const path = require("path");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express();

const port = process.env.PORT || 3000;

require("dotenv").config();
const cors = require("cors");

const corsOptions = {
  origin: `http://localhost:${port}`,
};

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello, Express server is running and serving static files 🚀");
});


// ==========================
// 🔹 Function to get random image from Unsplash
// ==========================
async function getRandomImage() {
  const endpoint = `https://api.unsplash.com/photos/random/?client_id=${process.env.CLIENT_ID}`;
  try {
    const response = await fetch(endpoint);
    const returnedData = await response.json();

    console.log("Unsplash response:", returnedData); // Optional debug line

    if (!returnedData.urls || !returnedData.urls.regular) {
      throw new Error("Unexpected response from Unsplash API");
    }

    return returnedData.urls.regular;
  } catch (error) {
    console.error("Error fetching image:", error);
  }
}


// ==========================
// 🔹 Route for frontend to call
// ==========================
app.get("/api/v1/getRandomImage", async (request, response) => {
try {
    const imageUrl = await getRandomImage();
    response.status(200).json({
      status: 200,
      data: imageUrl,
    });
  } catch (error) {
    response.status(500).json({
      status: 500,
      message: "Failed to fetch image from Unsplash",
    });
  }
});


// ==========================
// 🚀 Start the server
// ==========================
app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
  console.log("Press Ctrl+C to end this process.");
});

