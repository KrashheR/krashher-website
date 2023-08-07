import React from "react";
import { StyledProjects, StyledProjectsGrid } from "./styled";
import Title, { TitleColor, TitleLevel, TitleType } from "../title/title";
import Card from "../card/card";
import Data from "../../data/projectsData.json";
import Container from "../container/container";

function Projects () {
  return (
    <StyledProjects id="projects">
      <Container>
        <Title level={TitleLevel.H2} color={TitleColor.PRIMARY} type={TitleType.SECTION}>МОИ ПРОЕКТЫ</Title>
        <StyledProjectsGrid>
          <Card data={Data[0]}/>
          <Card data={Data[0]}/>
          <Card data={Data[0]}/>
          <Card data={Data[0]}/>
          <Card data={Data[0]}/>
        </StyledProjectsGrid>
      </Container>
    </StyledProjects>
  );
}

export default Projects;