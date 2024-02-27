const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', (req, res) => {
  /*
  try {
    const response = await axios.get('https://www.fruityvice.com/api/fruit/banana');

    if (response.status !== 200) {
      throw new Error('Failed to fetch data from external API');
    }
    console.log("testing...");

    res.json(response.data);

  } 
  catch (error) {
    console.error('Error fetching fruits:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  */

  res.send("testing");
});

module.exports = router;
