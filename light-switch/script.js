//Light switch

const button = document.querySelector("button");
const html = document.querySelector("html");
const goodMorning = "Good Morning World!";
const goodNight = "Good Night World!";
const turnOn = "Turn on the Light";
const turnOff = "Turn off the Light";

button.addEventListener("click", buttonClick);
button.innerText = turnOn;
document.title = goodNight;

function buttonClick() {
  html.classList.toggle("bgcolor-change");
  if (document.title === goodNight) {
    document.title = goodMorning;
  } else {
    document.title = goodNight;
  }
  if (button.innerText === turnOn) {
    button.innerText = turnOff;
  } else {
    button.innerText = turnOn;
  }
}
