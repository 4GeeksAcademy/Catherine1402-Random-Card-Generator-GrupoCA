/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let numeros = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "A",
  "J",
  "Q",
  "K"
];
let simbolos = ["❤", "♠", "♦", "♣"];
function randomCard() {
  let randomSimbolo = simbolos[Math.floor(Math.random() * simbolos.length)];
  let randomNumero = numeros[Math.floor(Math.random() * numeros.length)];

  let symbolUp = document.querySelector(".symbol-up");
  let symbolDown = document.querySelector(".symbol-down");
  let number = document.querySelector(".number");

  symbolUp.textContent = randomSimbolo;
  symbolDown.textContent = randomSimbolo;
  number.textContent = randomNumero;
}

window.onload = randomCard();
