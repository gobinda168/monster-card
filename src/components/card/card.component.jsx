import React from "react";
import "./card.style.css";
export const Card = ({name, id }) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${id}?set=set2`} alt={name} />
      <h1>{name}</h1>
    </div>
  );
};
