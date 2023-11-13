import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from './components/About/About';
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
