import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";

function App() {
  return (
    <div>
      <h1>
        <Link to="/" className="logo">
          Adapt Me!
        </Link>
      </h1>
      <Router>
        <SearchParams path="/"/>
        <Details path="/details/:id"/>
      </Router>
    </div>
  );
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
}

ReactDOM.render(<App />, document.getElementById("root"));
