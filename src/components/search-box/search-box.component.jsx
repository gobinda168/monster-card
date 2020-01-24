import React from "react";
import "./search-box.style.css";
export const SearchBox = ({ handleSearch }) => {
  return (
    <div className="container">
      <input
        type="search"
        name="search"
        id="search"
        className="search"
        placeholder="Search Monster"
        onChange={e => handleSearch(e)}
      />
    </div>
  );
};
