import { useState } from "react";
import { Button } from "@nextui-org/react";
import toast from "react-hot-toast";

const Form = ({ type, initialData, onSubmit }) => {
  const [data, setData] = useState(initialData || {});
  const [imageUrl, setImageUrl] = useState(null);
  const [imageError, setImageError] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // State for image preview
  const [isLoading, setIsLoading] = useState(false);

  // Image validation function (only allow .jpg and .webp)
  const validateImage = (file) => {
    const allowedTypes = ["image/jpeg", "image/webp"];
    if (file && !allowedTypes.includes(file.type)) {
      setImageError("Only .jpg and .webp image formats are allowed.");
      return false;
    }
    setImageError(null);
    return true;
  };

  const handleData = (key, value) => {
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && validateImage(file)) {
      setImageUrl(file);
      setImagePreview(URL.createObjectURL(file)); // Set preview URL
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (imageUrl && !validateImage(imageUrl)) return; // Check image validation

    setIsLoading(true);

    try {
      await onSubmit(data, imageUrl);

      toast.success(`${type} Created Successfully`);
      setData({});
      setImageUrl(null);
      setImagePreview(null); // Reset preview
    } catch (error) {
      toast.error(error.message);
    }
    setIsLoading(false);
  };

  const renderFields = () => (
    <div className="flex flex-col space-y-4">
          {type && <h1 className="text-lg font-semibold text-center">Create {type}</h1>}
      {["Accreditation", "Training"].includes(type) && (
        <>
     
          <div className="flex flex-col">
            <label className="text-gray-500 text-sm">Image</label>
            <input
              type="file"
              accept="image/jpeg, image/webp"
              onChange={handleImageChange}
              className="border px-3 py-1.5 rounded-md text-sm"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 max-w-full max-h-40 object-cover rounded-md"
              />
            )}
            {imageError && (
              <span className="text-red-500 text-sm">{imageError}</span>
            )}
          </div>
        </>
      )}

      <div className="flex flex-col">
        <label className="text-gray-500 text-sm">Title</label>
        <input
          type="text"
          value={data?.title || ""}
          onChange={(e) => handleData("title", e.target.value)}
          placeholder="Enter Title"
          className="border px-3 py-1.5 rounded-md text-sm"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-500 text-sm">Description</label>
        <textarea
          value={data?.description || ""}
          onChange={(e) => handleData("description", e.target.value)}
          placeholder="Enter Description"
          className="border px-3 py-1.5 rounded-md text-sm resize-none"
        />
      </div>

      {type === "Training" && (
        <div className="flex flex-col">
          <label className="text-gray-500 text-sm">Content</label>
          <textarea
            value={data?.content || ""}
            onChange={(e) => handleData("content", e.target.value)}
            placeholder="Enter Content"
            className="border px-3 py-1.5 rounded-md text-sm resize-none"
          />
        </div>
      )}

      {type === "Certificate" && (
        <>
      
          <div className="flex flex-col">
            <label className="text-gray-500 text-sm">Category</label>
            <input
              type="text"
              value={data?.category || ""}
              onChange={(e) => handleData("category", e.target.value)}
              placeholder="Enter Category"
              className="border px-3 py-1.5 rounded-md text-sm"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-500 text-sm">Content</label>
            <textarea
              value={data?.content || ""}
              onChange={(e) => handleData("content", e.target.value)}
              placeholder="Enter Content"
              className="border px-3 py-1.5 rounded-md text-sm resize-none"
            />
          </div>
        </>
      )}
    </div>
  );

  return (
    <form
      onSubmit={handleCreate}
      className="flex flex-col space-y-4 max-w-screen mx-auto px-4"
    >
      {renderFields()}
      <Button isLoading={isLoading} isDisabled={isLoading} type="submit">
        Create {type}
      </Button>
    </form>
  );
};

export default Form;
