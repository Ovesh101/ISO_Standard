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
        boxShadow: "0px 0px 38px #CFDAF9",
      }}
    >
      {/* Title */}
      <div className="flex items-center flex-col w-full lg:w-[700px] space-y-6 lg:space-y-[34px] text-white text-center ">
        <h1 className="text-[30px] md:text-[42px] md:font-[500] font-[400]  ">
          Search for a client
        </h1>

        <p className="text-[14px] md:text-[16px] mt-[18px]  md:mt-[24px] leading-normal">
          Enter the client name to search for their details and queries. We make
          it easy to manage all your client information in one place.
        </p>

        {/* Search Bar */}
        <div className="flex text-black p-4 mt-[64px] w-[300px] relative  md:w-full  items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter client name..."
            className="flex-grow focus:outline-none rounded-[4px]  px-4 py-2  border-none"
          />
          <button
            onClick={handleSearch}
            className="absolute right-8 top-[26px] transform   rotate-[40deg]"
          >
            <Image src="/SVG/send.svg" alt="Send" width={18} height={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
