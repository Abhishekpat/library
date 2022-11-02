"use strict";

const closeModal = document.querySelector(".close-modal");

document.querySelector(".close-modal").addEventListener("click", function () {
  document.querySelector(".modal").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hide");
});
