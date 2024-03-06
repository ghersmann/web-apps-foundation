This is just my personal notes collected throughout this coding task. It will not win the next Nobel prize in Literature.

//Storage for ToDos
const todoList = {
todos: [{ id: null, description: "Make Coffee", done: false }],
};

    <!--         <ul>
            <p>Sort ToDo-list</p>
            <li>
                <input type="radio" name="allTodo" id="allTodo">
                <label for="allTodo">All ToDos</label>
            </li>
            <li> <input type="radio" name="openTodo" id="openTodo">
                <label for="openTodo">Open Todos</label>
            </li>
            <li> <input type="radio" name="doneTodo" id="doneTodo">
                <label for="doneTodo">Done ToDos</label>
            </li>
        </ul> -->

//generera checkbox

/\* function renderTodos() {
list.innerHTML = "";

state.todos.forEach((todo) => {
const todoLi = document.createElement("li");

    todoLi.todoObj = todo;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;

    todoLi.appendChild(checkbox);

    const todoText = document.createTextNode(todo.description);
    todoLi.append(todoText);

    list.appendChild(todoLi);

});
}

renderTodos();

list.addEventListener("change", (event) => {
const checkbox = event.target;
const liElement = checkbox.parentElement;
const todo = liElement.todoObj;
todo.done = checkbox.checked;
}); \*/

//preventDefault - html form

// localStorage.getItem();
// localStorage.setItem();
// localStorage.clear(); -> remove all
// localStorage.remove

//JSON.stringify() -> förbered för lagring
//JSON.parse -> konvertera tillbaka till JS
//JSON.parse(localStorage.getItem(arr))

/\* if (savedData !== null) {
execute function whatever(params) {
} else {
send out warning "No Data available"
}
}

\*/
