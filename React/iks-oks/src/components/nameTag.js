import React from "react";

let nameTag = (props) => {
  return <div className="style1">
      {props.name === "milan" && <div>{props.name}</div>}
<h2>Name: {props.name} {<br></br>} Last Name: {props.lastName}</h2>
      

  </div>
};

export default nameTag;
