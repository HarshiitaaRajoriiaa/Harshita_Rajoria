import React from "react";
import Brain from "../../../public/Images/Brain.jpg";
import { Link } from "react-router-dom";

export default function Project() {
  const projects = [
    {
      title: "E Commerce | Praise Pharma",
      desc: "Developed a fully responsive React-based website for a pharmacy company to showcase medicines categorized by type.",
      img: "https://via.placeholder.com/300x200",
      color: "bg-pink-500",
      live: "https://praise-pharma.vercel.app/",
      github: "https://github.com/HarshiitaaRajoriiaa/Personal_Dashboard",
      path: "/project-1-Praise-Pharma",
    },
    {
      title: "Brain Tumor Classification using DL",
      desc: "Built and trained a CNN model to classify 3,500+ brain MRI scans.",
      img: Brain,
      color: "bg-blue-500",
      live: "",
      github:
        "https://github.com/HarshiitaaRajoriiaa/Brain-Tumor-Classifiction",
      path: "/project-2-deep-learning",
    },
    {
      title: "Personal Productivity Dashboard",
      desc: "Developed a secure RESTful To-Do List API with user authentication, CRUD operations, and MongoDB persistence.",
      img: "https://via.placeholder.com/300x200",
      color: "bg-indigo-500",
      live: "https://personal-dashboard.vercel.app/",
      github: "https://github.com/HarshiitaaRajoriiaa/Personal_Dashboard",
      path: "/project-3-todo",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-10 flex flex-col justify-center">
      <h1 className="text-4xl font-bold text-center mb-10 text-teal-400">
        My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Link
            to={project.path}
            key={index}
            className={`rounded-2xl overflow-hidden shadow-lg ${project.color} transform hover:scale-105 transition duration-300`}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full  object-cover"
            />
            <div className="p-5 bg-black/60">
              <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
              <p className="text-gray-200">{project.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
