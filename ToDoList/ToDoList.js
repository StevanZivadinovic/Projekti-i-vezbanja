const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector('.filter-todo');

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
console.log('haj2');
  //delete

  if (item.classList[0] === "trash-btn") {
    //item.remove();
    let todo = item.parentElement;
    //animation

    todo.classList.add("fall");
    todo.addEventListener("transitionend", e=> {
        todo.remove();
    //todo.remove();
    });
  
  }

  //check mark
  if (item.classList[0] === "complete-btn") {
    let todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}


filterOption.addEventListener('click',filterTodo);




/*
function filterTodo(e){
const todos = todoList.childNodes;
console.log(todos);
todos.forEach(function(todo){
  console.log(e.target.value);
  switch(e.target.value){
    case "all":
      todo.style.display="flex";
      break;
    case "completed":
      if(todo.classList.contains('completed')){
        todo.style.display='flex';

      }
      else{
        todo.style.display="none";
      }
      case "uncompleted":
      if(!todo.classList.contains('completed')){
        todo.style.display='flex';

      }
      else{
        todo.style.display="none";
      }

  }
})
}

*/

function filterTodo(e) {
  const todos = document.querySelectorAll('.todo');
  // i finr childrens with selector alll
  todos.forEach((todo) => {
    switch(e.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'completed':
        if(todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case 'uncompleted':
        if(!todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
    }
  })
}





