let vrednostIme = localStorage.getItem("korisnickoIme");
let ispisKorisnika = document.querySelector(".ispisKorisnika");
let input = document.querySelector("input");
let btn1 = document.querySelector(".btn1");
let form = document.querySelector('#formTermini');

// provera korisnika na pocetku, da li je prijavljen
if (localStorage.getItem("korisnickoIme")) {
  ispisKorisnika.innerText = vrednostIme;
}


  //validacija inputa
  let patternUsername = /^[a-z\s]+$/;
  
  input.addEventListener("keyup", (e) => {
    let input = document.querySelector("input");
    let korisnickoIme = input.value;

    let pom = patternUsername.test(korisnickoIme);
      console.log(pom);
    if(pom){
      btn1.addEventListener('click',e=>{
        let korisnickoIme = input.value;
          console.log(korisnickoIme);
      });
    }else{
      console.log('neeeeeee');
      btn1.style.disabled = true;
    }
  });

  
