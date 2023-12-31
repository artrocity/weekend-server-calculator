console.log('client.js is sourced!');

// Function to make an axios get request
function getCalculations() {
    axios({
        method: "GET",
        url: "/calculations"
    })
    .then(response => {
        renderCalculations(response.data);
        renderLastCalculation(response.data);
    })
    .catch(err => {
        console.error("Error Fetching The Calculations Data From The Server: ", err);
        alert("ERROR FETCHING CALCULATIONS FROM SERVER, SEE CONSOLE FOR MORE DETAILS");
    })
}

// Function to render calculations in the result table body
function renderCalculations(calculations) {
    // Obtain the table body and clear contents
    const resultTableElement = document.querySelector(".resultTableBody");
    resultTableElement.innerHTML = "";

    // Loop through the calculations and append to the table body
    calculations.forEach(calc => {
        const row = `<tr>
                        <td>${calc.numOne}</td>
                        <td>${calc.operator}</td>
                        <td>${calc.numTwo}</td>
                        <td>${calc.result}</td>
                    </tr>`;
        resultTableElement.innerHTML += row;
        });
}

// Function to render the last calculation
function renderLastCalculation(calculations) {
    // Obtain the recent result paragraph element and clear content
    let pElement = document.querySelector(".recentResultP");
    pElement.innerText = "";

    // Check if there are any calculations
    if (calculations.length > 0) {
        // Get the last calculation from the array
        let lastCalculation = calculations[calculations.length - 1];

        // Display the last calculation
        pElement.innerText = `${lastCalculation.result}`;
    } else {
        // Display a message if there are no calculations
        pElement.innerText = "No calculations yet.";
    }
}

// Add event listener for the buttons
let selectedOperator = null;

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.operator').forEach(btn => btn.classList.remove('active'));
        
        // Add active class to the clicked button
        this.classList.add('active');
        selectedOperator = this.value;
    });
});

// Get the values from the form
document.getElementById('calculationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    if (!selectedOperator) {
        alert('Please select an operator');
        return;
    }

    const numOne = parseFloat(document.getElementById('firstNumber').value);
    const numTwo = parseFloat(document.getElementById('secondNumber').value);

    submitCalculation(numOne, numTwo, selectedOperator);
});

// Make an axios post request and submit data to server to be calculated
function submitCalculation(numOne, numTwo, operator) {
    axios.post('/calculations', { numOne, numTwo, operator })
        .then(() => {
            // Fetch updated calculations after successful POST
            getCalculations();
        })
        .catch(error => console.error('Error submitting calculation:', error));
}

// Initialize the calculations
getCalculations();