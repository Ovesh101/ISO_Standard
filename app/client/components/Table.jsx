"use client";

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
    className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-[200px]"
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
    <div className="bg-white p-6 rounded-[20px] shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">All Clients</h1>
          <p className="text-dark_blue">Active Members</p>
        </div>
        <div className="flex space-x-4">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <SortFilter sortBy={sortBy} setSortBy={setSortBy} />
        </div>
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-white text-start border-b border-gray-300">
            <th className="text-left px-4 py-2">Name</th>
            <th className="text-left px-4 py-2">Country</th>
            <th className="text-left px-4 py-2">Accreditation</th>
            <th className="text-left px-4 py-2">Email</th>
            <th className="text-left px-4 py-2">Organization</th>
            <th className="text-left px-4 py-2">Actions</th>
          </tr>
         
        </thead>
    
        <tbody>
          {currentData.map((item) => (
            <tr key={item.id} className="border-b border-gray-200">
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.country}</td>
              <td className="px-4 py-2">{item.accreditation}</td>
              <td className="px-4 py-2">{item.email}</td>
              <td className="px-4 py-2">{item.organization}</td>
              <td className="px-4 py-2 text-center">
                <button className="px-4 py-2 bg-dark_blue text-white rounded-md hover:bg-blue-800">
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4 flex justify-end">
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName="flex items-center space-x-2"
          activeClassName="bg-blue-500 text-white rounded-md px-3 py-1"
          pageClassName="px-3 py-1 border rounded-md"
          previousClassName="px-3 py-1 border rounded-md"
          nextClassName="px-3 py-1 border rounded-md"
          breakClassName="px-3 py-1"
        />
      </div>
    </div>
  );
};

export default Table;
