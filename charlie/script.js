function modal() {
  const modal = document.querySelector("#pop-up");
  const overlay = document.querySelector("#overlay");
  const closeButton = document.querySelector("#js-close-button");
  const modalTriggers = document.querySelectorAll("#js-button-open");

  const openModal = function () {
    modal.classList.add("is-open");
    overlay.classList.add("is-open");
  };

  const closeModal = function () {
    modal.classList.remove("is-open");
    overlay.classList.remove("is-open");
  };

  modalTriggers.forEach(function (item) {
    item.addEventListener("click", openModal);
  });

  closeButton.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
}
