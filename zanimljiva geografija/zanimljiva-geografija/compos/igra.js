console.log("haj");
let dugme = document.querySelector(".igraj");

let tajmer = document.querySelector(".tajmer");
let counter = 90;
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
  dugme.remove();
  slovo.innerHTML = `Izabrano slovo: ${randomSlovo}`;
  let a = setInterval(() => {
    counter = counter - 1;
    if (counter >= 0) {
      tajmer.innerHTML = counter;
    } else {
      clearTimeout(a);
    }
  }, 1000);
});
let a = "";
console.log(a);
console.log();
//unos pojmova

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let drzava = document.querySelector("#drzava").value;
  let Grad = document.querySelector("#Grad").value;
  let Reka = document.querySelector("#Reka").value;
  let Planina = document.querySelector("#Planina").value;
  let Biljka = document.querySelector("#Biljka").value;
  let Zivotinja = document.querySelector("#Zivotinja").value;
  let Predmet = document.querySelector("#Predmet").value;

  let nizDrzava = [];
  
  let drzavaKomp;


  //korisnik
  let poeniKorisnik = 0;
        let poeniKomp = 0;
        let potvrda=null;
  db.collection("pojmovi")
    .get()
    .then((snapshot) => {
        
      snapshot.docs.forEach((doc) => {
        if (doc.data().kategorija === "drzava") {
            nizDrzava.push(doc.data().pojam);
          }
          drzavaKomp = nizDrzava[(Math.random() * nizDrzava.length).toFixed(0)];

        if (doc.data().pojam === drzava && doc.data().kategorija === "drzava" ) {
           potvrda=true;
         
        } 
        
        

      });

      if(potvrda){
          if(drzavaKomp!==drzava && drzavaKomp!==undefined){
              console.log('nisu isti');
              poeniKomp+=10;
              poeniKorisnik+=10;
          }

          else if(drzavaKomp===drzava){

            console.log('isti su')
            poeniKomp+=5;
            poeniKorisnik+=5
          }

          if(drzavaKomp!==drzava && drzavaKomp===undefined){
           
            poeniKorisnik+=10;
        }
       
        
      }else{
          if(drzavaKomp){
              poeniKomp+=15;
          }
      }

    
      console.log(potvrda);
      console.log(drzavaKomp);
      console.log(drzava);
      console.log(poeniKomp); 
      console.log(poeniKorisnik)
      
      
    });

   
});
