import React from "react";
import ProjectSummary from "./ProjectSummary";

let ProjectList = ({projects}) => {//projects preuzeti iz dashboard
  return <div className="project-list section">
      {
        projects && projects.map(project=>{//ovo znaci ako ima projekata onda radi map, ako nema onda nista,
          //jer na pocetku moze da se desi da nema aktivnih projekata
          return (
            <ProjectSummary project={project} key={project.id}></ProjectSummary>//ovde smo ProjectSummary-ju dodali props project koji sadrzi jedan projekat

          )
        })
      }
      

  </div>;
};

export default ProjectList;
