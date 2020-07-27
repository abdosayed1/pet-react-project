import React, { FunctionComponent } from "react";
import { Animal } from "@frontendmasters/pet";
import Pet from "./Pet";

interface IProps {
  pets: Animal[]
}

const SearchResult: FunctionComponent<IProps> = ({ pets }) => {
  const petlist = pets;
  return (
    <div className="searchlist">
      <h2>results</h2>
      {pets.length === 0 ? (
        <h2>There is no results</h2>
      ) : (
        <ul>
          {petlist.map(pet => (
            <Pet
              key={pet.id}
              animal={pet.type}
              name={pet.name}
              age={pet.age}
              gender={pet.gender}
              status={pet.status}
              media={pet.photos}
              id={pet.id}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchResult;