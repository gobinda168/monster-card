import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";
import { get } from "axios";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState("");
  // const [filteredList, setFilteredList] = useState(" ");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await get("https://jsonplaceholder.typicode.com/users");
      setMonsters(data);
    };
    fetchData();
  }, []);
  const handleSearch = e => {
    setSearch(e.target.value);
  };

  const filterList = monsters.filter(monster =>
    monster.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <SearchBox handleSearch={handleSearch} />
      <h1>Monster Rolodex</h1>
      <CardList monsters={filterList} />
    </div>
  );
}

export default App;
