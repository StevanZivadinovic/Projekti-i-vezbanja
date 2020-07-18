import React, { useState } from 'react';
import Hello from './hello.js';


function App() {

  let [korisnici, postaviKorisnike] = useState([
    {name:'stevan',
     message:'This is a random tweet'},
     {name:'John Snow',
     message:'hello'}
    
    

  ]);

  return (
    <div className='app'>
      {korisnici.map(korisnik=>(
        <Hello name={korisnik.name} message={korisnik.message}/>
      ))}
      
      

    </div>
    
 
    );
}

export default App;    