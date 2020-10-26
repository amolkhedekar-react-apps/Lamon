import React from "react";
import "./SearchInput.css";

function SearchInput() {
  return (
    <div className="header__search">
      <input type="text" placeholder="Search" className="header__searchInput" />
      <button className="header__searchButton">
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
}

export default SearchInput;
