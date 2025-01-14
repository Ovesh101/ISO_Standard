"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import Image from "next/image";

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
      <div className="flex items-center flex-col w-full lg:w-[700px] space-y-6 lg:space-y-[34px] text-white text-center ">
        <h1 className="text-[36px] text-white leading-[42px] lg:text-[60px] lg:leading-[70px] font-bold">
          Search for a client
        </h1>

        <p className="text-[18px] text-white lg:text-[28px]">
          Enter the client name to search for their details and queries. We make
          it easy to manage all your client information in one place.
        </p>

        {/* Search Bar */}
        <div className="flex p-5 w-[300px] relative  md:w-[400px]  items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter client name..."
            className="flex-grow  px-4 py-2 rounded-l-md border-none"
          />
          <button onClick={handleSearch} className="absolute  bg-light_blue rounded-lg right-8 top-8">
            <Image src="/SVG/send.svg" alt="Send" width={18} height={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
