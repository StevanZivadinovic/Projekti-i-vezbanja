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
    if(!matrix[r][c] && !winner){
      console.log(!matrix[r][c]);
      setSelC(c)
      setSelR(r)

      let nextPlayer = currentPlayer === 'x' ? 'o' :'x';
      setCurrentPlayer(nextPlayer);
      const matrixCopy = [...matrix];
      matrixCopy[r][c] = nextPlayer;
    }
    console.log(r,c);
  }

let isWinner = () =>{
  let vertical = true;
  let horizontal = true;
  let d1 = true;
  let d2 = true;

  if(selC === null || selR === null){
    return;
  }
  for(let i=0; i<matrixSize; i++){
    if(matrix[i][selC] !== currentPlayer){
      vertical =false;
    }
    if(matrix[selR][i] !== currentPlayer){
      horizontal =false;
    }
    if(matrix[i][i] !== currentPlayer){
      d1 =false;
    }
    if(matrix[i][matrixSize - i - 1 ] !== currentPlayer){
      d2 = false;
    }
   
  }
  if(vertical || horizontal || d1 || d2){
    setWinner(true);
  }
}



  useEffect(() => {
    if(!winner){
      isWinner();
    }
  
  })
  function refreshPage() {
    window.location.reload(false);
  }


  return (
    <div className="App">
      <header className="App-header">
        <div>
        <button onClick={refreshPage}>Click to reload!</button>
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
            <h1>{winner ?`The player ${currentPlayer} is winner` : ""}</h1>
      </header>
    </div>
  );
}

export default App;
