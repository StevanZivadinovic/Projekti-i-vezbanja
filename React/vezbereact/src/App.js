import React, {useState, useEffect} from 'react';
import './App.css';
import firebase from 'firebase';
import firebaseConfig from './config/Config.js';


/*
//ispis podataka sa mog git hub profila
function App() {

  let initProfile={
    name:null,
    numOfRepo:null
  }

  let [profile, setProfile] = useState(initProfile);

let getDocuments = async ()=>{

  let response =await fetch( `https://api.github.com/users/stevanzivadinovic`);

  let data = await response.json();
  console.log(data);
  setProfile({
    name:data.login,
    numOfRepo:data.public_repos
  });
  console.log(data.public_repos);

};

  useEffect(()=>{
    getDocuments();

  },[]);

  console.log('haj');
  return (
     <div className="App">
       <h1>{profile.name}</h1>
       <h1>{profile.numOfRepo}</h1>
    </div>
  );
}
*/





const api = {
  key: "bb75ef88e0fef7fd55e01fcb844d0bf3",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {



  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  


  let search = async (evt)=>{
    if (evt.key === "Enter") {
    let response = await fetch(`${api.base}weather?q=${query}&appid=${api.key}`);
    let data = await response.json();
    setWeather(data);
    setQuery('');
    }
  };
  /*
  //umesto ovog gore moze i ovako
  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {

        
          setWeather(result);
          setQuery('');
          console.log(result);
       // });
    }
   
  }
*/ 
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)/10}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
            <div className="weather">Wind: {weather.wind.speed}m/s</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
