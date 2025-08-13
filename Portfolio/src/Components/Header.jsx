import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold tracking-wide drop-shadow-lg">
          <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-blue-400">
            Harshita Rajoria
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <Link
            to="/"
            className="text-white hover:text-pink-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-teal-400 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-white hover:text-blue-400 transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-indigo-400 transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10">
          <nav className="flex flex-col items-center py-4 space-y-4 font-medium">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-pink-400 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-teal-400 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="/projects"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-indigo-400 transition-colors duration-300"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
