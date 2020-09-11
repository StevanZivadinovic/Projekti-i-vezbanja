import React from "react";
import "./App.css";
import Nav from "./components/nav";
import About from "./components/about";
import Home from "./components/home";
import Shop from './components/shop'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
       <Route exact path='/' component={Home}/>
       <Route exact path='/about' component={About}/>
       <Route exact path='/shop' component={Shop}/>


      </div>
    </Router>
  );
}

export default App;
