import React from "react";
import "./App.css";
import Navbar from './components/navbar'


import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
      <Navbar></Navbar>
      <Route path='/' exact></Route>
      
      </Router>
    </div>
  );
}

export default App;
