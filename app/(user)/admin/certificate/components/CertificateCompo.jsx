"use client";

import { useState } from "react";
import Form from "../../components/Form";
import ListView from "../../components/ListView";
import ModalEdit from "../../components/ModalEdit";
import { URL } from "@/app/utils/contant";
import { unstable_batchedUpdates } from "react-dom";

const CertificateCompo = ({ all_Certificate }) => {

  console.log("all certifacte data" , all_Certificate);
  
  const [certificate, setCertificate] = useState(
    all_Certificate && all_Certificate.length > 0
      ? all_Certificate
      : [
          {
            id: 1,
            title: "Training 3",
            description: "Description of Accreditation 3",
          },
        ]
  );
  const [isDeleting, setIsDeleting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [type, setType] = useState("Certificate");

  const handleCreateCertificate = async (data) => {
    console.log("logged the data in certificate", data);

    try {
      // Make the API POST request
      const responseData = await fetch(`${URL}/certificate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send data to the API
      });

      // Parse the response from the API

      console.log("response data in certificate", responseData);

      // Check if the response is successful
      if (responseData.ok) {
        // Just append the data to the state without relying on API response
        setCertificate((prev) => [
          ...prev,
          { ...responseData.data }, // Append the data with a new id
        ]);
      } else {
      
        console.error("Error creating certificate:", responseData);
      }
    } catch (error) {
   
      console.error("Error making API request:", error);
    }
  };

  const handleEditCertificate = async (id) => {
    try {
      // Make the API call to fetch certificate data by id
      const response = await fetch(`${URL}/certificate/${id}`);
  
      if (!response.ok) {
        throw new Error(`Error fetching certificate with id ${id}`);
      }
  
      // Parse the response data
      const data = await response.json();

      console.log("get the data by id" , data);
      
  
      // Check if the item exists in the response and set the data
      if (data) {
        // Manually batch the state updates
        unstable_batchedUpdates(() => {
          setCurrentItem(data);
          setModalOpen(true);
          setType("Certificate");
        });
      }
    } catch (error) {
      console.error("Error editing certificate:", error);
    }
  };
  

  const handleDeleteCertificate = (id) => {
    setIsDeleting(true);
    setCertificate((prev) => prev.filter((acc) => acc.id !== id));
    setIsDeleting(false);
  };

  const handleModalSubmit = (updatedData) => {
    console.log("updated data", updatedData);

    // Update the accreditations state
    setCertificate((prev) =>
      prev.map((item) =>
        item.id === updatedData.id ? { ...item, ...updatedData } : item
      )
    );

    // Close the modal
    setModalOpen(false);
  };

  return (
    <>
      <div className="md:flex md:flex-row flex-col  justify-around">
        <Form
          type="Certificate"
          onSubmit={handleCreateCertificate}
          initialData={{
            title: "",
            description: "",
            category: "",
            content: "",
          }}
        />

        <ListView
          type="Certificate"
          items={certificate}
          handleEdit={handleEditCertificate}
          handleDelete={handleDeleteCertificate}
          isDeleting={isDeleting}
        />
      </div>
      <ModalEdit
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={type}
        item={currentItem}
        onSubmit={handleModalSubmit}
      />
    </>
  );
};

export default CertificateCompo;
