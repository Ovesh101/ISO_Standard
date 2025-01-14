"use client";

import { useState } from "react";
import Form from "../../components/Form";
import ListView from "../../components/ListView";
import ModalEdit from "../../components/ModalEdit";

const TrainingCompo = () => {
  const [training, setTraining] = useState([
    { id: 1, title: "Training 1", description: "Description of Accreditation 1", imageUrl: "image1.jpg" , content:"hello 1" },
    { id: 2, title: "Training 2", description: "Description of Accreditation 2", imageUrl: "image2.webp" , content:"hello 2" },
    { id: 3, title: "Training 3", description: "Description of Accreditation 3", imageUrl: "image3.jpg" , content:"hello 3" },
  ]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [type, setType] = useState("Training");


  const handleCreateTraining = (data, imageUrl) => {
    const newImageUrl = imageUrl instanceof File ? URL.createObjectURL(imageUrl) : imageUrl;
  
    setTraining((prev) => [
      ...prev,
      { ...data, id: Date.now(), imageUrl: newImageUrl }, // Use the URL or existing string
    ]);
  };

  const handleEditTraining = (id) => {
    // Simulate API call to fetch accreditation data by ID

    
    setTimeout(() => {
      const item = training.find((acc) => acc.id === id);
      if (item) {
        setCurrentItem(item);
        setModalOpen(true);
        setType("Training");
      }
    }, 500); // Simulate async call
  };

  const handleDeleteTraining = (id) => {
    setIsDeleting(true);
    setTraining((prev) => prev.filter((acc) => acc.id !== id));
    setIsDeleting(false);
  };

  const handleModalSubmit = (updatedData) => {
    // Handle the new image URL
    const newImageUrl = updatedData.imageUrl instanceof File 
      ? URL.createObjectURL(updatedData.imageUrl) 
      : updatedData.imageUrl;
  
    console.log("updated data", updatedData);
  
    // Update the accreditations state
    setTraining((prev) =>
      prev.map((item) =>
        item.id === updatedData.id 
          ? { ...item, ...updatedData, imageUrl: newImageUrl } 
          : item
      )
    );
  
    // Close the modal
    setModalOpen(false);
  };
  

  return (
    <>
<div className="md:flex md:flex-row flex-col  justify-around" >

      <Form
        type="Training"
        onSubmit={handleCreateTraining}
        initialData={{ title: "", description: "", imageUrl: "", content:"" }}
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
