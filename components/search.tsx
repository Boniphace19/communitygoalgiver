"use client";
import SearchBar from "./SearchBar";
import { useState } from "react";
export default function Search() {
  const [result, setResult] = useState([]);
  const handleSearch = (query) => {
    // Implement your search logic here
    console.log("Searching for:", query);
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}
