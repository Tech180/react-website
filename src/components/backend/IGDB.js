const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const apicache = require('apicache');
const path = require('path');
const fs = require('fs');

const cache = apicache.middleware;

const ids = [3349, 132516, 1517, 3189, 472, 8284, 111, 103329, 11182, 11156, 124, 8347, 2485, 121, 212089, 295252];
const RATE_LIMIT = 250;

let lastRequestTime = 0;

const getHeaders = () => {
  const headersPath = path.join(__dirname, '../../../public/headers.json');
  const headers = JSON.parse(fs.readFileSync(headersPath, 'utf-8'));
  return headers;
};

// Function to fetch data from IGDB API and handle rate limit exceeded errors
const fetchData = async (url, res) => {
  try {
    const now = Date.now();
    const timeSinceLastRequest = now - lastRequestTime;

    if (timeSinceLastRequest < RATE_LIMIT) {
      const delay = RATE_LIMIT - timeSinceLastRequest;
      await new Promise(resolve => setTimeout(resolve, delay));
    }

    const headers = getHeaders();

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: `fields *; where ${url.includes('games') ? 'id' : 'game'} = (${ids.join(', ')}); limit 20;`
    });

    if (response.status === 429) {
      const retryAfter = response.headers.get('retry-after');
      res.status(429).json({ error: `Rate limit exceeded. Retry after ${retryAfter} seconds.` });
      return;
    }

    const data = await response.json();
    res.json(data);

    lastRequestTime = Date.now();
  } 
  catch (error) {
    console.error(`Error fetching ${url.includes('games') ? 'games' : 'covers'} data: `, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

router.post('/g', cache(), async (req, res) => {
  await fetchData('https://api.igdb.com/v4/games', res);
});

router.post('/c', cache(), async (req, res) => {
  await fetchData('https://api.igdb.com/v4/covers', res);
});

module.exports = router;
