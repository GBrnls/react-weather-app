import React from "react";
import searchIcon from "../icons/search.png";

const SearchBar = ({ userInput, handleChange }) => (
  <div className="searchBar">
    <img src={searchIcon} width="100%" alt="search" />
    <input
      placeholder="Search for another city..."
      value={userInput}
      onChange={handleChange}
    />
  </div>
);

export default SearchBar;
