"use client";
import { useState } from "react";

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Arama Terimi: ", query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center relative w-full sm:w-auto md:w-auto ml-auto mr-6"
    >
      <input
        className="form-control py-2 px-4 rounded-lg focus:outline-none w-full sm:w-56 md:w-auto"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={query}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default Search;
