import { Term } from "./terms.js";
import { Korisnik } from "./korisnik.js";

// DOM
let liElPojam = document.querySelector("#terms");
let formUsername = document.querySelector("#formUsername");
let inputUsername = document.querySelector("#inputUsername");
let hi = document.querySelector("#hi");
let formTerm = document.querySelector("#formTerm");
let selectCateg = document.querySelector("#selectCateg");
let inputTerm = document.querySelector("#inputTerm");
let info = document.querySelector("#info");

let pozdravUser = () => {
  let ime;
  let tekst;
  if (localStorage.username) {
    ime = localStorage.getItem("username");
    tekst = `Zdravo ${ime}`;
    hi.innerHTML = tekst;
  } else {
    hi.innerHTML = "";
  }
};

let checkUser = () => {
  if (!localStorage.username) {
    liElPojam.classList.add("disabled");
  }
};

let username = () => {
  if (localStorage.username) {
    return localStorage.username;
  }
};

checkUser();
pozdravUser();

let user = new Korisnik(username());

if (formUsername) {
  formUsername.addEventListener("submit", (e) => {
    e.preventDefault();
    let newUsername = inputUsername.value;
    user.updateUsername(newUsername);
    formUsername.reset();
    location.reload();
  });
}

let validFunc = (str) => {
  let regExp1 = /[\s]/gi;
  let regExp2 = /[^\w]/gi;
  let regExp3 = /[_]/g;
  let edF = str
    .replace(regExp1, "")
    .toLowerCase()
    .replace(regExp2, "")
    .replace(regExp3, "");
  let final = edF.charAt(0).toUpperCase() + edF.slice(1);
  return final;
};

// Slanje novog pojma
if (formTerm) {
  formTerm.addEventListener("submit", (e) => {
    e.preventDefault();
    let kategorija = selectCateg.value;
    let trm = new Term(username(), kategorija);
    let textTerm = inputTerm.value;
    textTerm = validFunc(textTerm);

    if (trm.checkAddTerms(textTerm, kategorija)) {
      info.innerHTML = "Pojam vec postoji!";
    } else {
      // trm
      //   .addTerm(textTerm)
      //   .then(() => {
      //     formTerm.reset();
      //     info.innerHTML = "Pojam unet!";
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });

      setInterval(() => {
        info.innerHTML = "";
      }, 3000);
    }
  });
}
