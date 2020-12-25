let navigacija = document.querySelectorAll("#signIn");
let signIn = document.querySelector("#modal-signup");

let logedIn = document.querySelectorAll("#logIn");
let logedInForm = document.querySelector("#modal-login");

let guide = document.querySelectorAll("#createGuide");
let createGuide = document.querySelector("#modal-create");

let account = document.querySelectorAll("#account");
let modalAccount = document.querySelector("#modal-account");



navigacija.forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    signIn.style.display = "block";
  });
});

logedIn.forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    logedInForm.style.display = "block";
  });
});

guide.forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      createGuide.style.display = "block";
    });
  });
  
  account.forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      modalAccount.style.display = "block";
    });
  });

let iks = document.querySelectorAll(".iks");
iks.forEach((a) => {
  a.addEventListener("click", (e) => {
    signIn.style.display = "none";
    logedInForm.style.display = "none";
    createGuide.style.display = "none";
    modalAccount.style.display = "none";


  });
});
