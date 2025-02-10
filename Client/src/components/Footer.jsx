import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} aprimreg. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
