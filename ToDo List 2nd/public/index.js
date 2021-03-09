let form = document.querySelector("form");
let dugme = document.querySelector(".dugme");
let ul = document.querySelector(".lista");
dugme.addEventListener("click", (e) => {
  e.preventDefault();
  let input = form.pas.value.trim().toLowerCase();
  console.log(input.length);
  if (input.length && input.length < 15) {
    ul.innerHTML += `<div class='item'><li class='klasaListe'>${input} </li><button class='trash'><i class="fas fa-trash-alt"></i></button></div>`;
    form.reset();
  }
  else{
    alert('wrong input!!')
  }
});

ul.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("trash") ||
    e.target.classList.contains("fa-trash-alt")
  ) {
    let div = document.querySelector(".item");
    div.classList.add('brisanje');
    setTimeout(()=>{
    div.remove();
    },1000)
    
  }
});

let pretraga = document.querySelector(".pretraga");
pretraga.addEventListener("keyup", (e) => {
  let result = pretraga.value.trim().toLowerCase();

  let todos = document.querySelector(".lista").children;
  let todos1 = Array.from(todos);

  todos1
    .filter((a) => {
      return !a.firstChild.textContent.includes(result);
    })
    .forEach((a) => {
      a.style.display = "none";
    });

  todos1
    .filter((a) => {
      return a.firstChild.textContent.includes(result);
    })
    .forEach((a) => {
      a.style.display = "flex";
    });
});
