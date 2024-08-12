/* Function for hamburger menu */
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    //appends a class open to .menu-links, deletes if clicked again
    icon.classList.toggle("open");
    //appends a class open to .hamburger-icon, deletes if clicked again
}