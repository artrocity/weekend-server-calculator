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

