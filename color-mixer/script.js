// Counter

const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const green = document.querySelector(".green");
const rgbCounter = document.querySelector(".rgb");
const main = document.querySelector("main");

red.addEventListener("input", changeColor);
blue.addEventListener("input", changeColor);
green.addEventListener("input", changeColor);

function changeColor() {
  main.style.backgroundColor = `rgb(${red.value}, ${blue.value}, ${green.value})`;
  rgbCounter.innerText = `RGB ${red.value}, ${blue.value}, ${green.value}`;
}
