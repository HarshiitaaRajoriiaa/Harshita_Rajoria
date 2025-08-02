import React from 'react';

export default function LandingPage() {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-pink-100 to-blue-100 text-center px-4">
      <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 mb-4">
        Hi, I'm Harshita Rajoria
      </h1>
      <p className="text-lg sm:text-2xl text-gray-700 mb-6 max-w-xl">
        A passionate Computer Science student specializing in Full-Stack Development & AI.
      </p>

      <div className="flex gap-4">
        <a
          href="/Resume.pdf"
          download="Harshita_Rajoria_Resume.pdf"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg shadow transition"
        >
          View Resume
        </a>
        <a
          href="#contact"
          className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium px-6 py-2 rounded-lg transition"
        >
          Contact Me
        </a>
      </div>

      {/* Optional: Add an illustration or profile image */}
      {/* <img src="/profile.png" alt="Profile" className="mt-10 w-40 h-40 rounded-full border-4 border-white shadow-lg" /> */}
    </section>
  );
}
