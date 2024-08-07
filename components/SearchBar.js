"use client";
import React, { useState } from "react";
import styles from "./SearchBar.module.css";
function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        className={styles.inputField}
      />
      <button type="submit" className={styles.submitButton}>
        Search
      </button>
    </form>
  );
}


export default SearchBar;
