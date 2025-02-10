import { useRef, useState } from "react";
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import { IoChevronBackOutline } from "react-icons/io5";
import { exportComponentAsPNG } from 'react-component-export-image';
import QRCode from "react-qr-code";

export default function Convert() {
  const [url, setUrl] = useState("");
  const [longUrl, setLongUrl] = useState("");
  const [shortedUrl, setShortedUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  const [showShortedLink, setShowShortedLink] = useState(false);

  const QrRef = useRef()

  const handleShortURL = () =>{
    const shortUrl = `www.short.ly/${Math.random().toString(36).substr(2, 6)}`;
    setShortedUrl(shortUrl);
    setShowShortedLink(true);
  }

  const handleShortAnotherURL = () => {
    setShowShortedLink(false);
    setUrl("");
    setLongUrl("");
    setShortedUrl("");
    setCopied(null);
  };

  const handleCopyShortUrl = () => {
    setCopied(true);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shortedUrl)
    } else {
      setError('Your browser doesnot support copy feature')
    }
    setTimeout(() => {
      setCopied(false)
      setError(false)
    }, 3000);
  }

  const handleDownloadQR = () => { 
    exportComponentAsPNG(QrRef, {fileName: "ShortQr"});
  }

  return (
    <>
      {!showShortedLink && (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden">
          
          {/* Background Shapes */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-white opacity-20 rounded-full border-4 border-gray-200 transform -translate-x-32 -translate-y-32"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-200 opacity-30 rounded-full transform translate-x-32 translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 border-4 border-gray-300 rounded-full opacity-40 transform translate-x-16 translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-teal-300 opacity-50 rounded-full transform translate-x-24 translate-y-24"></div>
          <div className="absolute -top-20 -left-20 w-56 h-56 rounded-full bg-teal-100 opacity-25 "></div>
          <div className="absolute bottom-20 -left-56 w-96 h-96 rounded-full bg-yellow-300 opacity-40 "></div>
          
          {/* Header */}
          <h2 className="text-4xl font-semibold text-gray-900 text-center mb-2 relative z-10">
            Ready to shorten your long URLs?
          </h2>
          <p className="text-xl font-normal text-gray-600 text-center mb-6 relative z-10">
            Enter your long URL below to shorten it
          </p>
          

          {/* Input Section */}
          <div className="w-full max-w-md bg-white rounded-lg shadow-md px-6 pb-6 pt-5 border border-gray-200 relative z-10">
            <h2 className="text-lg text-md font-semibold text-gray-900 text-center mb-3 ">
              Shorter URLs, Smoother Sharing!
            </h2>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="text"
                placeholder="Enter your long URL here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 px-4 py-3 w-full border border-gray-300 rounded-lg text-lg text-gray-800 focus:outline-none"
              />
              <button
                className={`bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition duration-300 w-full sm:w-auto ${!url && 'cursor-not-allowed'}`}
                disabled={!url}
                onClick={handleShortURL}
              >
                Short URL
              </button>
            </div>
            <h2 className="text-sm font-normal text-gray-600 text-left mt-2 relative z-10">
              * The LongUrl must start with <strong >https://...</strong>
            </h2>
          </div>
          <h2 className="text-sm font-normal text-gray-400 text-left mt-2 relative z-10">
              Short URLs will be deleted after 30 days.
            </h2>
        </div>
      )}
      {showShortedLink && (
        <div className="w-full h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden p-4 sm:p-0">
          <div className="w-full max-w-4xl space-y-4">
            {/* Back Button */}
            <div onClick={handleShortAnotherURL} className="absolute top-4 left-4 md:left-44 z-10">
              <button className="p-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition duration-300">
                <IoChevronBackOutline size={20} />
              </button>
            </div>

            {/* Background Shapes */}
            <div className="absolute top-0 left-0 w-48 h-48 bg-white opacity-20 rounded-full border-4 border-gray-200 transform -translate-x-32 -translate-y-32"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-200 opacity-30 rounded-full transform translate-x-32 translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 border-4 border-gray-300 rounded-full opacity-40 transform translate-x-16 translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-teal-300 opacity-50 rounded-full transform translate-x-24 translate-y-24"></div>
            <div className="absolute -top-20 -left-20 w-56 h-56 rounded-full bg-teal-100 opacity-25 "></div>
            <div className="absolute bottom-20 -left-56 w-96 h-96 rounded-full bg-yellow-300 opacity-40 "></div>

            {/* Link successfully shortened message */}
            <h2 className="text-4xl font-semibold text-gray-900 text-center relative z-10">
              Link Successfully Shortened!
            </h2>

            {/* Container for Link and QR Code */}
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 sm:space-x-6 relative z-10">
              {/* Link Info */}
              <div className="bg-white p-6 rounded-lg shadow-md flex-1 border border-gray-200 w-full">
                {/* Long URL */}
                <div className="flex items-center justify-between space-x-2 pb-6 border-b-2">
                  <div className="flex-1">
                    <p className="text-sm sm:text-base text-gray-600">Long URL</p>
                    <p className="text-lg font-semibold text-gray-900 break-all">{longUrl}</p>
                  </div>
                </div>

                <br />

                {/* Short URL */}
                <div className="flex items-center justify-between space-x-2">
                  <div className="flex-1">
                    <p className="text-sm sm:text-base text-gray-600">Short URL</p>
                    <p className="text-lg font-semibold text-gray-900 break-all">{shortedUrl}</p>
                  </div>
                  <button 
                    className="p-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition duration-300"
                    onClick={handleCopyShortUrl}
                  >
                    {!copied?<LuCopy size={18} /> : <LuCopyCheck size={18} />}
                  </button>
                </div>
                {error&&<p className="text-sm text-red-500 mt-2">{error}</p>}
              </div> 

              {/* QR Code */}
              <div ref={QrRef} className="w-auto h-auto bg-gray-900 relative z-10">
              <div  className="w-auto h-auto p-4 border-4 border-gray-900 bg-white rounded-xl">
                <div className="flex justify-center w-auto ">
                  <QRCode value={shortedUrl} size={200} level="H" />
                </div>
              </div>
              </div>
            </div>

            {/* Done Button (Centered) */}
            <div className="flex justify-center mt-6">
              <button
                onClick={handleDownloadQR}
                className="px-8 py-3 border-2 border-gray-900 bg-gray-900 text-white rounded-md hover:text-gray-900 hover:bg-white transition duration-300 shadow-lg"
              >
                Download QR
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
