const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://www.fruityvice.com/api/fruit/all');
        
        if (response.status !== 200) {
            throw new Error('Failed to fetch data from external API');
        }
        
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching fruits:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
