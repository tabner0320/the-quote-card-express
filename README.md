The Quote Card Express

An Express.js server that serves a static frontend page from a `public/` directory.  
Built as a minimal setup for serving HTML, CSS, and client-side JavaScript with Node + Express.

📁 Project Structure

the-quote-card-express/
├── public/
│ └── index.html
├── .gitignore
├── package.json
├── package-lock.json
└── server.js


- **public/** — holds static frontend assets (HTML, CSS, JS)  
- **server.js** — the Express app, configured to serve static files and parse body data  
- **package.json** — project metadata and scripts  
- **.gitignore** — specifies files/folders to ignore (e.g. `node_modules/`, `.env`)

- Getting Started

Follow these steps to run the project locally:

1. **Clone the repository**  
   ```bash
   git clone https://github.com/tabner0320/the-quote-card-express.git
   cd the-quote-card-express

   Install dependencies

npm install

Start the server

npm run dev

View in browser
Open your browser and go to:

http://localhost:5500


You should see the content from public/index.html.

Features & Middleware

Serves static files from public/ using

app.use(express.static("./public"));


Parses JSON request bodies via express.json()

Parses URL-encoded form data via express.urlencoded({ extended: false })

Basic route setup and listening logic

Easily extensible if you want to add APIs or dynamic routing later

## AI Assistance Disclosure
Portions of this project were developed with guidance from ChatGPT (OpenAI) to assist with structure, code examples, and formatting. All final code was reviewed, edited, and tested by Theophilus M. Abner Jr.