
let sekunda = document.querySelector('.Sec');
console.log(sekunda);
let minuta = document.querySelector('.Min');
let sat = document.querySelector('.Hour');



setInterval(()=>{
    let date= new Date();
    let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

secRatio = sec/60;
minRatio = (secRatio + min)/60;
hourRatio = (minRatio + hour)/12;

sekunda.style.transform = `rotate(${secRatio*360}deg)`;
minuta.style.transform = `rotate(${minRatio*360}deg)`;
sat.style.transform = `rotate(${hourRatio*360}deg)`;




console.log(hour,min,sec);
},1000)
