"use client";

import React from "react";

const ClientInfoModal = ({ isOpen, onClose, clientData }) => {
  if (!isOpen) return null; // Do not render modal if it's not open

  if (clientData.certification === clientData.id) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white max-w-lg w-full rounded-lg shadow-lg p-6 mx-auto mt-20">
          <h2 className="text-xl font-semibold text-title mb-4">
            Client Information
          </h2>
          <div className="space-y-2 text-sm text-table">
            <p>
              <strong>Name:</strong> {clientData?.name || "N/A"}
            </p>
            <p>
              <strong>Status:</strong> {clientData?.status || "N/A"}
            </p>
            <p>
              <strong>Certification No.:</strong>{" "}
              {clientData?.certificationNo || "N/A"}
            </p>
            <p>
              <strong>Issue Date:</strong> {clientData?.issueDate || "N/A"}
            </p>
            <p>
              <strong>Expiry Date:</strong> {clientData?.expiryDate || "N/A"}
            </p>
            <p>
              <strong>Scope:</strong> {clientData?.scope || "N/A"}
            </p>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-dark_blue text-white rounded-lg hover:bg-blue-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white max-w-lg w-full rounded-lg shadow-lg p-6 mx-auto mt-20">
          <h2 className="text-xl font-semibold text-title mb-4">
            Client Information
          </h2>
          <div className="space-y-2 text-sm text-table">
            <p>No Certification with ID Exist</p>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-dark_blue text-white rounded-lg hover:bg-blue-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default ClientInfoModal;
