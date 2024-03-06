// ToDo App

// Prevent reload of DOM due to "Submit"
document.body.addEventListener("submit", (e) => {
  e.preventDefault();
});

//Variables for accessing inputs from DOM
const list = document.querySelector("#list");
const btnAddTask = document.querySelector("#add-todo");
const taskInput = document.querySelector("#new-todo");

//Variable for assigning unique ID-Number to new ToDo
let taskId = Date.now();

//Load last know state from Local Storage
let workingTask = localStorage.getItem("Description");

//Check if local storage is empty and add a default
if (workingTask !== null) {
  renderTodoList();
} else {
  workingTask = "Do NOT Forget to buy COFFEE!";
  renderTodoList();
}

//Add items to the list
function renderTodoList() {
  const addTask = document.createElement("li");
  addTask.append(workingTask);
  list.append(addTask);
}

//Capture the button click
btnAddTask.addEventListener("click", addNewTodo);

//Function for what happens when you click "Add New ToDo"-button
function addNewTodo() {
  //Retrieve trimmed input from text field
  workingTask = document.createTextNode(taskInput.value.trim());
  //Update list in DOM
  renderTodoList(workingTask);
  //Store ToDo in local Storage
  localStorage.setItem("Description", taskInput.value);
  //Reset input text field
  taskInput.value = null;
}
