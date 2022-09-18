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

// --------------- PRODUCTS ADD TO CARD -----------------
const addCard = document.querySelectorAll("#add-card");
const cardPrice = document.querySelectorAll("#card-price");
const totalCardCount = document.querySelectorAll("#total-card-count");

// --------------------- INNER CARD PARENT ELEMENT--------------------
const innerCardParent = document.getElementById("inner-card-info");

let count = [];
addCard.forEach((nodeList) => {
  nodeList.addEventListener("click", (event) => {
    const elementParent = event.target.parentNode;
    const elementChild = elementParent.children[0].innerText;
    const productOrgianlPrice = elementChild.substring(1);

    count.push(productOrgianlPrice);
    const totalCOunt = count.length;
    for (item of totalCardCount) {
      item.innerText = totalCOunt;
    }

    // prev card count

    // const prevCardCount = document.querySelectorAll("#prev-card-count");
    // // const orginalTotalCurrentProducts = prevCardCount + totalCOunt;
    // for (item of prevCardCount) {
    //   item.innerText = totalCOunt;
    // }

    const currentPrevisusAmount = parseFloat(productOrgianlPrice);

    // products transfer
    const imagesTransfer = event.target.parentNode.parentNode.parentNode;
    const productsCardImages = imagesTransfer.children[0].children[0].src;
    console.log(productsCardImages);

    const createEle = document.createElement("div");
    createEle.classList.add("card");
    createEle.classList.add("flex");
    createEle.classList.add("justify-around");
    createEle.classList.add("items-center");
    createEle.innerHTML = `
   <!-- card thumbnail -->
   <div class="card-thumbnail m-2">
     <img
       src="${productsCardImages}"
       alt="iphone"
       class="w-[50px] h-[50px]"
     />
   </div>

   <!-- products increment/decrement -->
   <div class="products-increment-decrement m-2 text-white">
     <span class="m-2 cursor-pointer"
       ><i class="fa-solid fa-plus"></i
     ></span>
     <span class="m-2 cursor-pointer" id="prev-card-count">${totalCOunt}</span>
     <span class="m-2 cursor-pointer"
       ><i class="fa-solid fa-minus"></i
     ></span>
   </div>

   <!-- delete -->
   <button class="m-2 text-white">
     <i class="fa-solid fa-trash"></i>
   </button>

 <hr />
   `;
    innerCardParent.appendChild(createEle);
  });
});
