import React, { useState } from "react";
import Hello from "./hello.js";
import Form from "./component/form";
import firebase from "./config/config.js";


function App() {
  let [korisnici, postaviKorisnike] = useState([
    { name: "stevan", message: "This is a random tweet", id: 1 },
    { name: "John Snow", message: "hello", id: 2 },
  ]);

  let promena = () => {
    postaviKorisnike([
      ...korisnici,
      {
        name: "petar",
        message: "This is a random tweet",
        id: 3, //ovo uklanja gresku "each child in the list must have unique id", ali, kada dodas
        //neki nov objekt koji nema id odmah ce da se ponovo pojavi greska
      },
    ]);
  };

  console.log(korisnici);

  return (
    <div className="app">
      <Form></Form>
      <button className="dugmeDodavanje " onClick={promena}  >
        Dodaj korisnika
      </button>
      
      
      

      <div className="app1">
        {korisnici.map((korisnik, index) => (
          <Hello
            key={index} //moze umesto toga korsnik.name, sto je mnogo bolje, a ovo sa index-om je najbolje
            name={korisnik.name}
            message={korisnik.message}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
