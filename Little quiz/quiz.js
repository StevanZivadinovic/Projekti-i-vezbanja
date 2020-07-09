let dugme=document.querySelector('.submit');
console.log(dugme);
let form=document.querySelector('form');


let pitanje1=form.q1.value;
let pitanje2=form.q2.value;
let pitanje3=form.q3.value;
let pitanje4=form.q4.value;
console.log(pitanje1);

dugme.addEventListener('click',e=>{

    e.preventDefault();
    console.log('haj');

});