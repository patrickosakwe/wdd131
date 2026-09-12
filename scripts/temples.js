// ========================================
// TEMPLE DATA
// ========================================

const temples = [
    {
        name: "Aba Nigeria Temple",
        location: "Aba, Nigeria",
        dedicated: 2005,
        area: 11500,
        image: "images/temple.jpeg"
    },

    {
        name: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: 2004,
        area: 17500,
        image: "images/temple.jpeg"
    },

    {
        name: "Johannesburg South Africa Temple",
        location: "Johannesburg, South Africa",
        dedicated: 1985,
        area: 19000,
        image: "images/temple.jpeg"
    },

    {
        name: "Lagos Nigeria Temple",
        location: "Lagos, Nigeria",
        dedicated: 2025,
        area: 20000,
        image: "images/temple.jpeg"
    },

    {
        name: "London England Temple",
        location: "London, England",
        dedicated: 1958,
        area: 42000,
        image: "images/temple.jpeg"
    },

    {
        name: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: 2019,
        area: 41000,
        image: "images/temple.jpeg"
    },

    {
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah",
        dedicated: 1893,
        area: 253000,
        image: "images/temple.jpeg"
    },

    {
        name: "Washington D.C. Temple",
        location: "Kensington, Maryland",
        dedicated: 1974,
        area: 160000,
        image: "images/temple.jpeg"
    },

    {
        name: "Paris France Temple",
        location: "Le Chesnay, France",
        dedicated: 2017,
        area: 44000,
        image: "images/temple.jpeg"
    }
];


// ========================================
// DISPLAY TEMPLES
// ========================================

const templeContainer = document.querySelector("#temple-container");

function displayTemples(templeList) {

    templeContainer.innerHTML = "";

    templeList.forEach((temple) => {

        const figure = document.createElement("figure");

        const image = document.createElement("img");
        image.src = temple.image;
        image.alt = `${temple.name} located in ${temple.location}`;
        image.loading = "lazy";

        const caption = document.createElement("figcaption");

        caption.innerHTML = `
            <strong>${temple.name}</strong><br>
            ${temple.location}<br>
            Dedicated: ${temple.dedicated}<br>
            Area: ${temple.area.toLocaleString()} sq ft
        `;

        figure.appendChild(image);
        figure.appendChild(caption);

        templeContainer.appendChild(figure);
    });
}


// ========================================
// FILTER TEMPLES
// ========================================

function filterTemples(category) {

    let filteredTemples;

    switch (category) {

        case "old":
            filteredTemples = temples.filter(
                temple => temple.dedicated < 1900
            );
            break;

        case "new":
            filteredTemples = temples.filter(
                temple => temple.dedicated > 2000
            );
            break;

        case "large":
            filteredTemples = temples.filter(
                temple => temple.area > 90000
            );
            break;

        case "small":
            filteredTemples = temples.filter(
                temple => temple.area < 20000
            );
            break;

        default:
            filteredTemples = temples;
    }

    displayTemples(filteredTemples);
}


// ========================================
// NAVIGATION
// ========================================

const navigationLinks = document.querySelectorAll("nav a");

navigationLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const category = link.dataset.filter;

        filterTemples(category);

        // Close mobile navigation
        document.querySelector("#main-nav").classList.remove("open");
    });
});


// ========================================
// MOBILE MENU
// ========================================

const menuButton = document.querySelector("#menu-button");
const mainNav = document.querySelector("#main-nav");

menuButton.addEventListener("click", () => {

    mainNav.classList.toggle("open");

});


// ========================================
// FOOTER
// ========================================

// Display current year
const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;


// Display last modified date
document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;


// ========================================
// INITIAL DISPLAY
// ========================================

displayTemples(temples);