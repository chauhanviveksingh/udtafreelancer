'use client';

import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-primary text-secondary shadow-lg relative">
      {/* Logo */}
      <div className="text-2xl font-bold z-50">
        <a href="#home" className="hover:text-accent">
          BLINDER
        </a>
      </div>

      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="block md:hidden text-3xl focus:outline-none z-50"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? '×' : '☰'}
      </button>

      {/* Floating Half-Screen Overlay */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-1/2 h-screen bg-white shadow-lg z-40 transition-transform"
          onClick={() => setIsMenuOpen(false)} // Close menu when clicking outside
        />
      )}

      {/* Links inside Navbar */}
      <ul
        className={`absolute top-0 left-0 w-1/2 h-screen bg-white text-black md:relative md:w-auto md:h-auto md:bg-transparent md:text-secondary md:flex md:items-center md:justify-end md:space-x-8 shadow-lg md:shadow-none transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
        style={{ zIndex: 50 }}
      >
        <li>
          <a href="#home" className="block py-2 px-4 hover:text-accent">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="block py-2 px-4 hover:text-accent">
            About
          </a>
        </li>
        <li>
          <a href="#blog" className="block py-2 px-4 hover:text-accent">
            Blog
          </a>
        </li>
        <li>
          <a href="#portfolio" className="block py-2 px-4 hover:text-accent">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" className="block py-2 px-4 hover:text-accent">
            Contact
          </a>
        </li>
        <li>
          <a
            href="#login"
            className="block py-2 px-4 text-center border border-accent text-accent rounded hover:bg-accent hover:text-white transition"
          >
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
