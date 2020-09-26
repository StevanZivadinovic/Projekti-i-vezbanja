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
  console.log(data1.urls.regular
    );
  document.querySelector('#Man').src = data1.urls.regular;
};

slike();

//blob tip podataka(slike sa kompa kad hoces da fecujes)

let slike1 = async () => {
  let data = await fetch(`losos.jpg`);

  let data1 = await data.blob();
  document.querySelector("#rainbow1").src = URL.createObjectURL(data1);

  console.log(data1);
};

slike1();
