//DOM
let addCustomer = document.querySelector("input#addCustomer");
let formAddCustomer = document.querySelector("form.addCustomer");

let submitAddCustomer = document.querySelector("#submitAddCustomer");

//Add car
console.log(addCustomer, formAddCustomer);
addCustomer.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("hay");
 
  formAddCustomer.style.display = "flex";
  addCustomer.style.display = "none";
});