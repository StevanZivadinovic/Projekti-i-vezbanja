
let button = document.querySelector('#dugmeKorisnickoIme');




button.addEventListener("click", (e) => {
    e.preventDefault();
if (e.target.tagName === "BUTTON") {
    console.log(e.target.tagName);
let input = document.getElementById('korisnickoIme');
localStorage.setItem('username', 1);
}
});

console.log('haj');