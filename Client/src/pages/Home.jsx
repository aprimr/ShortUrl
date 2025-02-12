import { FaArrowRight, FaLink, FaChartLine, FaShieldAlt, FaUsers } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 pt-24 pb-10">
      <div className="text-center max-w-3xl">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">Short URL - Simplify Your Links</h1>
        <p className="text-xl text-gray-600 mb-6">
          Shorten long URLs, track analytics, and share them easily with our fast and reliable URL shortener.
        </p>
        <a href="/convert" className="bg-gray-900 text-white px-8 py-4 rounded-lg text-xl inline-flex items-center hover:bg-gray-800 transition duration-300">
          Get Started <FaArrowRight className="ml-3" />
        </a>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mt-12">ShortURL Features</h1>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-center max-w-5xl">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <FaLink className="text-4xl text-gray-900 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Instant URL Shortening</h2>
          <p className="text-gray-600">Paste your long URL and get a short, easy-to-share link in seconds.</p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg">
          <FaChartLine className="text-4xl text-gray-900 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Analytics & Tracking</h2>
          <p className="text-gray-600">Monitor your link clicks and user engagement with real-time analytics.</p>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-center max-w-5xl">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <FaShieldAlt className="text-4xl text-gray-900 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Privacy Protection</h2>
          <p className="text-gray-600">We ensure your data and links are protected with strong encryption.</p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg">
          <FaUsers className="text-4xl text-gray-900 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">User-Friendly</h2>
          <p className="text-gray-600">Easily manage and organize your shortened URLs with our intuitive dashboard.</p>
        </div>
      </div>
    </div>
  );
}
