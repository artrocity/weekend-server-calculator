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

router.post('/', (req, res) => {
    // obtain the body and store in variable
    const { numOne, numTwo, operator } = req.body;
    
    // Initialize a result variable to store the result
    let result;

    // Perform the server side calculations
    switch (operator) {
        case '+':
            result = numOne + numTwo;
            break;
        case '-':
            result = numOne - numTwo;
            break;
        case '*':
            result = numOne * numTwo;
            break;
        case '/':
            if (numTwo === 0) {
                return res.status(400).send('Cannot divide by zero');
            }
            result = numOne / numTwo;
            break;
        default:
            return res.status(400).send('Invalid mathmatical operator');      
    }

    // Create an object and it push to calculations
    const newCalculation = { numOne, numTwo, operator, result };
    calculations.push(newCalculation);

    // Send a successfull ack code
    res.status(201).send("Calculation added!")
});

// Export the route
module.exports = router;