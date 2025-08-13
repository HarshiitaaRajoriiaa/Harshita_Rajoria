import React from "react";
import Landingpage from "../LandingPage/Landingpage";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Project from "../Projects/Project";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Ach from "../Achievements/Ach";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Landingpage />
      <About />
      <Project />
      <Ach/>
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
