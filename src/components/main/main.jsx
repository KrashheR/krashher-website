import React from "react";
import Home from "../home/home";
import Projects from "../projects/projects";
import Skills from "../skills/skills";
import Education from "../education/education";
import AboutMe from "../aboutMe/aboutMe";

function Main () {

  return(
    <>
      <Home />
      <AboutMe />
      <Skills />
      <Education />
      <Projects />
    </>
  );
}

export default Main;