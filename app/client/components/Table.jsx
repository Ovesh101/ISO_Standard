"use client";

import Image from "next/image";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

// Mock Data
const mockData = Array.from({ length: 100 }, (_, i) => ({
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
    className="px-4 py-2 text-[12px] bg-[#F5F7FA] rounded-[3px] shadow-sm focus:outline-none w-full sm:w-[380px] h-[38px]"
  />
);

// Reusable SortFilter Component
const SortFilter = ({ sortBy, setSortBy }) => (
  <select
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
    className="px-4 text-[12px] py-2 bg-[#F5F7FA] rounded-[3px] shadow-sm focus:outline-none w-full sm:w-[271px] h-[38px]"
  >
    <option value="newest">Sort by: Newest</option>
    <option value="oldest">Sort by: Oldest</option>
  </select>
);

const Table = ({ clientName }) => {
  const [searchTerm, setSearchTerm] = useState(clientName);
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 5;

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
    <div className="bg-white p-6 rounded-[20px] shadow-lg">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 px-4 sm:px-[30px] mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            All Clients
          </h1>
          <p className="text-dark_blue text-sm sm:text-base">Active Members</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <SortFilter sortBy={sortBy} setSortBy={setSortBy} />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="bg-white text-start text-table_header text-[12px] sm:text-[14px] font-semibold border-b w-full border-gray-300">
              <th className="text-left px-[12px] sm:px-[24px] py-[12px] sm:py-[24px]">
                Name
              </th>
              <th className="text-left px-[12px] sm:px-[24px] py-[12px] sm:py-[24px]">
                Country
              </th>
              <th className="text-left px-[12px] sm:px-[24px] py-[12px] sm:py-[24px]">
                Accreditation
              </th>
              <th className="text-left px-[12px] sm:px-[24px] py-[12px] sm:py-[24px]">
                Email
              </th>
              <th className="text-left px-[12px] sm:px-[24px] py-[12px] sm:py-[24px]">
                Organization
              </th>
              <th className="text-center px-[12px] sm:px-[24px] py-[12px] sm:py-[24px]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item) => (
              <tr
                key={item.id}
                className="border-b font-medium text-[12px] sm:text-[14px] text-table border-gray-200"
              >
                <td className="px-[12px] sm:px-[24px] py-[12px] sm:py-[24px]">
                  {item.name}
                </td>
                <td className="px-[12px] sm:px-[24px] py-[12px] sm:py-[24px]">
                  {item.country}
                </td>
                <td className="px-[12px] sm:px-[24px] py-[12px] sm:py-[24px]">
                  {item.accreditation}
                </td>
                <td className="px-[12px] sm:px-[24px] py-[12px] sm:py-[24px]">
                  {item.email}
                </td>
                <td className="px-[12px] sm:px-[24px] py-[12px] sm:py-[24px]">
                  {item.organization}
                </td>
                <td className="px-[12px] sm:px-[24px] py-[12px] sm:py-[24px] text-center">
                  <button className="px-4 w-full sm:w-[140px] py-1 rounded-lg bg-dark_blue text-white hover:bg-blue-800">
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 md:px-[30px] flex justify-end">
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
          containerClassName="flex text-[12px]  md:gap-[30px]  items-center space-x-4"
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
