import React from "react";
import { StyledProjects, StyledProjectsGrid, StyledProjectsTitle } from "./styled";
import Title, { TitleColor, TitleLevel, TitleType } from "../title/title";
import Card from "../card/card";
import Data from "../../data/projectsData.json";

function Projects () {
  return (
    <StyledProjects id="projects">
      <Title level={TitleLevel.H2} color={TitleColor.PRIMARY} type={TitleType.SECTION}>МОИ ПРОЕКТЫ</Title>

      <StyledProjectsGrid>
        <Card data={Data[0]}/>
        <Card data={Data[0]}/>
        <Card data={Data[0]}/>
        <Card data={Data[0]}/>
        <Card data={Data[0]}/>
      </StyledProjectsGrid>
    </StyledProjects>
  );
}

export default Projects;