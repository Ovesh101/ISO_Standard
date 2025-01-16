"use client";

import { useState } from "react";
import Form from "../../components/Form";
import ListView from "../../components/ListView";
import ModalEdit from "../../components/ModalEdit";
import { URL } from "@/app/utils/contant";
import { unstable_batchedUpdates } from "react-dom";

const AccreditationCompo = ({ all_Accreditations }) => {
  const [accreditations, setAccreditations] = useState(
    all_Accreditations && all_Accreditations.length > 0
      ? all_Accreditations
      : [
          {
            id: 1,
            title: "Training 3",
            description: "Description of Accreditation 3",
            imageUrl: "image3.jpg",
          },
        ]
  );

  const [isDeleting, setIsDeleting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [type, setType] = useState("Accreditation");

  const handleCreateAccreditation = async (data, imageFile) => {
    console.log("image file", imageFile);

    try {
      // Make the API POST request
      const responseData = await fetch(`${URL}/accredation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send data to the API
      });

      const response = await responseData.json();

      // Parse the response from the API

      console.log("response data in certificate", response);

      // Check if the response is successful
      if (response.data) {
        // Just append the data to the state without relying on API response
        setCertificate((prev) => [
          ...prev,
          { ...response.data }, // Append the data with a new id
        ]);
      } else {
        console.error("Error creating certificate:", responseData);
      }
    } catch (error) {
      console.error("Error making API request:", error);
    }
  };

  // Function to upload image and get URL from UploadThing (or any other service)

  const handleEditAccreditation = async (id) => {
    try {
      // Make the API call to fetch certificate data by id
      const response = await fetch(`${URL}/accredation/${id}`);

      if (!response.ok) {
        throw new Error(`Error fetching accredation with id ${id}`);
      }

      // Parse the response data
      const data = await response.json();

      console.log("get the data by id", data);

      // Check if the item exists in the response and set the data
      if (data) {
        // Manually batch the state updates
        unstable_batchedUpdates(() => {
          setCurrentItem(data);
          setModalOpen(true);
          setType("Accreditation");
        });
      }
    } catch (error) {
      console.error("Error editing Accreditation:", error);
    }
  };

  const handleDeleteAccreditation = async (id) => {
    try {
      // Step 1: Ask for confirmation before proceeding with deletion
      const isConfirmed = window.confirm(
        "Are you sure you want to delete this Accrediation?"
      );

      if (!isConfirmed) {
        alert("Deletion canceled.");
        return; // Stop further execution if the user cancels
      }

      // Step 2: Make API request to delete the certificate if confirmed
      const response = await fetch(`${URL}/accredation/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Error deleting accredation with id ${id}`);
      }

      // Step 4: Filter out the deleted certificate from the state
      setAccreditations((prev) => prev.filter((acc) => acc._id !== id));
    } catch (error) {
      console.error("Error deleting certificate:", error);
      alert("There was an error deleting the certificate.");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleModalSubmit = async (updatedData) => {
    console.log("updated data in accrediaiton", updatedData);

    try {
      // Make the API PUT request
      const responseData = await fetch(
        `${URL}/accredation/${updatedData._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData), // Send data to the API
        }
      );

      const response = await responseData.json();

      console.log("updated data in accredation", response);

      // Check if the response is successful
      if (response.data) {
        setAccreditations((prev) =>
          prev.map((item) =>
            item._id === response.data._id // Make sure you are matching _id here
              ? { ...item, ...response.data } // Update the item with updated data
              : item
          )
        );
      } else {
        console.error("Error updating accredation:", response);
      }
    } catch (error) {
      console.error("Error making API request:", error);
    } finally {
      setModalOpen(false); // Close the modal
    }
  };

  return (
    <>
      <div className="md:flex md:flex-row flex-col  justify-around ">
        <Form
          type="Accreditation"
          onSubmit={handleCreateAccreditation}
          initialData={{ title: "", description: "", imageUrl: "" }}
        />

        <ListView
          type="Accreditation"
          items={accreditations}
          handleEdit={handleEditAccreditation}
          handleDelete={handleDeleteAccreditation}
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

export default AccreditationCompo;
