import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { MdLinkOff } from "react-icons/md";

export default function RedirectPage() {
  const navigate = useNavigate()

  const { shortId } = useParams();
  const [error, setError] = useState('')

  const getOriginalUrl = async () => {
    setError('')
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/${shortId}`);
      if(res.status === 200 ){
        window.location.href = res.data.longUrl
      }
    } catch (error) {
      if(error.response.status === 404){
        setError(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    getOriginalUrl();
  }, [shortId]);  

  return (
    <div className="flex flex-col gap-6 items-center justify-center min-h-screen w-full bg-gray-900 text-gray-100 p-4 sm:bg-gray-100 sm:text-gray-900">
      <div className="bg-gray-900 text-gray-100 p-8 rounded-2xl flex flex-col items-center space-y-4 w-full max-w-md">
        {/* Loading or Error Icon */}
        { !error ? (
          <div className="w-12 h-12 border-4 border-gray-100 border-t-transparent rounded-full animate-spin"></div>
        ) : (
          <div className="w-12 h-12"><MdLinkOff className="w-full h-full text-rose-500"/></div>
        )}

        {/* Title */}
        <h2 className="text-2xl font-semibold">{!error ? "Redirecting..." : error}</h2>

        {/* Description */}
        <p className="text-gray-300 text-sm text-center">
          {!error ? "Please wait while we take you to your destination." : "Please enter a correct URL and try again."}
        </p>
      </div>
      
      <button 
        onClick={() => navigate('/')} 
        className="px-4 py-2 bg-white text-gray-900 rounded-md hover:shadow-md sm:text-gray-900 md:bg-gray-900 md:text-white"
      >
        Back To Home
      </button>
    </div>
  );
}
