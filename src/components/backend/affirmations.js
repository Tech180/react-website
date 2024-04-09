const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const response = await fetch('https://www.affirmations.dev');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        const affirmation = data.affirmation;
        res.json({ affirmation }); 
    } 
    catch (error) {
        const errorMessage = 'Error fetching affirmation';
        console.error(errorMessage, error);
        res.status(500).json({ error: errorMessage });
    }
});

module.exports = router;
