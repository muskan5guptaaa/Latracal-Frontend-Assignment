import React from "react";

export default function SearchFilterBar({ query, setQuery }) {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full p-2 border rounded shadow"
      placeholder="Search books..."
    />
  );
}
