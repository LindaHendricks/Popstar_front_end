import React from "react";

function Search() {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Item:</label>
      <input
        type="text"
        id="search"
        placeholder="Search..."
        onChange={(e) => console.log("Searching...")}
      />
    </div>
  );
}

export default Search;