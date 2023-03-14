const modal = document.querySelector("#pop-up");
const overlay = document.querySelector("#overlay");
const closeButton = document.querySelector("#js-close-button");
const openButton = document.querySelector("#js-button-open");

const openModal = function () {
  modal.classList.add("is-open");
  overlay.classList.add("is-open");
};

const closeModal = function () {
  modal.classList.remove("is-open");
  overlay.classList.remove("is-open");
};

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
