import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import {connect} from 'react-redux';

class Dashboard extends Component {
  render() {
  //console.log(this.props);//ovo console.log vraca sve props-ove iz ove komponente kolko kapiram
    let {projects} = this.props;
    console.log(this.props)
    return (
      <div className="dashboard container">
        <div className="row ">
        <div className="col s12 m6 right">
            <Notifications></Notifications>
            </div>
          <div className="col s12 m6">
              
            <ProjectList projects={projects}></ProjectList>{/*Ovo {projects} je ovo projects dole
            iz funkcije mapStateToProps, preuzeto iz projectReducer.js, a onda preko connect ugradjene
            funkcije ubaceno u Dashboard */}
          </div>
          <div className="col s12 m5 offset-m1"></div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) =>{
  return{//ovde idu uglaste zagrade, specifican slucaj, obrati paznju, razradi
    projects:state.project.projects

  }
}

export default connect(mapStateToProps)(Dashboard);
