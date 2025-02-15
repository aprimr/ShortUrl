import React, { useState, useEffect } from "react";

const SavedUrls = () => {
  const [savedUrls, setSavedUrls] = useState([]);

  useEffect(() => {
    const storedUrls = JSON.parse(localStorage.getItem("SavedUrls")) || [];
    setSavedUrls(storedUrls);
  }, []);

  const handleDeleteUrl = (toDelete) => {
    const newArr = savedUrls.filter((item) => item.shortUrl !== toDelete);
    setSavedUrls(newArr);
    localStorage.setItem("SavedUrls", JSON.stringify(newArr));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="w-full bg-white p-6 rounded-xl shadow-lg">
        {savedUrls.length !== 0 && (
          <h2 className="text-2xl font-semibold text-center mb-4">
            Saved URLs
          </h2>
        )}
        {savedUrls.length === 0 ? (
          <div className="text-center text-2xl font-semibold text-gray-900">
            No saved URLs found.
          </div>
        ) : (
          <>
            {/* Large Screen Table */}
            <div className="overflow-x-auto hidden md:block">
              <table className="w-full table-auto border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left bg-gray-900 text-white">
                      SN
                    </th>
                    <th className="px-6 py-3 text-left bg-gray-900 text-white">
                      Long URL
                    </th>
                    <th className="px-6 py-3 text-left bg-gray-900 text-white">
                      Short URL
                    </th>
                    <th className="px-6 py-3 text-right bg-gray-900 text-white">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {savedUrls.map((savedItem, index) => (
                    <tr key={index} className="border-b border-gray-300">
                      <td className="px-6 py-3 text-left text-gray-900">
                        {index + 1}
                      </td>
                      <td className="px-6 py-3 text-gray-900 text-left">
                        <a
                          href={savedItem.longUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {savedItem.longUrl}
                        </a>
                      </td>
                      <td className="px-6 py-3 text-gray-900 text-left">
                        <a
                          href={savedItem.shortUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-b-2 border-blue-500"
                        >
                          {savedItem.shortUrl}
                        </a>
                      </td>
                      <td className="px-6 py-3 text-right">
                        <button
                          onClick={() => handleDeleteUrl(savedItem.shortUrl)}
                          className="text-red-600 hover:text-red-800"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View */}
            <div className="md:hidden">
              {savedUrls.map((savedItem, index) => (
                <div
                  key={index}
                  className="mb-4 p-4 border border-gray-300 rounded-lg shadow-sm bg-white"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-semibold text-gray-900">
                      {index + 1}
                    </span>
                    <button
                      onClick={() => handleDeleteUrl(savedItem.shortUrl)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </div>
                  <div className="overflow-x-auto mt-2">
                    <p className="inline-block w-max mr-4">
                      <span className="font-semibold">Long URL:</span>{" "}
                      <a
                        href={savedItem.longUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {savedItem.longUrl}
                      </a>
                    </p>
                    <p className="inline-block w-max">
                      <span className="font-semibold">Short URL:</span>{" "}
                      <a
                        href={savedItem.shortUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {savedItem.shortUrl}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SavedUrls;
