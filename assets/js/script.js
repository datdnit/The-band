const buyBtns = document.querySelectorAll(".js-buy-ticket");
const model = document.querySelector(".js-model");
const modelContainer = document.querySelector(".js-model-container");
const modelClose = document.querySelector(".js-model-close");
var header = document.getElementById("header");
var headerMenu = document.getElementById("mobile-menu");
var headerHeight = header.clientHeight;
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

// Dong mo menu
headerMenu.onclick = function () {
  var isClose = header.clientHeight === headerHeight;
  if (isClose) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};

// Tu dong dong menu

for (let i = 0; i < menuItems.length; i++) {
  const menuItem = menuItems[i];

  menuItem.onclick = function (event) {
    var isParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("subnav");
    if (isParentMenu) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  };
}

function showBuyTickets() {
  model.classList.add("open");
}

function hideBuyTickets() {
  model.classList.remove("open");
}

function preventDefault(event) {
  event.preventDefault();
}

modelClose.addEventListener("click", hideBuyTickets);
model.addEventListener("click", hideBuyTickets);
modelContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyTickets);
}
