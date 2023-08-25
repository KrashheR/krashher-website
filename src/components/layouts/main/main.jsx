import React from "react";
import Projects from "../../sections/projects/projects";
import Skills from "../../sections/skills/skills";
import Education from "../../sections/education/education";
import AboutMe from "../../sections/aboutMe/aboutMe";
import Container from "../../containers/container/container";

function Main() {
  return (
    <Container>
      <AboutMe />
      <Skills />
      <Education />
      <Projects />
    </Container>
  );
}

export default Main;
