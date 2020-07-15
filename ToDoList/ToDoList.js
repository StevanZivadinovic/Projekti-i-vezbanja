const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event listeners

todoButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("haj");

  let todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  let newTodo = document.createElement("li");

  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  let completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fa fa-check" aria-hidden="true"></i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  console.log(completedButton);
  let trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  todoList.appendChild(todoDiv);

  //cllear todoInput value

  todoInput.value = "";
});




todoList.addEventListener("click", deleteCheck);

function deleteCheck(e) {
  let item = e.target;

  //delete

  if (item.classList[0] === "trash-btn") {
    item.remove();
  }
}
