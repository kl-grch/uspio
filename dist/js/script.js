"use strict";

const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

if (myModal) {
  myModal.addEventListener("shown.bs.modal", () => {
    myInput.focus();
  });
}

let cards = document.querySelectorAll(".items__card");
let cardItems = document.querySelector(".how-it-work__items");

function slider() {
  setTimeout(function () {
    cards[0].style.order = 2;
    cards[1].style.order = 3;
    cards[2].style.order = 1;
  }, 5000);
  setTimeout(function () {
    cards[0].style.order = 3;
    cards[1].style.order = 1;
    cards[2].style.order = 2;
  }, 10000);
  setTimeout(function () {
    cards[0].style.order = 1;
    cards[1].style.order = 2;
    cards[2].style.order = 3;
  }, 15000);
}

slider();
let intervalId = setInterval(function () {
  slider();
}, 15000);

cardItems.addEventListener("mouseover", function () {
  clearInterval(intervalId);
});

let cardImgs = document.querySelectorAll(".card__img");
let img = document.querySelector(".how-it-work__img>img");

cardImgs.forEach((item) =>
  item.addEventListener("click", function (e) {
    img.src = item.style.backgroundImage.slice(5, -2);
  })
);
