import React from "react";
import "./App.css";
import Navbar from './components/navbar'
import Home from './components/home'




import { BrowserRouter as Router, Route } from "react-router-dom";
import Services from "./components/Services";
import SignUp from "./components/Signup";
import Products from "./components/Products";
import fire from './fire';


function App() {
  return (
    <div className='App'>
      <Router>
      <Navbar></Navbar>
     
      <Route path='/' exact component={Home}></Route>
            <Route path='/services' exact component={Services}></Route>
            <Route path='/products' exact component={Products}></Route>
            <Route path='/sign-up' exact component={SignUp}></Route>

      
      </Router>
    </div>
  );
}

export default App;
