const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const response = await fetch(
      'https://api.igdb.com/v4/games',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Client-ID': 'svnxasixf2ril018kckyt1bnaxuykk',
          'Authorization': 'Bearer ujiwgp54ppz0u9mdzantb8h2a4qntf',
          'Content-Type': 'text/plain',
        },
        body: req.body,
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
