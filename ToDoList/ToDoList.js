/*
let a = [1, 3, 20, 15];
let f = [];

console.log(a.indexOf(1));
let sum = 0;
let c = [];
let d = [];

function sugarHigh(candies, threshold) {

  if(0 <= candies.length <= 105 && 1 <= threshold <= 109){

  
  
  a.forEach((a) => {
    f.push(a);
  });

  let b = candies.sort(function (a, b) {
    return a - b;
  });
  console.log(b);

  for (let i = 0; i < b.length; i++) {
    sum += b[i];
    c.push(b[i]);
    if (sum >= threshold) {
      c.pop();
      break;
    }
  }
  console.log(c);
  c.forEach((a) => {
    f.forEach((b) => {
      if (a === b) {
        console.log(d.push(f.indexOf(b)));
        d.sort(function (a, b) {
          return a - b;
        });
      }
    });
  });

  return d;
}


else{
  alert('you entered an incorrect entry');
  
}
}

console.log(sugarHigh(a, 20));

*/



//selectors

const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');


//Event listeners

todoButton.addEventListener('click',addTodo);

let addTodo=e=>{
  e.preventDafault()

  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  const newTodo = document.createElement('li');
  newTodo.innerText='hey';
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  const completedButton = document.createElement('button');
  completedButton.innerHTML = `<i class='fas fa-check></i>`;
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);  

  const trashButton = document.createElement('button');
  trashButton.innerHTML = `<i class='fas fa-trash></i>`;
  trashButton.classList.add('complete-btn');
  todoDiv.appendChild(trashButton );  


}

//Functions








