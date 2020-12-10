const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

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

  //add todo to localStorage

  saveLocalTodos(todoInput.value);
  //dovde je dodavanje u localStorage
  let completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fa fa-check" aria-hidden="true"></i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
 
  let trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  todoList.appendChild(todoDiv);

  //clear todoInput value

  todoInput.value = "";
});

todoList.addEventListener("click", deleteCheck);

function deleteCheck(e) {
  let item = e.target;
  

  //delete

  if (item.classList[0] === "trash-btn") {
    let todo = item.parentElement;
    //animation

    todo.classList.add("fall");
    removeLocalTodos(todo);
    todo.addEventListener("transitionend", (e) => {
      todo.remove();
    });
  }

  //check mark
  if (item.classList[0] === "complete-btn") {
    let todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

filterOption.addEventListener("click", filterTodo);

function filterTodo(e) {
  const todos = document.querySelectorAll(".todo");
  // i finr childrens with selector alll
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

let saveLocalTodos = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};
//JSON.parse
//JSON.stringify

//preuzimas nakon refrisiranja stranice podatke prethodno unesene u localStorage

let getTodos = () => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo) {
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    let newTodo = document.createElement("li");

    newTodo.innerText = todo; //ovaj red je izmenjen u odnosu na gore

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
  });
};

document.addEventListener("DOMContentLoaded", getTodos);

//brisanje

let removeLocalTodos = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  let todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1); //todoIndex u splace metodi
  //u ovom primeru predstavlja poyiciju elementa niza koji hocemo da uklonimo,
  //a 1 predstavlja koliko elemenata hocemo da uklonimo

  localStorage.setItem("todos", JSON.stringify(todos));
};
