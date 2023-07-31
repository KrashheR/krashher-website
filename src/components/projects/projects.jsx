import React from "react";
import { StyledProjects, StyledProjectsGrid } from "./styled";
import Title, { TitleColor, TitleLevel } from "../title/title";
import Card from "../card/card";


function Projects () {
  return (
    <StyledProjects>
      <Title level={TitleLevel.H2} color={TitleColor.PRIMARY}>МОИ ПРОЕКТЫ</Title>
      <StyledProjectsGrid>
        <Card />
      </StyledProjectsGrid>
    </StyledProjects>
  );
}

export default Projects;