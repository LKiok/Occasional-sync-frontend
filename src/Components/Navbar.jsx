// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white text-xl font-semibold">
            EvenTick
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link to="/register" className="text-white">
                Register
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-white">
                Login
              </Link>
            </li>
            <li>
              <Link to="/events" className="text-white">
                Find Events
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
