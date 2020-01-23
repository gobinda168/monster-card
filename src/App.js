import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";

function App() {
  const [monsters, setMonsters] = useState([
    { id: 1, name: "Frankenstein" },
    { id: 2, name: "Dracule" },
    { id: 3, name: "Golem" },
    { id: 4, name: "Werewolf" },
    { id: 5, name: "Dragon" }
  ]);

  return (
    <div className="App">
      {monsters.map(({ name, id }) => (
        <h1 key={id}>{name}</h1>
      ))}
    </div>
  );
}

export default App;
