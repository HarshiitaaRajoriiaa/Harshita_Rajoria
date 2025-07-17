import React from "react";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
export default function About() {
  return (
    <>
      <div className="h-screen text-center flex flex-col justify-items-center bg-[#FFFBFB] p-10">
        <div className="About_Heading">
          <h1 className="mx-auto inline-block font-semibold text-2xl   p-4 m-5 ">
            ABOUT ME
          </h1>
        </div>
        <div className="About_Text border p-10 rounded-xl shadow-xl space-y-6 text-center">
          <div>
            <p>
              Hi, I’m Harshita Rajoria — a Computer Science Engineering student
              at IGDTUW, currently in my pre-final year, specializing in
              Artificial Intelligence.
            </p>
          </div>

          <div>
            <p>
              I enjoy crafting user-friendly web applications using Java,
              JavaScript, React , and Tailwind CSS, and I’m actively improving
              my skills in Data Structures and Algorithms. I frequently take
              part in coding contests and love challenging myself with logical
              problems.
            </p>
          </div>

          <div>
            <p>
              Beyond academics, I genuinely enjoy talking to new people,
              understanding different perspectives, and learning through
              conversations. My friends describe me as a good listener, strong
              communicator, and someone with great management skills.
            </p>
            <p>
              In my personal time, I read books like{" "}
              <a href="https://jamesclear.com/atomic-habits" target="blank">
                <em>
                  <b>Atomic Habits</b>
                </em>
              </a>{" "}
              by James Clear,{" "}
              <a href="https://thinklikeamonkbook.com/" target="blank">
                <em>
                  <b>Think Like a Monk</b>
                </em>
              </a>{" "}
              by Jay Shetty, <em>The Bhagavad Gita</em>, and{" "}
              <a
                href="https://tongaatsecondary.co.za/gallery/Life%E2%80%99s%20Amazing%20Secrets.pdf"
                target="blank"
              >
                <em>
                  <b>Life’s Amazing Secrets</b>
                </em>
              </a>{" "}
              by Gaur Gopal Das. I also love solving Sudoku, playing chess, and
              working on becoming a better version of myself every day.
            </p>
          </div>

          <div>
            <p>
              I’m currently seeking opportunities where I can combine my tech
              knowledge, creativity, and interpersonal skills to contribute
              meaningfully to real-world projects.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
