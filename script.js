const errorMsg = document.getElementById("error-msg");
const table = document.getElementById("degree-table");
const MAX_ROWS = 4;

async function fetchData() {
    // Don't fetch the data if it's already been fetched
    // (i.e., if the user clicks the button multiple times)
    let numRows = table.children[0].childElementCount;
    if (numRows < MAX_ROWS) {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto"); //TODO: update this URL
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
    errorMsg.innerHTML = "";    // wipe error message if there was one

    // TODO: remove this section
    data = {
        "Pepperdine": {
            "name": data.name,
            "major": String(data.base_experience),
            "type": String(data.height),
            "year_conferred": String(data.order)
        },
        "WGU": {
            "name": data.name,
            "major": String(data.base_experience),
            "type": String(data.height),
            "year_conferred": String(data.order)
        },
        "BU": {
            "name": data.name,
            "major": String(data.base_experience),
            "type": String(data.height),
            "year_conferred": String(data.order)
        },
    };

    table.style.display = "block";

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