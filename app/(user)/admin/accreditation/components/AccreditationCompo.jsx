"use client";

import { useState } from "react";
import Form from "../../components/Form";
import ListView from "../../components/ListView";
import ModalEdit from "../../components/ModalEdit";

const AccreditationCompo = () => {
  const [accreditations, setAccreditations] = useState([
    {
      id: 1,
      title: "Accreditation 1",
      description: "Description of Accreditation 1",
      imageUrl: "image1.jpg",
    },
    {
      id: 2,
      title: "Accreditation 2",
      description: "Description of Accreditation 2",
      imageUrl: "image2.webp",
    },
    {
      id: 3,
      title: "Accreditation 3",
      description: "Description of Accreditation 3",
      imageUrl: "image3.jpg",
    },
  ]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [type, setType] = useState("Accreditation");

  const handleCreateAccreditation = (data, imageUrl) => {
    const newImageUrl =
      imageUrl instanceof File ? URL.createObjectURL(imageUrl) : imageUrl;

    setAccreditations((prev) => [
      ...prev,
      { ...data, id: Date.now(), imageUrl: newImageUrl }, // Use the URL or existing string
    ]);
  };

  const handleEditAccreditation = (id) => {
    // Simulate API call to fetch accreditation data by ID

    setTimeout(() => {
      const item = accreditations.find((acc) => acc.id === id);
      if (item) {
        setCurrentItem(item);
        setModalOpen(true);
        setType("Accreditation");
      }
    }, 500); // Simulate async call
  };

  const handleDeleteAccreditation = (id) => {
    setIsDeleting(true);
    setAccreditations((prev) => prev.filter((acc) => acc.id !== id));
    setIsDeleting(false);
  };

  const handleModalSubmit = (updatedData) => {
    // Handle the new image URL
    const newImageUrl =
      updatedData.imageUrl instanceof File
        ? URL.createObjectURL(updatedData.imageUrl)
        : updatedData.imageUrl;

    console.log("updated data", updatedData);

    // Update the accreditations state
    setAccreditations((prev) =>
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

      <div className="md:flex md:flex-row flex-col  justify-around " >
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
