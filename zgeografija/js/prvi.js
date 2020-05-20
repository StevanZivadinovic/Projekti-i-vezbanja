let input = document.querySelector('#korisnickoIme').value;
let button = document.querySelector('#dugmeKorisnickoIme');




button.addEventListener("click", (e) => {
    
if (e.target.tagName === "BUTTON") {
localStorage.setItem('username', input);
}
});

console.log('haj');