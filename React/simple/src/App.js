import React from "react";
import Home from "./components/home";
import About from "./components/about";
import News from "./components/news";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar1 from './components/navbar';
import './App.css'


function App() {
  return (
    
    <Router>
      
      {/*Router, tj BrowserRouter koji je ovde preimenovan u Router se stavlja na pocetku i na kraju
      da bi cela aplikacija bila 'sposobna za ruterovanje' */}
      <div className="App">
        <header className="App-header">
          <div>
         
    <Navbar1></Navbar1>
            <Route exact path="/" component={Home}></Route>
            {/**kad hoces komponentu da ubacis. exact oznacava
             * , tj omogucava da se ovaj route ucita ako je path bas taj koji je naveden a ne neki slican, koji sadrzi ovaj u sebi
             */}

            <Route exact path="/about" component={About}></Route>
            <Route exact path="/news" component={News}></Route>
          
            <Route
              exact
              path="/"
              render={() => {
                {
                  /*ovo je kad hoces neku funkciju da odradis unutar routa */
                }
                return <center><h1>Renderovano</h1></center>;
              }}
            ></Route>
                          


          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
