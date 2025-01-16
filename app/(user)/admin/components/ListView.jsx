const ListView = ({ items, handleEdit, handleDelete, isDeleting, type }) => {
  const renderColumns = (item) => {
    if (type === "Accreditation") {
      return (
        <>
          <td className="px-4 py-2 text-gray-700 text-sm lg:text-base">
            {item.title}
          </td>
          <td className="px-4 py-2 text-gray-700 text-sm lg:text-base">
            {item.description}
          </td>
        </>
      );
    }

    if (type === "Certificate") {
      return (
        <>
          <td className="px-4 py-2 text-gray-700 text-sm lg:text-base">
            {item.title}
          </td>
          <td className="px-4 py-2 text-gray-700 text-sm lg:text-base">
            {item.category}
          </td>
          <td className="px-4 py-2 text-gray-700 text-sm lg:text-base">
            {item.content}
          </td>
          <td className="px-4 py-2 text-gray-700 text-sm lg:text-base">
            {item.description}
          </td>
        </>
      );
    }

    if (type === "Training") {
      return (
        <>
          <td className="px-4 py-2 text-gray-700 text-sm lg:text-base">
            {item.title}
          </td>
          <td className="px-4 py-2 text-gray-700 text-sm lg:text-base">
            {item.description}
          </td>
          <td className="px-4 py-2 text-gray-700 text-sm lg:text-base">
            {item.content}
          </td>
        </>
      );
    }
  };

  return (
    <div className="pt-10 px-4 sm:px-6 lg:px-8">
      <h1 className="my-5 text-xl font-semibold text-gray-800 sm:text-2xl">
        {type} List
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 bg-white shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left text-gray-600 text-sm lg:text-base">
                ID
              </th>
              {type === "Accreditation" && (
                <th className="px-4 py-2 text-left text-gray-600 text-sm lg:text-base">
                  Title
                </th>
              )}
              {type === "Certificate" && (
                <th className="px-4 py-2 text-left text-gray-600 text-sm lg:text-base">
                  Title
                </th>
              )}
              {type === "Training" && (
                <th className="px-4 py-2 text-left text-gray-600 text-sm lg:text-base">
                  Title
                </th>
              )}
              {type === "Accreditation" && (
                <th className="px-4 py-2 text-left text-gray-600 text-sm lg:text-base">
                  Description
                </th>
              )}
              {type === "Certificate" && (
                <th className="px-4 py-2 text-left text-gray-600 text-sm lg:text-base">
                  Category
                </th>
              )}
              {type === "Certificate" && (
                <th className="px-4 py-2 text-left text-gray-600 text-sm lg:text-base">
                  Description
                </th>
              )}
              {type === "Certificate" && (
                <th className="px-4 py-2 text-left text-gray-600 text-sm lg:text-base">
                  Content
                </th>
              )}
              {type === "Training" && (
                <th className="px-4 py-2 text-left text-gray-600 text-sm lg:text-base">
                  Description
                </th>
              )}
              {type === "Training" && (
                <th className="px-4 py-2 text-left text-gray-600 text-sm lg:text-base">
                  Content
                </th>
              )}
              <th className="px-4 py-2 text-left text-gray-600 text-sm lg:text-base">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item._id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 text-gray-700 text-sm lg:text-base">
                  {item._id}
                </td>
                {renderColumns(item)}
                <td className="px-4 py-2 flex space-x-2">
                  <button
                    onClick={() => handleEdit(item._id)}
                    className="text-blue-500 hover:text-blue-700 text-sm lg:text-base"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    disabled={isDeleting}
                    className={`text-sm lg:text-base ${
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
    </div>
  );
};

export default ListView;
