const ListView = ({ items, handleEdit, handleDelete, isDeleting, type }) => {
    const renderColumns = (item) => {
      if (type === "Accreditation") {
        return (
          <>
            <td className="px-4 py-2 text-gray-700">{item.title}</td>
            <td className="px-4 py-2 text-gray-700">{item.description}</td>
          </>
        );
      }
  
      if (type === "Certificate") {
        return (
          <>
            <td className="px-4 py-2 text-gray-700">{item.title}</td>
            <td className="px-4 py-2 text-gray-700">{item.category}</td>
            <td className="px-4 py-2 text-gray-700">{item.content}</td>
          </>
        );
      }
  
      if (type === "Training") {
        return (
          <>
            <td className="px-4 py-2 text-gray-700">{item.title}</td>
            <td className="px-4 py-2 text-gray-700">{item.description}</td>
            <td className="px-4 py-2 text-gray-700">{item.content}</td>
          </>
        );
      }
    };
  
    return (
      <div className="overflow-x-auto pt-10 ">
        <h1 className="my-5" >{type} List </h1>
        <table className=" border-collapse border  border-gray-200 bg-white shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left text-gray-600">Index</th>
              {type === "Accreditation" && <th className="px-4 py-2 text-left text-gray-600">Title</th>}
              {type === "Certificate" && <th className="px-4 py-2 text-left text-gray-600">Title</th>}
              {type === "Training" && <th className="px-4 py-2 text-left text-gray-600">Title</th>}
              {type === "Accreditation" && <th className="px-4 py-2 text-left text-gray-600">Description</th>}
              {type === "Certificate" && <th className="px-4 py-2 text-left text-gray-600">Category</th>}
              {type === "Certificate" && <th className="px-4 py-2 text-left text-gray-600">Content</th>}
              {type === "Training" && <th className="px-4 py-2 text-left text-gray-600">Description</th>}
              {type === "Training" && <th className="px-4 py-2 text-left text-gray-600">Content</th>}
              <th className="px-4 py-2 text-left text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 text-gray-700">{index + 1}</td>
                {renderColumns(item)}
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="text-blue-500 hover:text-blue-700 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    disabled={isDeleting}
                    className={`${
                      isDeleting
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-red-500 hover:text-red-700"
                    }`}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ListView;
  