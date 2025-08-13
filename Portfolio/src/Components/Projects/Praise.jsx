import React from "react";
import P1 from "../../../public/Images/P1.png";
import P2 from "../../../public/Images/P2.png";
import P3 from "../../../public/Images/P3.png";


export default function Praise() {
  const screenshots = [
    P1,
    P2,
    P3,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0b15] to-black text-white">
      {/* Hero */}
      <header className="px-6 lg:px-10 pt-14 pb-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <p className="inline-block text-xs tracking-wider uppercase bg-pink-600/20 text-pink-300 px-3 py-1 rounded-full">
            Case Study
          </p>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold">
            Praise Pharmaceuticals — E-Commerce Website
          </h1>
          <p className="mt-3 max-w-3xl text-gray-300">
            A fully responsive pharmacy e-commerce platform built with{" "}
            <span className="text-teal-300">React.js</span> and{" "}
            <span className="text-teal-300">Tailwind CSS</span>, offering a
            smooth shopping experience with product browsing.
          </p>

          {/* Quick stats */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs text-gray-400">Product Categories</div>
              <div className="text-xl font-semibold">10+</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs text-gray-400">Responsive</div>
              <div className="text-xl font-semibold">Mobile-first</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs text-gray-400">Stack</div>
              <div className="text-xl font-semibold">React + Tailwind</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs text-gray-400">Deployment</div>
              <div className="text-xl font-semibold">Vercel</div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/HarshiitaaRajoriiaa/Praise-Pharma"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-pink-600 hover:bg-pink-500 px-4 py-2 font-semibold"
            >
              GitHub Repo
            </a>
            <a
              href="https://praise-pharma.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-teal-400/50 text-teal-300 hover:bg-teal-500/10 px-4 py-2 font-semibold"
            >
              Live Site
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
                alt={`Project screenshot ${i + 1}`}
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
          <section className="lg:col-span-2 rounded-2xl p-6 border border-white/10 bg-gradient-to-br from-pink-900/30 via-indigo-900/20 to-transparent">
            <h2 className="text-2xl font-semibold text-pink-300">
              Description
            </h2>
            <p className="mt-3 text-gray-300 leading-relaxed">
              The platform enables customers to browse and purchase medicines
              online with category filtering, detailed product pages, and a
              secure checkout process. Developed with{" "}
              <span className="text-teal-300">React.js</span> for the frontend
              and styled using{" "}
              <span className="text-teal-300">Tailwind CSS</span>, the website
              offers a fast, mobile-first shopping experience.
            </p>
          </section>

          {/* Tech Stack */}
          <aside className="rounded-2xl p-6 border border-white/10 bg-white/5">
            <h3 className="text-xl font-semibold text-teal-300">Tech Stack</h3>
            <ul className="mt-3 space-y-2 text-gray-300">
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>JavaScript (ES6+)</li>
              <li>Git & GitHub</li>
              <li>Vercel Deployment</li>
            </ul>
          </aside>

          {/* What I Learned */}
          <section className="lg:col-span-2 rounded-2xl p-6 border border-white/10 bg-white/5">
            <h3 className="text-xl font-semibold text-indigo-300">
              What I Learned
            </h3>
            <ul className="mt-3 grid sm:grid-cols-2 gap-3 text-gray-300">
              <li className="rounded-lg bg-black/40 border border-white/10 p-3">
                Designing scalable React component structures.
              </li>
              <li className="rounded-lg bg-black/40 border border-white/10 p-3">
                Implementing responsive, mobile-first layouts.
              </li>
              <li className="rounded-lg bg-black/40 border border-white/10 p-3">
                Managing state for cart and checkout functionality.
              </li>
              <li className="rounded-lg bg-black/40 border border-white/10 p-3">
                Deploying and optimizing on Vercel.
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
