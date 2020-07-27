import React, { FunctionComponent } from "react";
import { Link } from "@reach/router";
import { Photo } from "@frontendmasters/pet";

interface IProps {
  media: Photo[];
  name: string;
  age: string;
  gender: string;
  status: string;
  animal: string;
  id: number;
}

const Pet: FunctionComponent<IProps> = (props) => {
  const avatar = props.media[0]
    ? props.media[0].medium
    : "https://via.placeholder.com/150/333";
  return (
    <li className="animal">
      <div className="photo">
        <img src={avatar} />
      </div>
      <div className="info">
        <ul>
          <li>Name: {props.name}</li>
          <li>Age: {props.age}</li>
          <li>Gender: {props.gender}</li>
          <li>Status: {props.status}</li>
          <li>Type: {props.animal}</li>
          <Link to={`/details/${props.id}`}>details</Link>
        </ul>
      </div>
      <div className="clearfix" />
    </li>
  );
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, props.name),
  //   React.createElement("h2", {}, props.animal),
  //   React.createElement("h2", {}, props.breed),
  // ]);
}

export default Pet;
