const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/pokemon/:name', async (req, res) => {
  const { name } = req.params;

  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    res.json(response.data);
  } 
  catch (error) {
    console.error(`Error fetching ${name} data:`, error);
    res.status(500).json({ error: `Error fetching ${name} data` });
  }
});

router.get('/item/:item', async (req, res) => {
  const { item } = req.params;
  
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/item/${item.toLowerCase()}`);
    res.json(response.data);
  } 
  catch (error) {
    console.error(`Error fetching ${item} data:`, error);
    res.status(500).json({ error: `Error fetching ${item} data` });
  }
});


module.exports = router;
