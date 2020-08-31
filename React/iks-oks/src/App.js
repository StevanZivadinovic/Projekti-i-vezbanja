import React, { useState, useEffect } from "react";
import "./App.css";
import NameTag from "./components/nameTag";

const initMatrix = [];
function App() {
  const [matrix, setMatrix] = useState(initMatrix);
  const [matrixSize, setMatrixSize] = useState(3);
  const [currentPlayer, setCurrentPlayer] = useState("o");

  useEffect(() => {
    const row = new Array(matrixSize).fill(null);

    const tempMatrix = [];

    for (let i = 0; i < matrixSize; i++) {
      tempMatrix.push([...row]);
    }
    setMatrix(tempMatrix);
  }, []);

  let squerClick = () =>{
    alert('hi');
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {
          matrix.map((val, c) => (
            <div  className='c'>
            {val.map(()=>( 
              <div  onClick={squerClick} className='r'></div>
            ))}
             
              
            
              
               
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
