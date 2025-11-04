console.log("index.js is successfully linked!");

// Function to fetch a random image from the server endpoint
async function fetchRandomImage() {
  try {
    const response = await fetch("http://localhost:3000/api/v1/getRandomImage");
    const data = await response.json();
    console.log("Unsplash response:", data);

    // Display the image on the page
    const imageElement = document.getElementById("randomImage");
    imageElement.src = data.data; // the URL returned from the server
  } catch (error) {
    console.error("Error fetching image:", error);
  }
}

// Run on page load (or attach to a button)
fetchRandomImage();

