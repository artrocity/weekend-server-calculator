console.log('client.js is sourced!');

// Function to make an axios get request
function getCalculations() {
    axios({
        method: "GET",
        url: "/calculations"
    })
    .then(response => {
        renderCalculations(response.data);
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

// Make an axios post request and submit data to server to be calculated