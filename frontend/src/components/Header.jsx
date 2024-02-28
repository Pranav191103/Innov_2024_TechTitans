import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-lg font-bold">Gamify-Lang</div>
      <ul className="flex space-x-4">
        <li>
          <a href="#" className="text-white hover:text-gray-300">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-300">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-300">
            Contact
          </a>
        </li>
        <Link to="/profile" className="text-white hover:text-gray-300">
          Profile
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
