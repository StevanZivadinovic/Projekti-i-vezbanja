import React, { Component } from "react";
import firebase from "../config/config.js";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      message: "",
    };
  }

  promena = (e) => {
    this.setState({
      name: e.target.value,
    });
    console.log(this.state.name);
  };

  promena1 = (e) => {
    this.setState({
      message: e.target.value,
    });
    console.log(this.state.name);
  };
  
  unosLocal = (e) => {
    
    localStorage.setItem("ime", this.state.name);
    localStorage.setItem("poruka", this.state.message);
    let name=document.querySelector('#ime')

    
    firebase
      .firestore()
      .collection("korisnici")
      .set({
        ime: name.value,
        poruka: this.state.message,
      })
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          
          console.log(doc);
        });
      });
  };

  render() {
    return (
      <div>
        <div className="forma">
          <form>
            <input
              id='ime'
              value={this.state.name}
              type="text"
              placeholder="unesi ime.."
              onChange={this.promena}
            ></input>
            <input
              type="text"
              placeholder="unesi poruku.."
              value={this.state.message}
              onChange={this.promena1}
            ></input>
            <button className="dugmeDodavanje " onClick={this.unosLocal}>
              Dodaj korisnika u localStorage
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
