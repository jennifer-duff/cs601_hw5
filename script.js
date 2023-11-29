const errorMsg = document.getElementById("error-msg");
const table = document.getElementById("degree-table");
const MAX_ROWS = 4;

async function fetchData() {
    // Don't fetch the data if it's already been succesfully fetched
    // (i.e., if the user clicks the button multiple times)
    let numRows = table.children[0].childElementCount;
    if (numRows < MAX_ROWS) {
        const response = await fetch("https://jennifer-duff.github.io/cs601_hw5/data.json");
        const status = response.status;

        if (status === 200) {
            displayData(await response.json());
        }
        else {
            displayErrorMsg();
        }
    }
    else {
        errorMsg.innerText = "No more degrees to display."
    }
}

function displayData(data) {
    // Wipe error message if there was one
    errorMsg.innerHTML = "";

    // Make the table visible
    table.style.display = "block";

    // Fill in the table with the data (one row per entry)
    for (const entry of Object.values(data)) {
        const row = table.insertRow();

        const nameCell = row.insertCell();
        nameCell.innerHTML = `<td>${entry.name}</td>`;

        const majorCell = row.insertCell();
        majorCell.innerHTML = `<td>${entry.major}</td>`;

        const typeCell = row.insertCell();
        typeCell.innerHTML = `<td>${entry.type}</td>`;

        const yearCell = row.insertCell();
        yearCell.innerHTML = `<td>${entry.year_conferred}</td>`;
    };
}

function displayErrorMsg() {
    errorMsg.innerHTML = "Whoops! Sorry, there was an error. Try again!";
}