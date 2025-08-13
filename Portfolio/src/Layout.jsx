import React from "react";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Praise from ".//Components/Projects/Praise";
import Brain from ".//Components/Projects/Brain";
import Todo from ".//Components//Projects/Todo";
export default function Layout() {
  return (
    <div>
      <Header />
      <Todo/>
      <Footer />
    </div>
  );
}
