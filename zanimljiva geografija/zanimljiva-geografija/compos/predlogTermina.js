import Ispis from './firebase.js'

let vrednostIme = localStorage.getItem("korisnickoIme");
let ispisKorisnika = document.querySelector(".ispisKorisnika");
let btn1 = document.querySelector(".btn1");




// provera korisnika na pocetku, da li je prijavljen
if (localStorage.getItem("korisnickoIme")) {
  ispisKorisnika.innerText = vrednostIme;
}


  //validacija inputa
  let patternUsername = /^[a-zA-Z\s]+$/;
  
  btn1.addEventListener("click", (e) => {
    let input = document.querySelector("input");
    let korisnickoIme = input.value;
   let pom = patternUsername.test(korisnickoIme)
   if(pom){
    let b = korisnickoIme.toLowerCase();
    let a = b.split(' ');
    let noviString =''
    a.forEach(b=>{
      let prepravljeno = b[0].toUpperCase() + b.slice(1);
      console.log(prepravljeno);
       noviString += prepravljeno; 

       
      
    })
    Ispis.ispisUbazu(noviString);
    
    
 
   }

  });

  
