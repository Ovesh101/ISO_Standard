"use client";

import { useState } from "react";
import Form from "../../components/Form";
import ListView from "../../components/ListView";
import ModalEdit from "../../components/ModalEdit";
import { unstable_batchedUpdates } from "react-dom";

const TrainingCompo = ({all_Trainings}) => {
  const [training, setTraining] = useState(
    all_Trainings && 
    all_Trainings.length > 0
    ? all_Trainings
    : [
        {
          id: 1,
          title: "Training 3",
          description: "Description of Accreditation 3",
          content:"Hello world blog"
        },
      ]
  );
  const [isDeleting, setIsDeleting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [type, setType] = useState("Training");

  const handleCreateTraining = async (data, imageUrl) => {
    try {
      // Make the API POST request
      const responseData = await fetch(`${URL}/training`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send data to the API
      });

      const response = await responseData.json();

      // Parse the response from the API

      console.log("response data in training", response);

      // Check if the response is successful
      if (response.data) {
        // Just append the data to the state without relying on API response
        setTraining((prev) => [
          ...prev,
          { ...response.data }, // Append the data with a new id
        ]);
      } else {
        console.error("Error creating training:", responseData);
      }
    } catch (error) {
      console.error("Error making API request:", error);
    }
  };

  const handleEditTraining = async (id) => {
    // Simulate API call to fetch training data by ID
    try {
      // Make the API call to fetch training data by id
      const response = await fetch(`${URL}/training/${id}`);

      if (!response.ok) {
        throw new Error(`Error fetching training with id ${id}`);
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
          setType("Training");
        });
      }
    } catch (error) {
      console.error("Error editing training:", error);
    }
  };

  const handleDeleteTraining = async (id) => {
    try {
      // Step 1: Ask for confirmation before proceeding with deletion
      const isConfirmed = window.confirm(
        "Are you sure you want to delete this training?"
      );

      if (!isConfirmed) {
        alert("Deletion canceled.");
        return; // Stop further execution if the user cancels
      }

      // Step 2: Make API request to delete the certificate if confirmed
      const response = await fetch(`${URL}/training/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Error deleting training with id ${id}`);
      }

      // Step 4: Filter out the deleted certificate from the state
      setTraining((prev) => prev.filter((acc) => acc._id !== id));
    } catch (error) {
      console.error("Error deleting training:", error);
      alert("There was an error deleting the training.");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleModalSubmit = async (updatedData) => {

    // Handke the image using Uplaod things 
    // Handle the new image URL
    try {
      // Make the API PUT request
      const responseData = await fetch(
        `${URL}/training/${updatedData._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData), // Send data to the API
        }
      );

      const response = await responseData.json();

      console.log("updated data in training", response);

      // Check if the response is successful
      if (response.data) {
        setTraining((prev) =>
          prev.map((item) =>
            item._id === response.data._id // Make sure you are matching _id here
              ? { ...item, ...response.data } // Update the item with updated data
              : item
          )
        );
      } else {
        console.error("Error updating training:", response);
      }
    } catch (error) {
      console.error("Error making API request:", error);
    } finally {
      setModalOpen(false); // Close the modal
    }
  };

  return (
    <>
      <div className="md:flex md:flex-row flex-col  justify-around">
        <Form
          type="Training"
          onSubmit={handleCreateTraining}
          initialData={{
            title: "",
            description: "",
            imageUrl: "",
            content: "",
          }}
        />

        <ListView
          type="Training"
          items={training}
          handleEdit={handleEditTraining}
          handleDelete={handleDeleteTraining}
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

export default TrainingCompo;
