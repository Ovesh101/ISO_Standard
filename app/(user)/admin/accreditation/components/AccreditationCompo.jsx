"use client";

import { useState } from "react";
import Form from "../../components/Form";
import ListView from "../../components/ListView";
import ModalEdit from "../../components/ModalEdit";
import { URL } from "@/app/utils/contant";



const AccreditationCompo = ({ all_Accreditations }) => {
  const [accreditations, setAccreditations] = useState(
    all_Accreditations && all_Accreditations.length > 0
      ? all_Accreditations
      : [
          {
            id: 1,
            title: "Training 3",
            description: "Description of Accreditation 3",
            imageUrl: "image3.jpg"
          }
        ]
  );

  
  
  
  const [isDeleting, setIsDeleting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [type, setType] = useState("Accreditation");

  const handleCreateAccreditation = async (data, imageFile) => {

    console.log("data and image" , data , imageFile);
    
    let newImageUrl = '';
  
    // Check if the imageFile is an actual File object (for image upload)
    if (imageFile instanceof File) {
      try {
        // Upload the image and get the URL
        newImageUrl = await uploadImageToUploadThing(imageFile);
      } catch (error) {
        console.error('Image upload failed:', error);
        return; // Exit the function if upload fails
      }
    } else {
      // If the imageFile is already a URL, just use it
      newImageUrl = imageFile;
    }
  
    // Create the new accreditation object with the image URL
    const newAccreditation = { ...data,  imageUrl: newImageUrl };
  
    // Add the new accreditation to the state (using the setAccreditations function)
    setAccreditations((prev) => [
      ...prev,
      newAccreditation,
    ]);
  };
  
  // Function to upload image and get URL from UploadThing (or any other service)
  const uploadImageToUploadThing = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      const response = await fetch('https://uploadthing.com/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': 'Bearer sk_live_8aaeb1dca35840ca2a29d48af852057af3b73a114b94fb71b94ce58e7d8f95a6', // Replace with your actual API key if needed
        },
      });
  
      const data = await response.json();
      if (response.ok) {
        return data.url; // Return the uploaded image URL
      } else {
        throw new Error(data.message || 'Failed to upload image');
      }
    } catch (error) {
      throw error;
    }
  };
  

  const handleEditAccreditation = async (id) => {
    try {
      // Make the API call to fetch the accreditation by ID
      const response = await fetch(`${URL}/accredation/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // You can include any authorization headers if needed
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch accreditation data');
      }
  
      const data = await response.json(); // Assuming your API returns the data in JSON format
  
      if (data) {
        // Update state with the fetched accreditation data
        setCurrentItem(data);
        setModalOpen(true);
        setType('Accreditation');
      } else {
        console.error('No accreditation found with the given ID');
      }
    } catch (error) {
      console.error('Error fetching accreditation data:', error);
    }
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
