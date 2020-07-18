import React, { useEffect, useState } from "react";
import Recipe from "./recipe.js";
import "./App.css";

let App = () => {
  let APP_ID = "0f0dd9da"; //prvo sam se prijavio na sajt EDAMAM, pa sam za svoj profil preuzeo appID i app-key
  let APP_KEY = "e5bf75b9d5404ead09c7fbbd78b035de";

  let [recepies, setRecepies] = useState([]); //recepti preuzeti sa sajta su u formi niza (niz objekata), pa zato stavljamo [] zagrade;
  let [search, setSearch] = useState("");
  let [query, setQuery] = useState("chicken");

  useEffect(() => {
    console.log("Effect has been run");
    getRecipes(); //ovde poyivamo funkciju odozdo
  }, [query]); //kad smo dodali ovo [], tada se samo jednom ispisuje ovaj tekst u konyoli, inace se ispisuje svaki put kad nesto odradimo na sajtu,a mi hocemo samo
  //prvi put kad se ucita sajt da se useEffect izvrsi/ Ako stavimo nesto u [], npr, brojac, ynaci samo ako se desi promena na brojacu onda dolazi do ponovnog aktiviranja useEffect-a,
  //tj samo mu tad doyvoljavamo da se aktivira, ako stoji prazno [], znaci sme samo na pocetku da se aktivira

  let getRecipes = async () => {
    let response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
    let data = await response.json();

    setRecepies(data.hits); //ovo hits je iz konzole, preuzeto sa sajta. Ovde postavljamo spisak recepata;
    console.log(data.hits); //dohvatamo samo recepte
    // koje smo dobili sa sajta za kuvanje
  };

  let updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  let getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch(""); //praznis input polje nakon pretrage
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-from">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        ></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recepies.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          /*key smo ubacili samo vestacki, zato sto react trazi key za svaki recept pojdeinacno*/ 
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}

        /> //recipe je ova promenljiva prva, drugo recipe je iz konyole, sa sajta preuzeto, label isto, iz konzole
      ))}
      ;
    </div>
  );
};

export default App;
