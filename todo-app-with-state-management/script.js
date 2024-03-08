// ToDo App

// Prevent reload of DOM due to "Submit"
document.body.addEventListener("submit", (e) => {
  e.preventDefault();
});

//Variables for accessing inputs from DOM
const list = document.querySelector("#list");
const btnAddTask = document.querySelector("#add-todo");
const taskInput = document.querySelector("#new-todo");

//Storage for ToDos
let todoList;
let renderList = {
  todos: [],
};

//Load last known todolist from Local Storage
const storedTodoList = localStorage.getItem("todolist");

//Check if local storage is empty and add a default
if (storedTodoList !== null) {
  todoList = JSON.parse(storedTodoList);
} else {
  todoList = {
    todos: [
      {
        id: null,
        description:
          "Looks like it's all done, well done! Do NOT Forget to buy COFFEE!",
        done: true,
      },
    ],
  };

  saveList();
}

renderTodoList(todoList);

//Capture the button clicks
btnAddTask.addEventListener("click", addNewTodo);
list.addEventListener("change", checkCheckbox);

//Function for what happens when you click "Add New ToDo"-button
function addNewTodo() {
  //Retrieve trimmed input from text field
  const textInput = taskInput.value.trim();
  //if input === empty -> give out warning
  if (textInput === "") {
    alert("I would appreciate if you entered something.");
    return;
  }

  //Assign a unique ID-Number to new task
  const taskId = Date.now();
  //Collect data for new task
  const newTask = {
    id: taskId,
    description: textInput,
    done: false,
  };

  //Check for duplicates
  let isDuplicate = false;
  todoList.todos.forEach((todo) => {
    if (todo.description.toLowerCase() === textInput.toLowerCase()) {
      isDuplicate = true;
      return;
    }
  });
  if (isDuplicate) {
    alert("No duplicate Todo's please.");
    return;
  }

  //push new task to array
  todoList.todos.unshift(newTask);
  saveList();
  renderTodoList(todoList);
  //Reset input text field
  taskInput.value = null;
}

// Filter todos

const filters = document.querySelector("#filters");
filters.addEventListener("change", filterTodos);

function filterTodos() {
  //capture value of radiobutton
  let filterValue;
  for (const filter of filters) {
    if (filter.checked) {
      filterValue = filter.value;
      break;
    }
  }

  // Filter todoList based on the filterValue
  if (filterValue === "open") {
    renderList.todos = todoList.todos.filter(function (todo) {
      return todo.done === false;
    });
  } else if (filterValue === "done") {
    renderList.todos = todoList.todos.filter(function (todo) {
      return todo.done === true;
    });
  } else {
    renderList.todos = todoList.todos;
  }
  renderTodoList(renderList);
}

//Check the checkboxes
function checkCheckbox(event) {
  //Find out which checkbox is active
  const checkedBox = event.target;
  //Find out with <li> is involved
  const liElement = checkedBox.parentElement;
  //Connect checkbox event with todoobject in array
  const todo = liElement.todoObj;
  //Update the object when the box is checked
  todo.done = checkedBox.checked;
  saveList();
}

//remove done todos
const removes = document.querySelector("#removeTodos");
removes.addEventListener("click", removeTodos);

// Function to remove done todos
function removeTodos() {
  // Filter out todos that are not done
  const doneTodos = todoList.todos.filter(function (todo) {
    return !todo.done;
  });

  // Update todoList with undone todos
  todoList.todos = doneTodos;

  // Save the updated todoList
  console.log(todoList);
  saveList();
  renderTodoList(todoList);
}

function saveList() {
  //Store ToDo in local Storage
  localStorage.setItem("todolist", JSON.stringify(todoList));
}

//Add items to the list
function renderTodoList(randomList) {
  //Clear list before updating
  list.innerHTML = "";
  //Loop the todolist to find everything
  randomList.todos.forEach((todo) => {
    //Create list element
    const todoLi = document.createElement("li");

    //Connect current todo to current <li> for use later in code
    todoLi.todoObj = todo;

    //Create labels for the todos - labels makes you click the text and not only the box
    //label.htmlFor = checkbox.id
    //checkbox.id = "Todo-" + todo.id

    //Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    todoLi.append(checkbox);
    //Create text content
    const todoDesc = document.createTextNode(todo.description);
    todoLi.append(todoDesc);
    //Add text and check to <li>
    list.appendChild(todoLi);
  });
}

saveList();
