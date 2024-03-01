//Password toggle

const button = document.querySelector("button");
const pass = document.querySelector("#pass");
const showPass = "Show Password";
const hidePass = "Hide Password";

button.addEventListener("click", buttonClick);
button.innerText = "Show Password";

function buttonClick() {
  if (button.innerText === showPass) {
    button.innerText = hidePass;
  } else {
    button.innerText = showPass;
  }
  if (pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
  pass.classList.toggle("btn-red");
  console.log("Button click!");
}
