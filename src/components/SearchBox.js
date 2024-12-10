import React, { useState } from "react";
import './SearchBox.css';
import front from '../assets/Front.png';
import { CiSearch } from "react-icons/ci";

function SearchBox({ onSearch }) {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(input);
    }
  };

  const handleSearchClick = () => {
    onSearch(input);
  };

  return (
    <div className="search-container">
      <img src={front} alt="Girman Technologies" className="logo" />
      <div className="search-input-container">
      <CiSearch className="search-icon" onClick={handleSearchClick} />
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
}

export default SearchBox;
