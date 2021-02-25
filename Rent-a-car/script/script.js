//Add car
let addCar = document.querySelector('input#addCar');
let formAddCar = document.querySelector('form.addCar');
console.log(addCar, formAddCar)
addCar.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('hay')
    formAddCar.style.display='flex';
    addCar.style.display='none';
})


//add Car to firebase




