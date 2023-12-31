# Server-Side Calculator

## Description

**Duration**: 1 Weekend

### What is the Server-Side Calculator?

Server-Side Calculator is a web application designed to perform basic arithmetic operations - addition, subtraction, multiplication, and division. 

This application uniquely handles calculation logic on the server side.

### Problem Solved

The main challenge addressed by the Server-Side Calculator is to securely and efficiently perform basic arithmetic operations. By shifting computation to the server, we mitigate risks associated with executing code on the client side (like using JavaScript's `eval()` function), thereby enhancing security and reliability.

### How We Built This

The application is built using:

- **Frontend**: HTML, CSS (with Bootstrap for styling), and JavaScript (with Axios for AJAX requests).

- **Backend**: Node.js and Express.js to handle server-side logic.

The calculator allows users to input two numbers and select an arithmetic operation. Upon submission, an AJAX request is sent to the server, where calculations are performed. Results are then sent back and rendered on the client side.

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)

## Installation

1. Clone the repository or download the source code.
2. Install Node.js if not already installed.
3. Navigate to the project directory and run `npm install` to install dependencies.
4. Start the server using `node server.js`.
5. Open `index.html` in your browser to use the application.

## Usage

1. Enter a number in each of the two input fields.
2. Select an arithmetic operation (+, -, *, /) by clicking the corresponding button.
3. Click "=" to submit the operation.
4. The calculation result will be displayed under "Most Recent Calculation", and the full history under "All Calculations History".
5. To clear the inputs and start a new calculation, click "C".

## Built With

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- Axios
- Bootstrap

## Acknowledgement

Thanks to those who contributed to this project, including Prime Digital Academy

## Support

If you have any issues or suggestions, please email me at [sampleEmail@example.com].