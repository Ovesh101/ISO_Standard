"use client";

import { useState } from "react";
import { Button } from "@nextui-org/react";
import toast from "react-hot-toast";

export default function Form() {
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleData = (key, value) => {
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleCreate = async () => {
    setIsLoading(true);
    try {
      // Image validation
      const validImageTypes = ["image/jpeg", "image/webp"];
      if (image && validImageTypes.includes(image.type)) {
        const formData = new FormData();
        formData.append("image", image); // Appending the image
        formData.append("title", data.title); // Appending title
        formData.append("description", data.description); // Appending description

        // Send POST request to create new accreditation
        const response = await fetch("/api/accreditations", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          toast.success("Accreditation Created Successfully");
          setData({ title: "", description: "" });
          setImage(null);
        } else {
          throw new Error("Error creating accreditation");
        }
      } else {
        throw new Error("Only .jpg and .webp images are allowed.");
      }
    } catch (error) {
      toast.error(error.message);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col gap-3 bg-white rounded-xl p-5 w-full md:w-[400px]">
      <h1 className="font-semibold">Create Accreditation</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate();
        }}
        className="flex flex-col gap-3"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="image" className="text-gray-500 text-sm">
            Image <span className="text-red-500">*</span>{" "}
          </label>
          {image && (
            <div className="flex justify-center items-center p-3">
              <img className="h-20" src={URL.createObjectURL(image)} alt="Preview" />
            </div>
          )}
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="border px-4 py-2 rounded-lg w-full"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="title" className="text-gray-500 text-sm">
            Title <span className="text-red-500">*</span>{" "}
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter Title"
            value={data.title}
            onChange={(e) => handleData("title", e.target.value)}
            className="border px-4 py-2 rounded-lg w-full focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="description" className="text-gray-500 text-sm">
            Description <span className="text-red-500">*</span>{" "}
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter Description"
            value={data.description}
            onChange={(e) => handleData("description", e.target.value)}
            className="border px-4 py-2 rounded-lg w-full focus:outline-none"
          />
        </div>

        <Button isLoading={isLoading} isDisabled={isLoading} type="submit">
          Create Accreditation
        </Button>
      </form>
    </div>
  );
}
