const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Load laws data from laws.json
let laws = [];

const lawsFilePath = path.join(__dirname, 'laws.json');

fs.readFile(lawsFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading laws.json:', err);
    return;
  }
  try {
    laws = JSON.parse(data); // Parse the JSON data into an array of laws
  } catch (parseError) {
    console.error('Error parsing laws.json:', parseError);
  }
});

router.get('/', (req, res) => {
  res.send('Welcome to the LAWS.');
});

// Welcome route for the server - Show all laws data
router.get('/acts', (req, res) => {
  console.log('Fetching all laws data...');
  res.status(200).json(laws); // Send the laws data as JSON
});

// Search for laws based on a keyword
router.get('/search', (req, res) => {
  const keyword = req.query.keyword ? req.query.keyword.toLowerCase() : '';
  console.log(`Searching for laws with keyword: ${keyword}`);

  if (!keyword) {
    return res.status(400).json({ message: 'Keyword query parameter is required.' });
  }

  const results = laws.filter(law => 
    law.keywords && law.keywords.includes(keyword) || 
    law.title.toLowerCase().includes(keyword) || 
    law.description.toLowerCase().includes(keyword)
  );

  if (results.length > 0) {
    res.status(200).json(results);
  } else {
    res.status(404).json({ message: 'No laws found for the given keyword.' });
  }
});

module.exports = router;
