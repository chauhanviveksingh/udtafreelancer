'use client';

import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-primary text-secondary shadow-lg">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <a href="#home" className="hover:text-accent">BLINDER</a>
      </div>

      {/* Links */}
      <ul
        className={`md:flex md:items-center md:space-x-8 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-primary md:bg-transparent z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full md:translate-y-0'
          }`}
      >
        <li>
          <a href="#home" className="block py-2 px-4 md:inline hover:text-accent">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="block py-2 px-4 md:inline hover:text-accent">
            About
          </a>
        </li>
        <li>
          <a href="#blog" className="block py-2 px-4 md:inline hover:text-accent">
            Blog
          </a>
        </li>
        <li>
          <a href="#portfolio" className="block py-2 px-4 md:inline hover:text-accent">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" className="block py-2 px-4 md:inline hover:text-accent">
            Contact
          </a>
        </li>
        <button
          className="block py-2 px-4 md:inline hover:text-accent"
          onClick={() => window.location.href = '#login'}
        >
          Login
        </button>
        <button
          className="block py-2 px-4 md:inline hover:text-accent"
          onClick={() => window.location.href = '#signup'}
        >
          Signup
        </button>

      </ul>


      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="block md:hidden text-2xl focus:outline-none"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? '×' : '☰'}
      </button>
    </nav>
  );
};

export default Navbar;
