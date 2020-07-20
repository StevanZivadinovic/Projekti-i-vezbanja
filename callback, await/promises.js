let niz = [
  { title: "Neko", text: "Ja sam" },
  { title: "Niko", text: "Ti si" },
];

let dohvatiPodatke = () => {
  niz.forEach((a) => {
    console.log(a.text);
  });
};

dohvatiPodatke();

//primer promisa
let kreirajPodatke = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      niz.push(post);

      let error = false; //ako hoces catch petlju stavi ovde true

      if (!error) {//moze i bez ovoga ali nisam siguran
        resolve("problem solve");
      } else {
        reject("some problem");
      }
    }, 2000);
  });
};

/* //ovo smo zakomentarisali da bi ubacili ove promise dole. Ovo je zavrsetak ovogo koda iznad na jedan nacin, putem promisa.
Iznad je umesto ovoga zakomentarisanog dela ubacen ovaj deo pod 2). Ovo dole pod 3) je primer kad ima vise primera
//ovo zakomentarisano je primer kad imas samo jedan promis
kreirajPodatke({ title: "Neko treci", text: "On je" })
  .then(dohvatiPodatke)
  .catch((message) => {
    console.log(message);
  });
*/

//2) async await

async function init() {
  await kreirajPodatke({ title: "Neko treci", text: "On je" });

  dohvatiPodatke();
}

init();



//2 a) ovo nema veze sa ovim iznad

async function fetchUsers() {//koristio sam ovo isto u projektu recipes, od Ed-a, u reactu radjeno
    let response = await fetch( 
        `https://jsonplaceholder.typicode.com/users`) 
  
    let data = await response.json()
    console.log(data);
  }
  fetchUsers();

// 3) ovo je zakomentarisano jer smo poceli da radimo async await iznad

/*
let promis1 = Promise.resolve("Hello world");
let promis2 = 10;
let promis3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Goodbye");
  }, 2000);
});
let promis4 = fetch( 
    `https://jsonplaceholder.typicode.com/users`
).then(Response=>Response.json());//dohvatas API, to je putanja do izvora iz kog hoces da dohvatas podatke, to je u stvari isto 
//tip promisa, tj fetch preuyme putanju i pretvara je u promis, a vrednost joj je Response (odgovor);
//zato moramo da na promis4 stavimo than petlju i ukljucim json funkciju da bi od tog mutavog Responsea
//dobio neke normalne podatke



Promise.all([promis1, promis2, promis3, promis4]).then(
  (values) => console.log(values) //prkaze se posle 2 sekunde, jer tolko treba najsporijem promisu da se ostvari
);
*/

//skolski primer i sintaksa promisa
let p = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a === 2) {
    resolve("uspeh");
  } else {
    reject("neuspeh");
  }
});

p.then((message) => {
  console.log(message);
}).catch((message) => {
  console.log(message);
});
