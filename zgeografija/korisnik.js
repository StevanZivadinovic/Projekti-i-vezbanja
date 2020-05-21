export class Korisnik {
  constructor(u) {
    this.username = u;
  }

  set username(u) {
    this._username = u;
  }

  get username() {
    return this._username;
  }

  //promena korisničkog imena
  updateUsername(newUsername) {
    this.username = newUsername;
    console.log("Promena username");
    localStorage.setItem("username", newUsername); //ovim redom cuvamo username u localnoj memoriji, i kad refrisiras stranicu
    //ostaje ti username koji si postavio, ne brise se i ne vraca na pocetnu vrednost
  }
}

let cr = new Korisnik("AA");

let forma = document.querySelector("#unosImena");
let input = document.getElementById("korisnickoIme");
let pozdravKorisnika = document.querySelector('#ispisKorisnika');
forma.addEventListener("submit", (e) => {
  e.preventDefault();
  //let usernameInput = input.value;
  cr.updateUsername(input.value);
pozdravKorisnika.innerHTML = `Zdravo ${localStorage.getItem('username')}!`;
  
});

forma.reset();




//pozdrav pri refrisiranju stranice

  let ime;
  let tekst;
  if (localStorage.username) {
    ime = localStorage.getItem("username");
    tekst = `Dobrodosao ${ime}`;
    pozdravKorisnika.innerHTML = tekst;
  } else {
      pozdravKorisnika.innerHTML = "";
  }
