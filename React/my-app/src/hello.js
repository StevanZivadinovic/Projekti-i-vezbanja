import React, { useState } from "react";
import "./App.css";

function Hello(props) {
  //moze u zagradi i da napises(name, message) umesto (props)
  //pa onda dole pises samo {name} ili {message}, a ne{props.name}

  let [pocetnaVrednost, povecavanje] = useState(0);
  let [bojaPozadine, postaviCrveno] = useState(false);

  let povecaj = () => {
    povecavanje(pocetnaVrednost + 1);
  };

  let promeniBoju = () => {
    postaviCrveno((bojaPozadine = true)); //mogo sam samo true da napisem
  };

  return (
    <div>
      <div className="tweet">
        <h3>{props.name}</h3>
        <p>{props.message}</p>

        <h3>{pocetnaVrednost}</h3>
        <button onClick={povecaj}>Like</button>
        <h1 className={bojaPozadine ? "red" : ""}>Promeni mi boju</h1>
        <button onClick={promeniBoju}>promeni boju textu</button>
      </div>
    </div>
  );
}

export default Hello;
