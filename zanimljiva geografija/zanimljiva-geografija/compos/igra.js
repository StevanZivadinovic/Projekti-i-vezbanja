console.log('haj');
let dugme = document.querySelector('.igraj');
console.log(dugme);
let tajmer = document.querySelector('.tajmer');
let counter = 90;
let btn = document.querySelector('.btn');
let slovo = document.querySelector('.randomSlovo');


let submit = document.querySelector('#submit');


//odabir slova, startorvanje igrice
let nizSlova = ['A', 'B', 'V', 'G', 'D', 'E', 'Z', 'I', 'J','K'
,'L','M','N','O','P','R','S','T','C' ,'U','F','H']
let randomSlovo = nizSlova[(Math.random()*22).toFixed(0)]

dugme.addEventListener('click',e=>{
    dugme.remove();
    slovo.innerHTML=`Izabrano slovo: ${randomSlovo}`;
  let a = setInterval(()=>{
       counter = counter-1;
       if(counter>=0){
        tajmer.innerHTML = counter;
       }
       else{
        clearTimeout(a);
       }
       
       },1000)
       
});

//unos pojmova

submit.addEventListener('click',e=>{
    e.preventDefault();

    
})



