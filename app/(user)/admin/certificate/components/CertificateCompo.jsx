"use client";

import { useState } from "react";
import Form from "../../components/Form";
import ListView from "../../components/ListView";
import ModalEdit from "../../components/ModalEdit";

const CertificateCompo = () => {
  const [certificate, setCertificate] = useState([
    { id: 1, title: "Certificate 1", description: "Description of Accreditation 1" , category:"kind" , content:"hello" },
    { id: 2, title: "Certificate 2", description: "Description of Accreditation 2" , category:"kind" , content:"hello" },
    { id: 3, title: "Certificate 3", description: "Description of Accreditation 3" , category:"kind" , content:"hello" },
  ]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [type, setType] = useState("Certificate");


  const handleCreateCertificate = (data) => {
  
  
    setCertificate((prev) => [
      ...prev,
      { ...data, id: Date.now() }, // Use the URL or existing string
    ]);
  };

  const handleEditCertificate = (id) => {
    // Simulate API call to fetch accreditation data by ID

    
    setTimeout(() => {
      const item = certificate.find((acc) => acc.id === id);
      if (item) {
        setCurrentItem(item);
        setModalOpen(true);
        setType("Certificate");
      }
    }, 500); // Simulate async call
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
        item.id === updatedData.id 
          ? { ...item, ...updatedData } 
          : item
      )
    );
  
    // Close the modal
    setModalOpen(false);
  };
  

  return (
    <div>
      <h1>Create Certificate</h1>
      <Form
        type="Certificate"
        onSubmit={handleCreateCertificate}
        initialData={{ title: "", description: "" , category:"" , content:"" }}
      />
      <h2>Accreditations List</h2>
      <ListView
        type="Certificate"
        items={certificate}
        handleEdit={handleEditCertificate}
        handleDelete={handleDeleteCertificate}
        isDeleting={isDeleting}
      />
      <ModalEdit
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={type}
        item={currentItem}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
};

export default CertificateCompo;
