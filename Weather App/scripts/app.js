let forma = document.querySelector(".unos");
let input = forma.unosGrada;
let details = document.querySelector(".details");
let slika = document.querySelector(".rezultat img");
slika.style.display = "none";

//1. nacin pozivanja
let getData = async (grad) => {
  let a = await getApi(grad);
  let b = await getWeather(a.Key);

  return { a, b };
};

//2.nacin pozivanja
    // getApi(grad)
    //     .then((data) => {
    //         console.log(data);
    //         ispisPodataka(data);
    //         let a = getWeather(data.Key);
    //         return a;
    //     })
    //     .then((data) => {

    //         console.log(data.WeatherText);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });



let ispisPodataka = (data) => {
  //  const {a,b} = data; ovako smo uzeli propertije a i b iz objekta data

  details.innerHTML = `  <h3 class="cityName">${data.a.LocalizedName}</h5>
      <div class="weatherCondition">${data.b.WeatherText}</div>
      <div class="temp">
          <span>${data.b.Temperature.Metric.Value}</span>
          <span>&deg;C</span>
      </div>`;

  //update the night/day and icon images
  let ikonica = document.querySelector(".icon img");
  let icon = document.querySelector(".icon");
  let ispisPodataka = document.querySelector(".ispisPodataka");

  ispisPodataka.style.display = "block";
  icon.style.display = "block";
  icon.style.borderRadius = "50%";
  ikonica.style.backgroundColor = "lightblue";

  ikonica.setAttribute("src", `./icons/${data.b.WeatherIcon}.svg`);
  console.log(data.b.WeatherIcon);

  if (data.b.IsDayTime) {
    console.log(data.b.IsDayTime);
    slika.setAttribute("src", "./icons/day.svg");
    slika.style.display = "flex";
  } else {
    console.log(data.b.IsDayTime);
    slika.setAttribute("src", "./icons/night.svg");
    slika.style.display = "flex";
  }
};

input.addEventListener("keyup", (e) => {
  //  e.preventDefault();
  if (e.keyCode === 13) {
    let grad = input.value.trim();
    forma.reset();
    console.log(grad);

    getData(grad).then((data) => {
      ispisPodataka(data);
      console.log(data);
    });

    localStorage.setItem("grad", grad);

  }
});

if(localStorage.getItem('grad')){
  getData(localStorage.getItem('grad'))
  .then(data=>{
    ispisPodataka(data);
  })
}
