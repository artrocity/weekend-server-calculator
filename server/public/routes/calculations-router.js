// Import modules
const express = require('express');
const calculations = require('../data/calculations-data');

// Create the router variable
const router = express.Router();

// Define the express routes for /calculations

router.get('/', (req, res) => {
    if(calculations && calculations.length > 0) {
        res.status(200).send(calculations);
    } else {
        res.status(404).send('No calculations data found')
    }
});

// Export the route
module.exports = router;