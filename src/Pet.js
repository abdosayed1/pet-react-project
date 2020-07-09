import React from "react";

function Pet(props) {

  return(
    <div className="container">
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  )
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, props.name),
  //   React.createElement("h2", {}, props.animal),
  //   React.createElement("h2", {}, props.breed),
  // ]);
};

export default Pet;
