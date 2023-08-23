import React from "react";
import Projects from "../../sections/projects/projects";
import Skills from "../../sections/skills/skills";
import Education from "../../sections/education/education";
import AboutMe from "../../sections/aboutMe/aboutMe";

function Main () {

  return(
    <>
      <AboutMe />
      <Skills />
      <Education />
      <Projects />
    </>
  );
}

export default Main;