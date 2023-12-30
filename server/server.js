// Import Modules
const express = require('express');
const calculationsRouter = require('./public/routes/calculations-router');

// Create the server
const app = express();
let PORT = process.env.PORT || 5001;

// Define the middleware
app.use(express.json());
app.use(express.static('server/public'));

// Express Routes
app.use('/calculations', calculationsRouter);





// PLEASE DO NOT MODIFY ANY CODE BELOW THESE BEARS:
// 🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸

// Makes it so you don't have to kill the server
// on 5000 in order to run the tests:
if (process.env.NODE_ENV === 'test') {
    PORT = 5001;
}

// This starts the server...but also stores it in a variable.
// This is weird. We have to do it for testing reasons. There
// is absolutely no need for you to reason about this.
const server = app.listen(PORT, () => {
    console.log('server running on: ', PORT);
});

// server.setTimeout(500)

// This is more weird "for testing reasons" code. There is
// absolutely no need for you to reason about this.
app.closeServer = () => {
    server.close();
}

app.setCalculations = (calculationsToSet) => {
    calculations = calculationsToSet;
}

module.exports = app;
