import React from "react";
import { FaMedal, FaBookOpen, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import LC from "../../public/Images/LC.png";

export default function Achievements() {
  const achievements = [
    {
      title: "Published Review Paper",
      description:
        "Published A Review Paper on 30 July 2024 via The Electrochemical Society (”ECS”). Published on behalf of ECS by IOP Publishing Limited",
      icon: <FaBookOpen className="text-pink-400 text-5xl" />,
      link: "https://iopscience.iop.org/article/10.1149/2162-8777/ad6588", // Replace with your real link
      color: "border-pink-500/20 hover:shadow-pink-500/30",
    },
    {
      title: "LeetCode 50 Days Badge",
      description:
        "Earned the LeetCode 50 Days Badge by consistently solving problems for 50 consecutive days, strengthening problem-solving skills.",
      icon: <SiLeetcode className="text-blue-400 text-5xl" />,
      link: "https://leetcode.com/u/Harshita100403/", // Replace with your real profile
      color: "border-yellow-500/20 hover:shadow-yellow-500/30",
    },
    {
      title: "200+ LeetCode Problems Solved",
      description:
        "Solved over 200 problems on LeetCode, covering a variety of topics including Arrays, Graphs, Dynamic Programming, and more.",
      // icon: <FaCode className="text-indigo-400 text-5xl" />,
      icon: (
        <img
          src={LC}
          alt="LeetCode Logo"
          className="w-16 h-16 object-contain"
        />
      ),
      link: "https://leetcode.com/u/Harshita100403/", // Replace with your real profile
      color: "border-indigo-500/20 hover:shadow-indigo-500/30",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-[#0b0b15] to-black text-white px-10 py-16">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-pink-400 to-indigo-400">
        Achievements
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {achievements.map((achieve, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center p-8 bg-black/40 rounded-xl shadow-lg border ${achieve.color} hover:scale-105 transition transform duration-300`}
          >
            {achieve.icon}
            <h3 className="mt-4 text-2xl font-bold text-teal-300">
              {achieve.title}
            </h3>
            <p className="mt-2 text-gray-300">{achieve.description}</p>
            <a
              href={achieve.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-indigo-500 hover:opacity-90 transition text-white font-medium"
            >
              View More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
