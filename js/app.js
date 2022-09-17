// off canvas menu
const menuIcon = document.getElementById("navbar-icon");
const offcanvasMenu = document.getElementById("offcanvas-menu");

menuIcon.addEventListener("click", () => {
  offcanvasMenu.classList.toggle("offcanvas-menu-block");
});

// menu search box
const menuSearchBox = document.getElementById("menu-search-box");
menuSearchBox.addEventListener("click", () => {
  menuSearchBox.classList.toggle("menu-search-box");
});

const menuSearchBoxIconClick = document.querySelectorAll(
  "#menu-search-box-icon-click"
);

// search icon toggle
const closeIcon = document.getElementById("close-icon");
const closeSection = document.getElementById("close-section");

menuSearchBoxIconClick.forEach((node) => {
  node.addEventListener("click", () => {
    closeSection.style.display = "block";
  });
});

// close icon
closeIcon.addEventListener("click", () => {
  closeSection.style.display = "none";
});

// menu card
const menuCard = document.querySelectorAll("#menu-card");
const shoppingCard = document.getElementById("shopping-card");
menuCard.forEach((nodeList) => {
  nodeList.addEventListener("click", () => {
    shoppingCard.classList.toggle("shopping-card-added");
  });
});

// shopping card close
const shoppingCardClose = document.getElementById("shopping-card-close");
shoppingCardClose.addEventListener("click", () => {
  shoppingCard.classList.remove("shopping-card-added");
});
