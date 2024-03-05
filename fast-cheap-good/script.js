//Fast Cheap Good

const fast = document.querySelector("#fast");
const cheap = document.querySelector("#cheap");
const good = document.querySelector("#good");
const boxes = [fast, cheap, good];
let lastBox = null;

[Element1, Element2].forEach(function (element) {
  element.addEventListener("input", function () {
    //this function does stuff
  });
});

/* fast.addEventListener("change", function () {
  if (fast.checked) {
    boxes.push(fast);
    lastBox = true;
    console.log(boxes);
    return console.log("Fast is active");
  } else {
    let itemToRemove = fast;
    let index = boxes.indexOf(itemToRemove);
    if (index !== -1) {
      boxes.splice(index, 1);
    }
    console.log(boxes);
    return console.log("Fast is inactive");
  }
});

cheap.addEventListener("change", function () {
  if (cheap.checked) {
    boxes.push(cheap);
    lastBox = true;
    console.log(boxes);
    return console.log("Cheap is active");
  } else {
    let itemToRemove = cheap;
    let index = boxes.indexOf(itemToRemove);
    if (index !== -1) {
      boxes.splice(index, 1);
    }
    console.log(boxes);
    return console.log("Cheap is inactive");
  }
});

good.addEventListener("change", function () {
  if (good.checked) {
    boxes.push(good);
    lastBox = true;
    console.log(boxes);
    return console.log("Good is active");
  } else {
    let itemToRemove = good;
    let index = boxes.indexOf(itemToRemove);
    if (index !== -1) {
      boxes.splice(index, 1);
    }
    console.log(boxes);
    return console.log("Good is inactive");
  }
});

if (good.checked && cheap.checked && fast.checked) {
  fast.checked = false;
}
 */
