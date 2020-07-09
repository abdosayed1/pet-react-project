import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

function App() {
  return(
    <div>
      <h1>Adapt Me!</h1>
      <SearchParams />
    </div>
  )
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havanese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "Bird",
  //     breed: "Cockatiel",
  //   }),
  //   React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" }),
  //   React.createElement(Pet, { name: "lio", animal: "Dog", breed: "Mix" }),
  // ]);
};

ReactDOM.render(<App />, document.getElementById("root"));
