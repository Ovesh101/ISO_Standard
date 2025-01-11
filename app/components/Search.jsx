"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation

const Search = () => {
  const [query, setQuery] = useState("");
  const router = useRouter(); // Initialize the router

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/client?name=${query}`); // Navigate to the /client page with the query parameter
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        background: "radial-gradient(circle, #046CC8 22%, #023562 100%)",
      }}
    >
      {/* Title */}
      <h1 className="text-4xl font-bold text-white mb-4">
        Search for Clients
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-300 mb-8 text-center max-w-lg">
        Enter the client name to search for their details and queries. We make it easy to manage all your client information in one place.
      </p>

      {/* Search Bar */}
      <div className="flex w-full max-w-lg items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter client name..."
          className="flex-grow px-4 py-2 rounded-l-md border-none"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
