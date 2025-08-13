import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0b15] to-black text-white px-6 lg:px-10 py-14">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          {/* <p className="inline-block text-xs tracking-wider uppercase bg-pink-600/20 text-pink-300 px-3 py-1 rounded-full">
            About Me
          </p> */}
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-indigo-300">
            About Me
          </h1>
        </div>

        {/* Card */}
        <div className="space-y-8 rounded-2xl p-8 border border-white/10 bg-gradient-to-br from-indigo-900/30 via-blue-900/20 to-transparent shadow-lg">
          <p className="text-gray-300 leading-relaxed">
            Hi, I’m{" "}
            <span className="text-teal-300 font-semibold">
              Harshita Rajoria
            </span>{" "}
            — a Computer Science Engineering student at IGDTUW, currently in my
            pre-final year, specializing in
            <span className="text-pink-300"> Artificial Intelligence</span>.
          </p>

          <p className="text-gray-300 leading-relaxed">
            I enjoy crafting user-friendly web applications using
            <span className="text-teal-300"> Java</span>,
            <span className="text-teal-300"> JavaScript</span>,
            <span className="text-teal-300"> React</span>, and
            <span className="text-teal-300"> Tailwind CSS</span>. I’m actively
            improving my skills in{" "}
            <span className="text-indigo-300">
              Data Structures and Algorithms
            </span>
            , frequently participate in coding contests, and love challenging
            myself with logical problems.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Beyond academics, I enjoy connecting with people, understanding
            different perspectives, and learning through conversations. My
            friends describe me as a good listener, strong communicator, and
            someone with great management skills.
          </p>

          <p className="text-gray-300 leading-relaxed">
            In my personal time, I read books like{" "}
            <a
              href="https://jamesclear.com/atomic-habits"
              target="_blank"
              rel="noreferrer"
              className="text-pink-300 hover:underline"
            >
              <b>Atomic Habits</b>
            </a>
            ,{" "}
            <a
              href="https://thinklikeamonkbook.com/"
              target="_blank"
              rel="noreferrer"
              className="text-pink-300 hover:underline"
            >
              <b>Think Like a Monk</b>
            </a>
            , <em>The Bhagavad Gita</em>, and{" "}
            <a
              href="https://tongaatsecondary.co.za/gallery/Life%E2%80%99s%20Amazing%20Secrets.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-pink-300 hover:underline"
            >
              <b>Life’s Amazing Secrets</b>
            </a>
            . I also enjoy Sudoku, chess, and working daily to improve myself.
          </p>

          <p className="text-gray-300 leading-relaxed">
            I’m currently seeking opportunities where I can combine my
            <span className="text-teal-300"> technical expertise</span>,
            <span className="text-teal-300"> creativity</span>, and
            <span className="text-teal-300"> interpersonal skills </span>
            to contribute meaningfully to impactful projects.
          </p>
        </div>
      </div>
    </div>
  );
}
