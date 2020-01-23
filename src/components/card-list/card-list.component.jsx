import React from "react";
import "./card-list.style.css";
import { Card } from "../card/card.component";
export const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map(({ name, id }) => (
        <Card key={id} name={name} id={id} />
      ))}
    </div>
  );
};
