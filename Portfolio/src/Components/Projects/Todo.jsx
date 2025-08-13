import React from "react";
import T2 from "../../../public/Images/T2.png";
import T4 from "../../../public/Images/T4.png";

export default function Todo() {
  const screenshots = [
    T2,
    T4,
    "https://via.placeholder.com/800x500?text=ToDo+Screenshot+3",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0b15] to-black text-white">
      {/* Hero */}
      <header className="px-6 lg:px-10 pt-14 pb-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <p className="inline-block text-xs tracking-wider uppercase bg-teal-600/20 text-teal-300 px-3 py-2 my-10 rounded-full">
            Project
          </p>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold">
            Personal Productivity Dashboard (To-Do App)
          </h1>
          <p className="mt-3 max-w-3xl text-gray-300">
            Developed a secure RESTful{" "}
            <span className="text-teal-300">To-Do List API</span>
            with authentication, CRUD operations, and MongoDB persistence.
            Deployed on <span className="text-pink-300">Render</span>, designed
            for multi-user productivity tracking.
          </p>

          {/* Quick stats */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs text-gray-400">Persistence</div>
              <div className="text-xl font-semibold">MongoDB</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs text-gray-400">API Type</div>
              <div className="text-xl font-semibold">RESTful</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs text-gray-400">Users</div>
              <div className="text-xl font-semibold">Multi-user</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs text-gray-400">Features</div>
              <div className="text-xl font-semibold">CRUD + Auth</div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/HarshiitaaRajoriiaa/Personal_Dashboard"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-teal-600 hover:bg-teal-500 px-4 py-2 font-semibold"
            >
              GitHub Repo
            </a>
            <a
              href="https://personal-dashboard.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-pink-400/50 text-pink-300 hover:bg-pink-500/10 px-4 py-2 font-semibold"
            >
              Live Demo
            </a>
          </div>
        </div>
      </header>

      {/* Image Showcase */}
      <section className="px-6 lg:px-10 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {screenshots.map((src, i) => (
            <figure
              key={i}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5"
            >
              <img
                src={src}
                alt={`ToDo App screenshot ${i + 1}`}
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <figcaption className="px-4 py-3 text-sm text-gray-300 border-t border-white/10 bg-black/30">
                Screenshot {i + 1}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Content Sections */}
      <main className="px-6 lg:px-10 pb-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Description */}
          <section className="lg:col-span-2 rounded-2xl p-6 border border-white/10 bg-gradient-to-br from-teal-900/30 via-blue-900/20 to-transparent">
            <h2 className="text-2xl font-semibold text-teal-300">
              Description
            </h2>
            <p className="mt-3 text-gray-300 leading-relaxed">
              This To-Do app offers secure{" "}
              <span className="text-teal-300">user authentication</span>,
              personalized task management, and robust CRUD capabilities.
              Features include task creation, updates, deletion, retrieval (with
              pagination and filtering), and support for multiple users without
              data overlap.
            </p>
          </section>

          {/* Tech Stack */}
          <aside className="rounded-2xl p-6 border border-white/10 bg-white/5">
            <h3 className="text-xl font-semibold text-pink-300">Tech Stack</h3>
            <ul className="mt-3 space-y-2 text-gray-300">
              <li>HTML, CSS, JavaScript</li>
              <li>Node.js + Express.js</li>
              <li>MongoDB + Mongoose</li>
              <li>Chart.js (data visualization)</li>
              <li>Vercel (frontend deployment)</li>
              <li>Render (backend hosting)</li>
              <li>Git & GitHub</li>
            </ul>
          </aside>

          {/* What I Learned */}
          <section className="lg:col-span-2 rounded-2xl p-6 border border-white/10 bg-white/5">
            <h3 className="text-xl font-semibold text-indigo-300">
              What I Learned
            </h3>
            <ul className="mt-3 grid sm:grid-cols-2 gap-3 text-gray-300">
              <li className="rounded-lg bg-black/40 border border-white/10 p-3">
                Implementing secure user authentication & JWT tokens.
              </li>
              <li className="rounded-lg bg-black/40 border border-white/10 p-3">
                Building scalable REST APIs with Express.js.
              </li>
              <li className="rounded-lg bg-black/40 border border-white/10 p-3">
                Structuring MongoDB schemas with Mongoose.
              </li>
              <li className="rounded-lg bg-black/40 border border-white/10 p-3">
                Using Chart.js for intuitive data visualization.
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
