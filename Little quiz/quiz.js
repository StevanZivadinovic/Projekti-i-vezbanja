let dugme = document.querySelector(".submit");
console.log(dugme);
let form = document.querySelector("form");

let pitanje1 = form.q1.value;
let pitanje2 = form.q2.value;
let pitanje3 = form.q3.value;
let pitanje4 = form.q4.value;
console.log(pitanje1);
let div = document.querySelector(".writeResult");
div.style.display = "none";
dugme.addEventListener("click", (e) => {
  e.preventDefault();
  let q1 = form.q1.value;
  let q2 = form.q2.value;
  let q3 = form.q3.value;
  let q4 = form.q4.value;
  console.log(q1);
  let odgovori = [q1, q2, q3, q4];
  let tacniOdgovori = ["A", "B", "A", "B"];

  let rezultat = 0;

  odgovori.forEach((a, i) => {
    if (a == tacniOdgovori[i]) {
      rezultat += 25;
    }
  });

  scrollTo(0, 0);
  let broj = 0;
  let clock = setInterval(() => {
    div.style.display = "block";
    div.innerHTML = `<h2>Linux je ${broj}% za tebe</h2>`;
    if (broj < rezultat) {
      broj++;
    } else {
      clearInterval(clock);
    }
  }, 10);
});
