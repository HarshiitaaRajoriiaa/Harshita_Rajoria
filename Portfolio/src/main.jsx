import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Layout from "./Layout";
import Praise from "./Components/Projects/Praise";
import Brain from "./Components/Projects/Brain";
import Todo from "./Components/Projects/Todo";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/project-1-Praise-Pharma" element={<Praise />} />
          <Route path="/project-2-deep-learning" element={<Brain />} />
          <Route path="/project-3-todo" element={<Todo/>} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
