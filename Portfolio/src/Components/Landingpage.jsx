import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-black via-[#0b0b15] to-black text-center px-6 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-blue-400 mb-4 z-10">
        Hi, I'm Harshita Rajoria
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-2xl text-gray-300 mb-8 max-w-2xl z-10">
        A passionate Computer Science student specializing in{" "}
        {/* <span className="text-teal-300">Full-Stack Development</span> &{" "} */}
        <span className="text-pink-300">Artificial Intelligence</span>.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 z-10">
        <a
          href="https://drive.google.com/file/d/1H6lH0n6UZjaFZgvMUnuNpgqT1_f2DYBI/view"
          target="_blank"
          rel="noopener noreferrer"
          download="Harshita_Rajoria_Resume.pdf"
          className="bg-gradient-to-r from-pink-500 via-indigo-500 to-blue-500 hover:opacity-90 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
        >
          View Resume
        </a>
        <Link
          to="/contact"
          className="border border-pink-400 text-pink-300 hover:bg-pink-500/20 font-semibold px-6 py-3 rounded-lg transition"
        >
          Contact Me
        </Link>
      </div>

      {/* Optional profile image */}
      {/* <img src="/profile.png" alt="Profile" className="mt-10 w-40 h-40 rounded-full border-4 border-pink-400 shadow-lg z-10" /> */}
    </section>
  );
}
