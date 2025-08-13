import React from 'react'
import Header from './Components/Header/Header'
import {Outlet} from "react-router-dom";
import Footer from './Components/Footer/Footer'
import Project from './Components/Projects/Project';

export default function Layout() {
  return (
    <div>
        <Header/>
        <Project/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
