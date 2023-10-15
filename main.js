import './style.css';

/* js for Resources anchor tag */
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleDropdown");
    const hideNav = document.getElementById("nav-button");
    const dropdownContent = document.querySelector(".dropdown-content");

    toggleButton.addEventListener("click", function (event) {
        event.preventDefault();
        dropdownContent.classList.toggle("active");
        hideNav.classList.toggle("active");
    });
});

/*  */
const openSearchButton = document.getElementById("open-search");
const searchModal = document.getElementById("search-modal");
const closeSearchButton = document.getElementById("close-search");

openSearchButton.addEventListener("click", function () {
    searchModal.style.display = "block";
});

closeSearchButton.addEventListener("click", function () {
    searchModal.style.display = "none";
});