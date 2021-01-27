let vrednostIme = localStorage.getItem("korisnickoIme");
let ispisKorisnika = document.querySelector(".ispisKorisnika");
console.log(vrednostIme);
// provera korisnika na pocetku, da li je prijavljen
if (localStorage.getItem("korisnickoIme")) {
    ispisKorisnika.innerText = vrednostIme;
    
  } 