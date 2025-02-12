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
      const res = await axios.get(`https://short-url-backend-v9xs.onrender.com/api/${shortId}`);
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
    <div className="flex flex-col gap-6 items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 text-gray-100 p-8 rounded-2xl shadow-xl flex flex-col items-center space-y-4"
      >
        {/* Loading Spinner */}
        {
          !error?
          <div className="w-12 h-12 border-4 border-gray-100 border-t-transparent rounded-full animate-spin"></div>:
          <div className="w-12 h-12 "><MdLinkOff className="w-full h-full text-rose-500"/></div>
        }
        {/* Title */}
        {
          !error?
          <h2 className="text-2xl font-semibold">Redirecting...</h2>:
          <h2 className="text-2xl font-semibold">{error}</h2>
        }

        {/* Description with subtle animation */}
        <motion.p
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-gray-300 text-sm text-center"
        >
          {!error?'Please wait while we take you to your destination.':'Please Enter correct Url and try again.'}
        </motion.p>
      </motion.div>
      <button onClick={()=>navigate('/')} className="px-4 py-2 bg-gray-900 text-white rounded-md hover:shadow-md">Go To home</button>
    </div>
  );
}
