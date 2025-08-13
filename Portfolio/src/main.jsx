import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Praise from "./Components/Projects/Praise";
import Brain from "./Components/Projects/Brain";
import Todo from "./Components/Projects/Todo";
import Project from "./Components/Projects/Project";
import HomePage from "./Components/HomePage";
import About from "./Components/About";
import Contact from "./Components/Contact";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}>
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Project/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/project-1-Praise-Pharma" element={<Praise />} />
          <Route path="/project-2-deep-learning" element={<Brain />} />
          <Route path="/project-3-todo" element={<Todo/>} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
