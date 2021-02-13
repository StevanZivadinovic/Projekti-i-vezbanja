let dugme = document.querySelector(".igraj");

let tajmer = document.querySelector(".tajmer");
let counter = 10;
let btn = document.querySelector(".btn");
let slovo = document.querySelector(".randomSlovo");

let submit = document.querySelector("#submit");

//odabir slova, startorvanje igrice
let nizSlova = [
  "A",
  "B",
  "V",
  "G",
  "D",
  "E",
  "Z",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "R",
  "S",
  "T",
  "C",
  "U",
  "F",
  "H",
];
let randomSlovo = nizSlova[(Math.random() * 22).toFixed(0)];

dugme.addEventListener("click", (e) => {
  let forma = document.querySelector(".forma");
  forma.style.display = "flex";
  dugme.remove();
  slovo.innerHTML = `Izabrano slovo: ${randomSlovo}`;
  let a = setInterval(() => {
    counter = counter - 1;
    if (counter >= 0) {
      tajmer.innerHTML = counter;
    } else {
      clearTimeout(a);
      document.getElementById("submit").click(); //automatski submituje
      //formu nakon isteka vremena
    }
  }, 1000);
  submit.onclick = () => {
    clearTimeout(a);
  };
});
let a = "";

console.log();
//unos pojmova

