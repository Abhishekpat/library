"use strict";

//Model window
const modal = document.querySelector(".modal");
const showModel = document.querySelectorAll(".model-window");
const closeModal = document.querySelector(".close-modal");

for (let i = 0; i < showModel.length; i++)
  showModel[i].addEventListener("click", function () {
    document.querySelector(".modal").classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hide");
  });
document.querySelector(".close-modal").addEventListener("click", function () {
  document.querySelector(".modal").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hide");
});
