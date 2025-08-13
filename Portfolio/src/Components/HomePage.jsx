import React from "react";
import Header from "../Components/Header";
import Footer from "./Footer";
import About from "../Components/About";
import Project from "./Projects/Project";
import Contact from "./Contact";
import Skill from "../Components/Skills";
import Ach from "../Components/Ach";
import LandingPage from "../Components/Landingpage";
import Wp from "../Components/Wp"

export default function HomePage() {
  return (
    <div>
      <Header />
      <Wp />
      <LandingPage />
      <About />
      <Project />
      <Ach />
      <Skill />
      <Contact />
    </div>
  );
}
