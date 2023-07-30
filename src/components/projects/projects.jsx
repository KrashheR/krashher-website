import React from "react";
import { StyledProjects, StyledProjectsGrid } from "./styled";
import Title, { TitleColor, TitleLevel } from "../title/title";


function Projects () {
  return (
    <StyledProjects>
      <Title level={TitleLevel.H2} color={TitleColor.PRIMARY}>МОИ ПРОЕКТЫ</Title>
      <StyledProjectsGrid>

      </StyledProjectsGrid>
    </StyledProjects>
  );
}

export default Projects;