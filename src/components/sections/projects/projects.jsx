import React from "react";
import { StyledProjects } from "./styled";
import Title, { TitleColor, TitleLevel, TitleType } from "../../ui/title/title";
import projectsData from "../../../data/projectsData.json";
import ProjectsList from "./projectsList/projectsList";

function Projects() {
  return (
    <StyledProjects id="projects">
      <Title
        level={TitleLevel.H2}
        color={TitleColor.PRIMARY}
        type={TitleType.SECTION}
      >
        МОИ ПРОЕКТЫ
      </Title>
      <ProjectsList projectsData={projectsData}/>
    </StyledProjects>
  );
}

export default Projects;
