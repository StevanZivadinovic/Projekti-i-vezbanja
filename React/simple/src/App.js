import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
    <Router>
      <div>
        <Route exact path='/' component={Home}></Route>
      </div>
    </Router>
      </header>
    </div>
  );
}

export default App;
