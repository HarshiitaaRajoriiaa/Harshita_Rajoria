import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0b15] to-black text-white px-6 lg:px-10 py-14 flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="inline-block text-xs tracking-wider uppercase bg-pink-600/20 text-pink-300 px-3 py-2 mt-10 rounded-full">
          Get in Touch
        </p>
        <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-indigo-300">
          Contact Me
        </h2>
        <p className="mt-3 text-gray-400 max-w-xl">
          Have a question, a project idea, or just want to say hello? Fill out
          the form below and I’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-indigo-900/30 via-blue-900/20 to-transparent border border-white/10 p-8 rounded-2xl shadow-lg w-full max-w-lg space-y-6"
      >
        <div>
          <label className="block text-sm font-semibold text-teal-300 mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black/40 text-white rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-teal-300 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black/40 text-white rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-teal-300 mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black/40 text-white rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 via-indigo-500 to-blue-500 hover:opacity-90 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
