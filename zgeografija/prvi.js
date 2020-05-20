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
  
    // Promena korisnickog imena
    updateUsername(newUser) {
      this.username = newUser;
      localStorage.setItem("username", newUser);
    }
  }


updateUsername('stevan');




let button = document.querySelector('#dugmeKorisnickoIme');




button.addEventListener("click", (e) => {
    e.preventDefault();
if (e.target.tagName === "BUTTON") {
    console.log(e.target.tagName);
let input = document.getElementById('korisnickoIme');
localStorage.setItem('username', input.value);
}
});

console.log('haj');