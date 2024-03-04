// Counter

const body = document.body;
const main = document.querySelector("main");
const reset = document.querySelector("button");
const counter = document.querySelector(".counter");
const leftBlock = document.querySelector(".left-block");
const rightBlock = document.querySelector(".right-block");
let widthA = 0;
let widthB = 100;
let percentColor = 0;

main.addEventListener("click", addCount);
reset.addEventListener("click", resetCount);
body.addEventListener("keypress", function (whichKey) {
  if (whichKey.key === " " || whichKey.key === "Enter") {
    addCount();
  }
});

function addCount() {
  percentColor++;
  widthA++;
  widthB--;
  counter.innerText = percentColor;
  leftBlock.style.width = `${widthA}%`;
  rightBlock.style.width = `${widthB}%`;
  if (percentColor === 101) {
    return resetCount();
  }
}

function resetCount() {
  percentColor = 0;
  widthA = 0;
  widthB = 100;
  counter.innerText = percentColor;
  leftBlock.style.width = `${widthA}%`;
  rightBlock.style.width = `${widthB}%`;
}
