"use client";

import Image from "next/image";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

// Mock Data
const mockData = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  country: `Country ${i + 1}`,
  accreditation: `Accreditation ${i + 1}`,
  email: `user${i + 1}@example.com`,
  organization: `Organization ${i + 1}`,
}));

// Reusable SearchBar Component
const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <input
    type="text"
    placeholder="Search..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className=" px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-[200px]"
  />
);

// Reusable SortFilter Component
const SortFilter = ({ sortBy, setSortBy }) => (
  <select
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
    className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="newest">Sort by Newest</option>
    <option value="oldest">Sort by Oldest</option>
  </select>
);

const Table = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 5;

  // Filtered and Sorted Data
  const filteredData = mockData
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.country.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => (sortBy === "newest" ? b.id - a.id : a.id - b.id));

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <div className="bg-white px-[30px] p-6 rounded-[20px] shadow-lg">
      {/* Header */}
      <div className="flex px-[30px] justify-between items-center mb-6">
        <div className="mb-[38px]">
          <h1 className="text-2xl mb-2 font-bold text-gray-800">All Clients</h1>
          <p className="text-dark_blue">Active Members</p>
        </div>
        <div className="flex space-x-4">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <SortFilter sortBy={sortBy} setSortBy={setSortBy} />
        </div>
      </div>

      {/* Table */}
      <div className="px-[30px]">
        <table className="w-full ">
          <thead>
            <tr className="bg-white text-start text-table_header text-[14px] font-semibold border-b w-full border-gray-300">
              <th className="text-left  py-[24px]">Name</th>
              <th className="text-left  py-[24px]">Country</th>
              <th className="text-left  py-[24px]">Accreditation</th>
              <th className="text-left  py-[24px]">Email</th>
              <th className="text-left  py-[24px]">Organization</th>
              <th className="text-center  py-[24px]">Actions</th>
            </tr>
          </thead>

          <tbody className="">
            {currentData.map((item) => (
              <tr
                key={item.id}
                className="border-b  font-medium text-[14px] text-table border-gray-200"
              >
                <td className=" py-[24px]">{item.name}</td>
                <td className=" py-[24px]">{item.country}</td>
                <td className=" py-[24px]">{item.accreditation}</td>
                <td className=" py-[24px]">{item.email}</td>
                <td className=" py-[24px]">{item.organization}</td>
                <td className="  py-[24px] text-center">
                  <button className="px-[12px] w-[140px] h-[33px] py-[4px] rounded-[10px] bg-dark_blue text-white  hover:bg-blue-800">
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 px-[30px] flex justify-end">
        <ReactPaginate
          previousLabel={
            <Image
            src="/SVG/left.svg"
            width={26}
            height={24}
            alt={`left Logo`}
            className=" object-contain"
          />
          }
          nextLabel={
            <Image
            src="/SVG/right.svg"
            width={26}
            height={24}
            alt={`right Logo`}
            className=" object-contain"
          />
          }
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName="flex text-[12px] gap-[30px]  items-center space-x-4"
          activeLinkClassName="!bg-[#023562] text-[12px] py-[2px]  !text-white" // Fixed active class application
          pageClassName=" w-[26px] text-[12px]   text-[12px]   h-[24px] border rounded-[3px] bg-[#F5F7FA] hover:bg-gray-200 transition"
          pageLinkClassName="block  py-[2px] w-full h-full text-center"
          previousClassName=" rounded-[3px] bg-[#F5F7FA] hover:bg-gray-200 transition"
          nextClassName=" rounded-[3px] bg-[#F5F7FA] hover:bg-gray-200 transition"
          breakClassName="w-[26px] h-[24px] text-gray-500"
          disabledClassName="opacity-50 cursor-not-allowed"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default Table;
