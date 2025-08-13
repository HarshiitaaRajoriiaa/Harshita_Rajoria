import React from "react";
import Header from "../Components/Header";
import Footer from "./Footer";
import About from "../Components/About"
import Project from "./Projects/Project";
import Contact from "./Contact";
import Skill from "../Components/Skills";
import Ach from "../Components/Ach";
import LandingPage from "../Components/Landingpage";

export default function HomePage() {
  return (
    <div>
      <Header />
      <LandingPage />
      <About />
      <Project />
      <Ach />
      <Skill />
      <Contact />
    </div>
  );
}
