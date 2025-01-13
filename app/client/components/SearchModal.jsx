"use client";

import React, { useState } from "react";

const SearchModal = ({ isOpen, onClose, onSearch }) => {
  const [certificationId, setCertificationId] = useState("");

  if (!isOpen) return null; // Do not render modal if it's not open

  const handleSearch = () => {
    if (certificationId.trim()) {
      onSearch(parseInt(certificationId));
      setCertificationId("");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white max-w-md w-full rounded-lg shadow-lg p-6 mx-auto mt-20">
        <h2 className="text-xl font-semibold text-title mb-4">Search Certification</h2>
        <input
          type="text"
          placeholder="Enter Certification ID"
          value={certificationId}
          onChange={(e) => setCertificationId(e.target.value)}
          className="w-full px-4 py-2 border rounded-md bg-light_gray focus:outline-none"
        />
        <div className="mt-4 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-custom_grey text-white rounded-lg hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-dark_blue text-white rounded-lg hover:bg-blue-800"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
