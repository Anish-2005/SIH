// index.js
const express = require('express');
const cors = require('cors');

const geminiRouter = require('./gemini');  // Import Gemini routes
const serverRouter = require('./server');  // Import MongoDB routes
const lawRouter = require('./laws');  // Import the law routes


const app = express();
app.use(cors());
app.use(express.json());

// Use both routers
app.use('/api/gemini', geminiRouter);  // Gemini routes at /api/gemini
app.use('/api/server', serverRouter);  // MongoDB routes at /api/server
app.use('/api/laws', lawRouter);  // Law routes at /api/law


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
