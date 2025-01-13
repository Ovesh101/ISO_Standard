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
      className=" min-h-[80vh] mt-2 rounded-[15px]  flex flex-col items-center justify-center p-6"
      style={{
        background: "radial-gradient(circle, #046CC8 22%, #023562 100%)",
      }}
    >
      {/* Title */}
      <div className="flex items-center flex-col w-full lg:w-[700px] space-y-6 lg:space-y-[34px] text-white text-center " >

  
      <h1 className="text-[36px] text-white leading-[42px] lg:text-[60px] lg:leading-[70px] font-bold">
       Search for a client
      </h1>

      <p className="text-[18px] text-white lg:text-[28px]">
        Enter the client name to search for their details and queries. We make
        it easy to manage all your client information in one place.
      </p>
     

      {/* Search Bar */}
      <div className="flex   md:w-[70%]  items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter client name..."
          className="flex-grow px-4 py-2 rounded-l-md border-none"
        />
        <button
          onClick={handleSearch}
          className="bg-light_blue text-dark_blue  px-6 py-2 rounded-r-md hover:bg-dark_blue hover:text-light_blue "
        >
          Search
        </button>
      </div>
      </div>
    </div>
  );
};

export default Search;
