"use client";
import { useState } from "react";

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Güncellenen Arama Terimi: ", e.target.value);
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      console.log("Arama Terimi Gönderildi: ", query);
      window.location.href = `/search?query=${encodeURIComponent(query)}`;
    } else {
      console.log("Lütfen bir arama terimi giriniz.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center relative w-full sm:w-full md:w-72 ml-0 mr-6"
    >
      <input
        className="form-control py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full sm:w-full md:w-auto"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={query}
        onChange={handleInputChange}
        style={{
          zIndex: 10,
          position: "relative",
        }}
      />
    </form>
  );
};

export default Search;
