"use client";

import { useState } from "react";

import { Edit2, Trash2 } from "lucide-react";

export default function ListView() {
  const [accreditations, setAccreditations] = useState([
    {
      id: 1,
      title: "Accreditation 1",
      imageUrl: "https://via.placeholder.com/150",
      description: "Description for Accreditation 1",
    },
    {
      id: 2,
      title: "Accreditation 2",
      imageUrl: "https://via.placeholder.com/150",
      description: "Description for Accreditation 2",
    },
  ]);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = (id) => {
    if (!confirm("Are you sure you want to delete this accreditation?")) return;
    setIsDeleting(true);
    console.log(`Deleting accreditation with ID: ${id}`);
    setIsDeleting(false);
  };

  const handleEdit = (id) => {
    console.log(`Editing accreditation with ID: ${id}`);
  };

  return (
    <div className="flex-1 flex flex-col gap-3 rounded-xl">
      <h1 className="text-xl">Accreditations</h1>
      <table className="border-separate border-spacing-y-3 w-full">
        <thead>
          <tr>
            <th className="font-semibold border-y bg-white px-3 py-2 border-l rounded-l-lg">
              SN
            </th>
            <th className="font-semibold border-y bg-white px-3 py-2">Image</th>
            <th className="font-semibold border-y bg-white px-3 py-2 text-left">
              Title
            </th>
            <th className="font-semibold border-y bg-white px-3 py-2 text-left">
              Description
            </th>
            <th className="font-semibold border-y bg-white px-3 py-2 border-r rounded-r-lg text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {accreditations.map((item, index) => (
            <Row
              key={item.id}
              index={index}
              item={item}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              isDeleting={isDeleting}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Row({ item, index, handleEdit, handleDelete, isDeleting }) {
  return (
    <tr>
      <td className="border-y bg-white px-3 py-2 border-l rounded-l-lg text-center">
        {index + 1}
      </td>
      {/* <td className="border-y bg-white px-3 py-2 text-center">
          <img className="h-7 object-cover" src={item.imageUrl} alt="accreditation" />
        </td> */}
      <td className="border-y bg-white px-3 py-2">{item.title}</td>
      <td className="border-y bg-white px-3 py-2">{item.description}</td>
      <td className="border-y bg-white px-3 py-2 border-r rounded-r-lg text-center">
        <div className="flex gap-2 items-center">
          <button
            onClick={() => handleEdit(item.id)}
            disabled={isDeleting}
            className="p-1 text-blue-500 hover:text-blue-700"
          >
            <Edit2 size={13} />
          </button>
          <button
            onClick={() => handleDelete(item.id)}
            disabled={isDeleting}
            className={`p-1 text-red-500 hover:text-red-700 ${
              isDeleting ? "opacity-50" : ""
            }`}
          >
            <Trash2 size={13} />
          </button>
        </div>
      </td>
    </tr>
  );
}
