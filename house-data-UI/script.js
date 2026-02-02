const streetSelect = document.getElementById("choose-street");
const bedroomSelect = document.getElementById("choose-bedrooms");
const bathroomSelect = document.getElementById("choose-bathrooms");
const form = document.querySelector("form");

const resultCount = document.getElementById("result-count");
const output = document.getElementById("output");

let houses;

//Fetching the data
async function fetchHouseData() {
    try {
        const response = await fetch("https://mdn.github.io/shared-assets/misc/houses.json");
        if (!response.ok) {
            throw new Error (`HTTP error:${response.status}`);
        }
        houses = await response.json();

        initializeForm();
    } catch(error) {
        console.error(`データの取得に失敗しました: ${error.message}`);
    }
}

//Completing the initializeForm() function

function initializeForm() {
    // 通り名の処理
        const streetArray = [];
        for (let house of houses) {
            if (!streetArray.includes(house.street)) {
                streetArray.push(house.street);
                const option = document.createElement('option');
                option.value = house.street;
                option.textContent = house.street;
                streetSelect.appendChild(option);
            }
        }
    // 寝室数の処理
    let maxBedrooms = 0;
    for (const house of houses) {
        if (house.bedrooms > maxBedrooms) {
            maxBedrooms = house.bedrooms;
        }
    }
    for (let i = 1; i <= maxBedrooms; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        bedroomSelect.appendChild(option);
    }
    // 浴室数の処理
    let maxBathrooms = 0;
    for (const house of houses) {
        if (house.bathrooms > maxBathrooms) {
            maxBathrooms = house.bathrooms;
        }
    }
    for (let i = 1; i <= maxBathrooms; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        bathroomSelect.appendChild(option);
    }
}

//Completing the renderHouses() function

function renderHouses(e) {
    // Stop the form submitting
    e.preventDefault();

    // Add rest of code here
    const filteredHouses = houses.filter((house) => {
        const streetMatch = (streetSelect.value === "") || (house.street === streetSelect.value);
        const bedroomMatch = (bedroomSelect.value === "") || (house.bedrooms === Number(bedroomSelect.value));
        const bathroomMatch = (bathroomSelect.value === "") || (house.bathrooms ===  Number(bathroomSelect.value));
        return streetMatch && bedroomMatch && bathroomMatch;
    })
    resultCount.textContent = `Results returned:${filteredHouses.length}`;
    output.innerHTML = "";

    function renderHouse(house) {
            const areas = Object.values(house.room_sizes);
            let totalArea = 0;
        for (let area of areas) {
            totalArea += Number(area);
        }

    const articleElem = document.createElement("article");
    articleElem.appendChild(document.createElement("h2")).textContent =
    `${house.house_number} ${house.street}`;
    const listElem = document.createElement("ul");
    listElem.appendChild(document.createElement("li")).textContent =
    `🛏️ Bedrooms: ${house.bedrooms}`;
    listElem.appendChild(document.createElement("li")).textContent =
    `🛀 Bathrooms: ${house.bathrooms}`;
    listElem.appendChild(document.createElement("li")).textContent =
    `Room area: ${totalArea}m²`;
    listElem.appendChild(document.createElement("li")).textContent =
    `Price: £${house.price}`;
    articleElem.appendChild(listElem);
    output.appendChild(articleElem);
    }

    for (let house of filteredHouses) {
        renderHouse(house);
    }
}


// Add a submit listener to the <form> element
form.addEventListener("submit", renderHouses);

// Call fetchHouseData() to initialize the app
fetchHouseData();