import React, { useState, useEffect } from "react";
import "./App.css";
import NameTag from "./components/nameTag";

const initMatrix = [];
function App() {
  const [matrix, setMatrix] = useState(initMatrix);
  const [matrixSize, setMatrixSize] = useState(3);
  const [currentPlayer, setCurrentPlayer] = useState("o");
  const [selR, setSelR] = useState(null);
  const [selC, setSelC] = useState(null);
  const [winner, setWinner] = useState(null);


  

  useEffect(() => {
    const row = new Array(matrixSize).fill(null);

    const tempMatrix = [];

    for (let i = 0; i < matrixSize; i++) {
      tempMatrix.push([...row]);
    }
    setMatrix(tempMatrix);
  }, []);

  let squerClick = (r,c) =>{
    if(!matrix[r][c]){
      let nextPlayer = currentPlayer === 'x' ? 'o' :'x';
      setCurrentPlayer(nextPlayer);
      const matrixCopy = [...matrix];
      matrixCopy[r][c] = nextPlayer;
    }
    console.log(r,c);
  }

let isWinner = () =>{
  alert('ahahha')
}



  useEffect(() => {
    if(!winner){
      isWinner();
    }
  
  })

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {
          matrix.map((val, c) => (
            <div  className='c'>
            {val.map((val1,r)=>( 
              <div  onClick={()=>{squerClick(r,c)}} className='r'>
                {matrix[r][c]}
              </div>
            ))}
             
              
            
              
               
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
