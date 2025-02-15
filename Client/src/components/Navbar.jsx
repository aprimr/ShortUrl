import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 px-6 w-full">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-primary hover:text-secondary">
          ShortURL
        </NavLink>
        <ul className="flex space-x-6">
          <li>
            <NavLink to="/convert" className="text-lg hover:text-primary hover:underline">Convert</NavLink>
          </li>
          <li>
            <NavLink to="/saved" className="text-lg hover:text-primary hover:underline">Saved</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
