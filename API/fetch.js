// json tip podataka
let vrednost = document.querySelector("input").value;
let inputPolje = document.querySelector("input");

inputPolje.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    let imeGrad = e.target.value;
    console.log(imeGrad);

    let podaci = async () => {
      let data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${imeGrad}&appid=9e1c7895369cbd84d2d8d613bb624ab7`
      );

      let data1 = await data.json();
      console.log(data1);
      console.log(data1.main.pressure);
    };

    podaci();
  }
});

console.log(vrednost);

// Unsplash website za preuzimanje fotografija

let slike = async () => {
  let data = await fetch(
    `https://api.unsplash.com/photos/random?client_id=TL26XICE7tBYR68kMT66_7-7ZLS--8jXjjyz3gaHIzI`
  );

  let data1 = await data.json();
  console.log(data1.urls.regular);
  document.querySelector("#Man").src = data1.urls.regular;
};

slike();

let slike2 = async () => {
  let data = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=office&client_id=TL26XICE7tBYR68kMT66_7-7ZLS--8jXjjyz3gaHIzI`
  );

  let data1 = await data.json();
  console.log(data1.results[0].urls.regular);
  document.querySelector("#rainbow2").src = data1.results[0].urls.regular;
 
};

slike2();

//blob tip podataka(slike sa kompa kad hoces da fecujes)

let slike1 = async () => {
  let data = await fetch(`losos.jpg`);

  let data1 = await data.blob();
  document.querySelector("#rainbow1").src = URL.createObjectURL(data1);

  console.log(data1);
};

slike1();


//JSON osnove neke


let covek = {
  ime:'Baki',
  age:35
}

let pr = JSON.stringify(covek);//pretvaranje u JSON
let a = JSON.parse(pr);//vracanje iz JSON u javascript oblik
console.log(covek)
console.log(pr)
console.log(a);



let niz = [
  {
    name:'Paula',
    age:25
  },
  {
    name:"Ross",
    age:32
  },
  {
    name:'Andrew',
    age:42
  }
];


let dodatak = '';
for(let i=0; i<niz.length; i++){
  console.log(niz[i]);
  dodatak+='<li>' + niz[i].name + '</li>';
  let a = document.querySelector('#lista');
  a.innerHTML = dodatak;
}




//AJAX

let loadText = () =>{
  
  let xhttp = new XMLHttpRequest();
  //OPEN - type, url/file, async
  console.log(xhttp);
  xhttp.open('GET','simple.txt', true)

  xhttp.onload = function(){
    if(this.status == 200){//moze i xhttp.status
      console.log(this.responseText)
      document.querySelector('#text').innerText = this.responseText;//ispisujemo response
    } 

    else if(this.status == 404){
      document.querySelector('#text').innerText = 'Request error';//ispisujemo text ako je doslo
      //greske

    }
  }

  //ovo salje zahtev
  xhttp.send();
}


//HTTP statuses

//200 "OK"
//403: 'forbiden'
//404: 'not found'

//ovaj drugi nacin pozivanja mozes da koristis umesto ovog prethodnog, samo sto moras u if-u da 
//proveris i stanje readyState-a
let loadText1 = () =>{
  
  let xhttp = new XMLHttpRequest();
  //OPEN - type, url/file, async
  console.log(xhttp);
  xhttp.open('GET','simple.txt', true);
  console.log("READYSTATE:", xhttp.readyState)

  xhttp.onprogress = function(){
    console.log("READYSTATE:", xhttp.readyState)

  }

  xhttp.onerror = function(){
    console.log('Request error...')
  }

  xhttp.onreadystatechange = function(){
    console.log("READYSTATE:", xhttp.readyState)

    if(this.readyState == 4  && this.status == 200){
      console.log(this.responseText);
    }
  }

  //ovo salje zahtev
  xhttp.send();
}
//redyState Values

//0: request not initialized
//1: server conection established
//2: request received
//3: proccesing request
//4: request is finished and response is ready
document.querySelector('#dugme').addEventListener('click', loadText);
document.querySelector('#dugme1').addEventListener('click', loadText1);





//NOVI KOD









