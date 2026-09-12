// ========================================
// TEMPLE ALBUM JAVASCRIPT
// ========================================

// Get all temple figures
const templeFigures = document.querySelectorAll(".temple-grid figure");


// ========================================
// FILTER TEMPLES
// ========================================

function filterTemples(category) {

    templeFigures.forEach((figure) => {

        const year = Number(figure.dataset.year);
        const area = Number(figure.dataset.area);

        let showFigure = true;

        switch (category) {

            case "old":
                showFigure = year < 1900;
                break;

            case "new":
                showFigure = year > 2000;
                break;

            case "large":
                showFigure = area > 90000;
                break;

            case "small":
                showFigure = area < 20000;
                break;

            default:
                showFigure = true;
        }

        if (showFigure) {
            figure.style.display = "";
        } else {
            figure.style.display = "none";
        }
    });
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

        // Close mobile menu
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

// Current year
const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;


// Last modified date
document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;