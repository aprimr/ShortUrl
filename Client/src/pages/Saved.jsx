import React, { useState } from 'react';

const SavedUrls = () => {
  // Sample data with long and short URLs
  const [savedUrls, setSavedUrls] = useState([
    { longUrl: 'https://www.example.com', shortUrl: 'exmpl.co/123', sn: 1 },
    { longUrl: 'https://www.google.com', shortUrl: 'goo.gl/456', sn: 2 },
    { longUrl: 'https://www.reddit.com', shortUrl: 'rdt.io/789', sn: 3 },
  ]);

  const handleDeleteUrl = (snToDelete) => {
    setSavedUrls(savedUrls.filter((url) => url.sn !== snToDelete));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Ensure full width wrapper */}
      <div className="w-full bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Saved URLs</h2>

        <div className="overflow-x-auto hidden md:block">
          {/* Table layout for large screens */}
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-900 text-white">SN</th>
                <th className="px-6 py-3 bg-gray-900 text-white">Long URL</th>
                <th className="px-6 py-3 bg-gray-900 text-white">Short URL</th>
                <th className="px-6 py-3 bg-gray-900 text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {savedUrls.map((savedUrl) => (
                <tr key={savedUrl.sn} className="border-b border-gray-300">
                  {/* Normal SN */}
                  <td className="px-6 py-3 text-center text-gray-900">{savedUrl.sn}</td>

                  {/* Long URL */}
                  <td className="px-6 py-3 text-gray-900">
                    <a
                      href={savedUrl.longUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {savedUrl.longUrl}
                    </a>
                  </td>

                  {/* Short URL */}
                  <td className="px-6 py-3 text-gray-900">
                    <a
                      href={savedUrl.shortUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {savedUrl.shortUrl}
                    </a>
                  </td>

                  {/* Delete button aligned right */}
                  <td className="px-6 py-3 text-right">
                    <button
                      onClick={() => handleDeleteUrl(savedUrl.sn)}
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

        {/* Document-style layout for small screens */}
        <div className="md:hidden">
          {savedUrls.map((savedUrl) => (
            <div
              key={savedUrl.sn}
              className="mb-4 p-4 border border-gray-300 rounded-lg shadow-sm bg-white"
            >
              <div className="flex items-center justify-between mb-2">
                {/* SN as normal number */}
                <span className="text-lg font-semibold text-gray-900">{savedUrl.sn}</span>

                {/* Delete Button */}
                <button
                  onClick={() => handleDeleteUrl(savedUrl.sn)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
              {/* Scrollable section for URLs */}
              <div className="overflow-x-auto mt-2">
                <p className="inline-block w-max mr-4">
                  <span className="font-semibold">Long URL:</span>{' '}
                  <a
                    href={savedUrl.longUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {savedUrl.longUrl}
                  </a>
                </p>
                <p className="inline-block w-max">
                  <span className="font-semibold">Short URL:</span>{' '}
                  <a
                    href={savedUrl.shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {savedUrl.shortUrl}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SavedUrls;
