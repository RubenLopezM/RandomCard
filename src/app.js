/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
// import { doc } from "prettier";

window.onload = () => {
  drawcard();
};

//CONSTANTES Y VARIABLES

const SYMBOLCARD = ["♦", "♥", "♠", "♣"];
const CARDITEM = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const ROW = document.querySelector(".row");
const FORM = document.querySelector("form");

let card = {};
let intervalID = window.setInterval(drawcard, 10000);

//FUNCIONES

function randomnumber(list) {
  let number = Math.floor(Math.random() * list.length);
  return number;
}

function drawcard() {
  card["item"] = CARDITEM[randomnumber(CARDITEM)];
  card["pattern"] = SYMBOLCARD[randomnumber(SYMBOLCARD)];

  let element = document.createElement("div");
  element.classList.add("card");
  ROW.appendChild(element);

  let top = document.createElement("div");
  top.innerHTML = card["pattern"];
  element.appendChild(top);

  let main = document.createElement("div");
  if (card["item"] == 11) {
    main.innerHTML = "J";
  } else if (card["item"] == 12) {
    main.innerHTML = "Q";
  } else if (card["item"] == 13) {
    main.innerHTML = "K";
  } else {
    main.innerHTML = card["item"];
  }

  element.appendChild(main);

  let bottom = document.createElement("div");
  bottom.innerHTML = card["pattern"];
  element.appendChild(bottom);
  bottom.classList.add("suit2");

  if (card["pattern"] == "♦" || card["pattern"] == "♥") {
    top.classList.add("red");
    main.classList.add("red");
    bottom.classList.add("red");
  } else {
    top.classList.add("black");
    main.classList.add("black");
    bottom.classList.add("black");
  }
}

//EVENTO BOTÓN

FORM.addEventListener("submit", event => {
  event.preventDefault();
  ROW.innerHTML = "";
  drawcard();
});
