import React, { useState } from "react";
import "../styles/Search.css";
import getImages from "../requests/getImages";
const Search = () => {
  const [value, setValue] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    getImages(value);
  };

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="search-btn" type="submit">
          Go!
        </button>
      </form>
    </>
  );
};

export default Search;
