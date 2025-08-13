import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import Praise from "./Components/Projects/Praise";
import Layout from "./Layout";
import Brain from "./Components/Projects/Brain";
import Todo from "./Components/Projects/Todo";
import Project from "./Components/Projects/Project"; 
import HomePage from "./Components/HomePage";
import About from "./Components/About";
import Contact from "./Components/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project-1-Praise-Pharma" element={<Praise />} />
      <Route path="/project-2-deep-learning" element={<Brain />} />
      <Route path="/project-3-todo" element={<Todo />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
