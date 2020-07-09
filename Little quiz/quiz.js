let dugme = document.querySelector(".submit");
console.log(dugme);
let form = document.querySelector("form");

let pitanje1 = form.q1.value; //ovo probaj da iskoristis kod aplikacije nazvane 'aplication.html'
let pitanje2 = form.q2.value;
let pitanje3 = form.q3.value;
let pitanje4 = form.q4.value;
console.log(pitanje1);

dugme.addEventListener("click", (e) => {
  let q1 = form.q1.value; //ovo probaj da iskoristis kod aplikacije nazvane 'aplication.html'
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
    setTimeout(function () {
      if (rezultat <= rezultat) {
        rezultat++;
      }
    }, 100);
  });

  let ispis = document.querySelector(".finish");
  e.preventDefault();
  console.log("haj");
  ispis.textContent = rezultat;
});
