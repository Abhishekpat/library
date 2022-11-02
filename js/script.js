"use strict";

let suggestions = [
  "Basic Physics",
  "Basic Chymestry",
  "Computer Engineering",
  "C programing textbook",
  "C programing question paper",
  "C programing lab manual",
  "Information Technology",
  "Electronics and Telecommunications",
  "Question paper",
  "Modal answer",
  "Textbox",
];

const searchWrapper = document.querySelector(".searchInput");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocomBox");

inputBox.onkeyup = (e) => {
  let userData = e.target.value;
  let emptyArray = [];
  if (userData) {
    emptyArray = suggestions.filter((data) => {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      return (data = "<li>" + data + "</li>");
    });
    console.log(emptyArray);
    searchWrapper.classList.add("active");
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      // const element = array[i];
      allList[i].setAttribute("onclick", "select(this)");
    }
  } else {
    searchWrapper.classList.remove("active");
  }
};

function select(element) {
  let selectUserData = element.textContent;
  inputBox.value = selectUserData;
}

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = "<li>" + userValue + "</li>";
  } else {
    listData = list.join("");
  }
  suggBox.innerHTML = listData;
}

//Model window
const modal = document.querySelector(".modal");
const showModel = document.querySelectorAll(".model-window");

for (let i = 0; i < showModel.length; i++) {
  showModel[i].addEventListener("click", function () {
    document.querySelector(".modal").classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hide");
  });
}
