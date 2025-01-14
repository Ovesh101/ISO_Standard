"use client";

import { useEffect, useState } from "react";

const ModalEdit = ({ isOpen, onClose, type, item, onSubmit }) => {
  const [formData, setFormData] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const [imageError, setImageError] = useState("");

  useEffect(() => {
    if (item) {
      setFormData({ ...item });
      setImagePreview(item.imageUrl);
    }
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/webp")) {
      setImagePreview(URL.createObjectURL(file));
      setImageError("");
      setFormData((prev) => ({ ...prev, imageUrl: file }));
    } else {
      setImageError("Only .jpg and .webp formats are allowed.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageError) {
      await onSubmit(formData);
      onClose();
    }
  };

  const renderFields = () => {
    if (type === "Accreditation" || type === "Training") {
      return (
        <>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title || ""}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Description:</label>
            <textarea
              name="description"
              value={formData.description || ""}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {type === "Training" && (
            <div className="mb-4">
              <label className="block mb-2 font-medium">Content:</label>
              <textarea
                name="content"
                value={formData.content || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Image:</label>
            <input
              type="file"
              name="imageUrl"
              accept=".jpg, .webp"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-3 w-[100px] h-auto  rounded-lg"
              />
            )}
            {imageError && (
              <p className="text-red-500 text-sm mt-1">{imageError}</p>
            )}
          </div>
        </>
      );
    } else if (type === "Certificate") {
      return (
        <>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title || ""}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Description:</label>
            <textarea
              name="description"
              value={formData.description || ""}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Category:</label>
            <textarea
              name="category"
              value={formData.category || ""}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Content:</label>
            <textarea
              name="content"
              value={formData.content || ""}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </>
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed overflow-y-auto inset-0 bg-black bg-opacity-30 flex items-center justify-center z-30 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 max-h-[80vh] overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4 text-center">Edit {type}</h2>
        <form onSubmit={handleSubmit}>
          {renderFields()}
          <div className="flex justify-end mt-4 space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100"
            >
              Close
            </button>
            <button
              type="submit"
              disabled={!!imageError}
              className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ${
                imageError ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEdit;
