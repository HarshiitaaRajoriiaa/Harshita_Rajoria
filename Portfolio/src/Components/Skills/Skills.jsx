import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiTensorflow,
  SiKaggle,
} from "react-icons/si";

export default function Skills() {
  const techSkills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-400" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-300" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Python", icon: <FaPython className="text-yellow-300" /> },
    { name: "TensorFlow", icon: <SiTensorflow className="text-orange-300" /> },
    { name: "Kaggle", icon: <SiKaggle className="text-blue-300" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "Databases", icon: <FaDatabase className="text-indigo-400" /> },
  ];

  const coreSubjects = [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Operating Systems (OS)",
    "Computer Networks (CN)",
    "Software Engineering (SE)",
    "Artificial Intelligence (AI)",
    "Machine Learning (ML)",
    "Deep Learning",
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-[#0b0b15] to-black text-white px-10 py-16">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-blue-400">
        My Skills
      </h2>

      <div className="flex flex-row justify-evenly ">
        {/* Technical Skills */}
        <div className="mb-16 border rounded-2xl p-4 shadow-xl border-stone-700">
          <h3 className="text-2xl font-bold mb-8 text-center text-teal-300">
            Technical & Tools
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto ">
            {techSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-black/40 rounded-xl shadow-lg hover:shadow-teal-500/30 hover:scale-105 transition transform duration-300 border border-pink-500/20"
              >
                <div className="text-5xl mb-3">{skill.icon}</div>
                <p className="text-lg font-semibold text-gray-200">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Subjects */}
        <div className=" border rounded-2xl p-4 shadow-xl border-stone-700 h-fit">
          <h3 className="text-2xl font-bold text-center text-pink-300 mb-10">
            Core Computer Science Subjects
          </h3>
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {coreSubjects.map((subject, index) => (
              <div
                key={index}
                className="p-5 bg-black/40 rounded-xl shadow-md hover:shadow-pink-500/30 hover:scale-105 transition duration-300 border border-indigo-500/20 text-center"
              >
                <p className="text-lg font-medium">{subject}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
