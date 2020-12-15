// https://developer.accuweather.com/

//  City Search

let getApi = async (city) => {
  let key = "yQVKeePusHNgflojpG5AfKGm7jMebHub";
  let base = `http://dataservice.accuweather.com/locations/v1/cities/search`;
  let queres = `?apikey=${key}&q=${city}`;
  let data = await fetch(base + queres);
  let data1 = await data.json();
  return data1[0];
};

// Current Conditions
let getWeather = async (id) => {
  let key = "yQVKeePusHNgflojpG5AfKGm7jMebHub";
  let base = "http://dataservice.accuweather.com/currentconditions/v1/";
  let queries = `${id}?apikey=${key}`;

  let data = await fetch(base + queries);
  let data1 = await data.json();
  return data1[0];
};