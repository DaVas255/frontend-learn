(function () {
  let modal = document.querySelector(".modal-container");
  let closeButton = document.querySelector(".modal-content__close");
  let modalTriggers = document.querySelectorAll(".header__module");

  let isModalOpen = false;
  let pageYOffset = 0;

  let openModal = function () {
    pageYOffset = window.pageYOffset;
    modal.classList.add("is-open");
    isModalOpen = true;
  };

  let closeModal = function () {
    modal.classList.remove("is-open");
    isModalOpen = false;
  };

  modalTriggers.forEach(function (item) {
    item.addEventListener("click", openModal);
  });

  closeButton.addEventListener("click", closeModal);
})();
