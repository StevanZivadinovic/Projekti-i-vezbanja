let input = document.querySelector("input");
let korisnickoIme = input.value;
let btn = document.querySelector(".btn");
let btn1 = document.querySelector(".btn1");
let ispisKorisnika = document.querySelector(".ispisKorisnika");
let vrednostIme = localStorage.getItem("korisnickoIme");
console.log(vrednostIme);
let form = document.querySelector("form");


// provera korisnika na pocetku, da li je prijavljen
if (!localStorage.getItem("korisnickoIme")) {
  document.querySelectorAll(".loose").forEach((a) => {
    a.style.display = "none";
  });
} else {
  ispisKorisnika.innerText = vrednostIme;
  document.querySelectorAll(".loose").forEach((a) => {
    a.style.display = "flex";
  });
}
let patternUsername = /^[a-zA-Z\s]+$/;
input.addEventListener("keyup", (e) => {
    
  let input = document.querySelector("input");
  let korisnickoIme = input.value;
  let pom = patternUsername.test(korisnickoIme);
  console.log(pom);
  if (pom) {
    //ukoliko je prazan input ne dozvoljava prikaz navbara
    //unos korisnickog imena u localStorage
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.setItem("korisnickoIme", korisnickoIme);
    
      let vrednostIme = localStorage.getItem("korisnickoIme");
      ispisKorisnika.innerText = vrednostIme;
          
      document.querySelectorAll(".loose").forEach((a) => {
        a.style.display = "flex";
      });
       form.reset();
    });
     
  }
});

//izlogovanje korisika, brisanje localStorage-a

btn1.addEventListener("click", (e) => {
    e.preventDefault();
  localStorage.setItem("korisnickoIme", "");
  document.querySelectorAll(".loose").forEach((a) => {
    a.style.display = "none";
  });
  localStorage.setItem("korisnickoIme", "");
  ispisKorisnika.innerText = '';
});
