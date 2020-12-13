let forma = document.querySelector(".unos");
let input = forma.unosGrada;
let details = document.querySelector('.details');
input.addEventListener("keyup", (e) => {
  // e.preventDefault();
  if (e.keyCode === 13) {
    let grad = input.value.trim();
    forma.reset();
    console.log(grad);

    let ispisPodataka = (data)=>{

      //  const {a,b} = data; ovako smo uzeli propertije a i b iz objekta data

        details.innerHTML = `  <h3 class="cityName">${data.a.LocalizedName}</h5>
        <div class="weatherCondition">${data.b.WeatherText}</div>
        <div class="temp">
            <span>${data.b.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>`
    };

    //1. nacin pozivanja
    let getData = async (grad) => {
      let a = await getApi(grad);
      let b = await getWeather(a.Key);

      return { a, b };
    };
    getData(grad).then((data) => {
      ispisPodataka(data);
      console.log(data);
    });

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
  }
});
