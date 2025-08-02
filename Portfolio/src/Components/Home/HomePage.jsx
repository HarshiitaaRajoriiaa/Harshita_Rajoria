import React from 'react'
import Landingpage from '../LandingPage/Landingpage'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import About from '../About/About'
import Project from '../Projects/Project'
import Skills from '../Skills/Skills'
import Resume from '../Resume/Resume'
import Certi from '../Certificates/Certi'
import Contact from '../Contact/Contact'

export default function HomePage() {
  return (
    <div>
      <Header/>
      <Landingpage/>
      <About/>
      <Project/>
      <Resume/>
      <Skills/>
      <Certi/>
      <Contact/>
      <Footer/>
    </div>
  )
}
