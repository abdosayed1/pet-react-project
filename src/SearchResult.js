import React from "react";
import Pet from "./Pet";

export default function SearchResult({ pets }) {
  const petlist = pets;
  
  return (
    <div className="searchlist">
      <h2>results</h2>
      {pets.length === 0 ? (
        <h2>There is no results</h2>
      ) : (
        <ul>
          {petlist.map((pet) => (
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