submit.addEventListener("click", (e) => {
  e.preventDefault();
  clearTimeout(a);
  let drzava = document.querySelector("#drzava").value;
  let Grad = document.querySelector("#Grad").value;
  let Reka = document.querySelector("#Reka").value;
  let Planina = document.querySelector("#Planina").value;
  let Biljka = document.querySelector("#Biljka").value;
  let Zivotinja = document.querySelector("#Zivotinja").value;
  let Predmet = document.querySelector("#Predmet").value;

  let nizDrzava = [];
  let nizGrad = [];
  let nizReka = [];
  let nizPlanina = [];
  let nizBiljka = [];
  let nizZivotinja = [];
  let nizPredmet = [];

  let drzavaKomp;
  let gradKomp;
  let rekaKomp;
  let planinaKomp;
  let biljkaKomp;
  let zivotinjaKomp;
  let predmetKomp;

  //korisnik
  let poeniKorisnik = 0;
  let poeniKomp = 0;
  let potvrdaDrzava = null;
  let potvrdaGrad = null;
  let potvrdaReka = null;
  let potvrdaPlanina = null;
  let potvrdaBiljka = null;
  let potvrdaZivotinja = null;
  let potvrdaPredmet = null;

  db.collection("pojmovi")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        //drzava
        if (
          doc.data().kategorija === "drzava" &&
          doc.data().pocetnoSlovo === randomSlovo
        ) {
          nizDrzava.push(doc.data().pojam);
        }
        drzavaKomp = nizDrzava[(Math.random() * nizDrzava.length).toFixed(0)];

        if (
          doc.data().pojam === drzava &&
          doc.data().kategorija === "drzava" &&
          doc.data().pocetnoSlovo === randomSlovo
        ) {
          potvrdaDrzava = true;
        }
       

        //grad
        if (
          doc.data().kategorija === "grad" &&
          doc.data().pocetnoSlovo === randomSlovo
        ) {
          nizGrad.push(doc.data().pojam);
        }
        gradKomp = nizGrad[(Math.random() * nizGrad.length).toFixed(0)];

        if (
          doc.data().pojam === Grad &&
          doc.data().kategorija === "grad" &&
          doc.data().pocetnoSlovo === randomSlovo
        ) {
          potvrdaGrad = true;
        }

        //reka

        if (
          doc.data().kategorija === "reka" &&
          doc.data().pocetnoSlovo === randomSlovo
        ) {
          nizReka.push(doc.data().pojam);
        }
        rekaKomp = nizReka[(Math.random() * nizReka.length).toFixed(0)];

        if (
          doc.data().pojam === Reka &&
          doc.data().kategorija === "reka" &&
          doc.data().pocetnoSlovo === randomSlovo
        ) {
          potvrdaReka = true;
        }

        //planina

        if (
          doc.data().kategorija === "planina" &&
          doc.data().pocetnoSlovo === randomSlovo
        ) {
          nizPlanina.push(doc.data().pojam);
        }
        planinaKomp =
          nizPlanina[(Math.random() * nizPlanina.length).toFixed(0)];

        if (
          doc.data().pojam === Planina &&
          doc.data().kategorija === "planina" &&
          doc.data().pocetnoSlovo === randomSlovo
        ) {
          potvrdaPlanina = true;
        }

        //biljka

        if (
          doc.data().kategorija === "biljka" &&
          doc.data().pocetnoSlovo === randomSlovo
        ) {
          nizBiljka.push(doc.data().pojam);
        }
        biljkaKomp = nizBiljka[(Math.random() * nizBiljka.length).toFixed(0)];

        if (
          doc.data().pojam === Biljka &&
          doc.data().kategorija === "biljka" &&
          doc.data().pocetnoSlovo === randomSlovo
        ) {
          potvrdaBiljka = true;
        }

        //zivotinja

        if (
          doc.data().kategorija === "zivotinja" &&
          doc.data().pocetnoSlovo === randomSlovo
        ) {
          nizZivotinja.push(doc.data().pojam);
        }
        zivotinjaKomp =
          nizZivotinja[(Math.random() * nizZivotinja.length).toFixed(0)];

        if (
          doc.data().pojam === Zivotinja &&
          doc.data().kategorija === "zivotinja" &&
          doc.data().pocetnoSlovo === randomSlovo
        ) {
          potvrdaZivotinja = true;
        }

        //predmet

        if (
          doc.data().kategorija === "predmet" &&
          doc.data().pocetnoSlovo === randomSlovo
        ) {
          nizPredmet.push(doc.data().pojam);
        }
        predmetKomp =
          nizPredmet[(Math.random() * nizPredmet.length).toFixed(0)];

        if (
          doc.data().pojam === Predmet &&
          doc.data().kategorija === "predmet" &&
          doc.data().pocetnoSlovo === randomSlovo
        ) {
          potvrdaPredmet = true;
        }
      });

      //drzava
      if (potvrdaDrzava) {
        if (drzavaKomp !== drzava && drzavaKomp !== undefined) {
          console.log("nisu isti");
          poeniKomp += 10;
          poeniKorisnik += 10;
        } else if (drzavaKomp === drzava) {
          console.log("isti su");
          poeniKomp += 5;
          poeniKorisnik += 5;
        }

        if (drzavaKomp !== drzava && drzavaKomp === undefined) {
          poeniKorisnik += 15;
        }
      } else {
        if (drzavaKomp && drzava === "") {
          poeniKomp += 15;
        }
      }

      //grad

      if (potvrdaGrad) {
        if (gradKomp !== Grad && gradKomp !== undefined) {
          console.log("nisu isti");
          poeniKomp += 10;
          poeniKorisnik += 10;
        } else if (gradKomp === Grad) {
          console.log("isti su");
          poeniKomp += 5;
          poeniKorisnik += 5;
        }

        if (gradKomp !== Grad && gradKomp === undefined) {
          poeniKorisnik += 15;
        }
      } else {
        if (gradKomp && Grad === "") {
          poeniKomp += 15;
        }
      }

      //reka

      if (potvrdaReka) {
        if (rekaKomp !== Reka && rekaKomp !== undefined) {
          console.log("nisu isti");
          poeniKomp += 10;
          poeniKorisnik += 10;
        } else if (rekaKomp === Reka) {
          console.log("isti su");
          poeniKomp += 5;
          poeniKorisnik += 5;
        }

        if (rekaKomp !== Reka && rekaKomp === undefined) {
          poeniKorisnik += 15;
        }
      } else {
        if (rekaKomp && Reka === "") {
          poeniKomp += 15;
        }
      }

      //planina

      if (potvrdaPlanina) {
        if (planinaKomp !== Planina && planinaKomp !== undefined) {
          console.log("nisu isti");
          poeniKomp += 10;
          poeniKorisnik += 10;
        } else if (planinaKomp === Planina) {
          console.log("isti su");
          poeniKomp += 5;
          poeniKorisnik += 5;
        }

        if (planinaKomp !== Planina && planinaKomp === undefined) {
          poeniKorisnik += 15;
        }
      } else {
        if (planinaKomp && Planina === "") {
          poeniKomp += 15;
        }
      }

      //Biljka

      if (potvrdaBiljka) {
        if (biljkaKomp !== Biljka && biljkaKomp !== undefined) {
          console.log("nisu isti");
          poeniKomp += 10;
          poeniKorisnik += 10;
        } else if (biljkaKomp === Biljka) {
          console.log("isti su");
          poeniKomp += 5;
          poeniKorisnik += 5;
        }

        if (biljkaKomp !== Biljka && biljkaKomp === undefined) {
          poeniKorisnik += 15;
        }
      } else {
        if (biljkaKomp && Biljka === "") {
          poeniKomp += 15;
        }
      }

      //zivotinja

      if (potvrdaZivotinja) {
        if (zivotinjaKomp !== Zivotinja && zivotinjaKomp !== undefined) {
          console.log("nisu isti");
          poeniKomp += 10;
          poeniKorisnik += 10;
        } else if (zivotinjaKomp === Zivotinja) {
          console.log("isti su");
          poeniKomp += 5;
          poeniKorisnik += 5;
        }

        if (zivotinjaKomp !== Zivotinja && zivotinjaKomp === undefined) {
          poeniKorisnik += 15;
        }
      } else {
        if (zivotinjaKomp && Zivotinja === "") {
          poeniKomp += 15;
        }
      }

      if (potvrdaPredmet) {
        if (predmetKomp !== Predmet && predmetKomp !== undefined) {
          console.log("nisu isti");
          poeniKomp += 10;
          poeniKorisnik += 10;
        } else if (predmetKomp === Predmet) {
          console.log("isti su");
          poeniKomp += 5;
          poeniKorisnik += 5;
        }

        if (predmetKomp !== Predmet && predmetKomp === undefined) {
          poeniKorisnik += 15;
        }
      } else {
        if (predmetKomp && Predmet === "") {
          poeniKomp += 15;
        }
      }

      console.log(potvrdaDrzava);
      console.log(potvrdaPredmet);
      console.log(Predmet);
      console.log(poeniKomp);
      console.log(poeniKorisnik);

      let ispisRezultata1 = document.querySelector(".ispisRezultata1");
      let ispisRezultata2 = document.querySelector(".ispisRezultata2");


      let poeniK=0;
      let poeniKor=0;

     
      setInterval(()=>{
        if(poeniK<poeniKomp){
          poeniK+=1;
          ispisRezultata1.innerHTML = `Kompijuter: ${poeniK}`;
        }
        if(poeniKor<poeniKorisnik){
          poeniKor+=1;
                ispisRezultata2.innerHTML=`,
                Igrac:${poeniKor}`
        }

      },100);
      if(poeniK==0){
        ispisRezultata1.innerHTML+=`,
        Kompijuter:${poeniK}`
      }
      if(poeniKor==0){
        ispisRezultata2.innerHTML+=`,
        Igrac:${poeniKor}`
      }
     


    //   if(poeniKor<poeniKorisnik){
    //   setInterval(()=>{
        
    //       poeniKor+=1;
    //       ispisRezultata.innerHTML+=`,
    //       Igrac:${poeniKor}`
        
    //   },100)
    // }else  if(poeniKor===poeniKorisnik){
    //   ispisRezultata.innerHTML+=`
    //   Igrac:${poeniKor}`
    // }
      
    });
});
