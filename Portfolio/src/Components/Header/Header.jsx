import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold  tracking-wide drop-shadow-lg">
          Harshita Rajoria
        </div>

        {/* Navigation */}
        <nav className="space-x-8 font-medium">
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
      </div>
    </header>
  );
}
