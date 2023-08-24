import React from "react";
import { StyledProjects, StyledProjectsGrid } from "./styled";
import Title, { TitleColor, TitleLevel, TitleType } from "../../ui/title/title";
import Data from "../../../data/projectsData.json";
import Container from "../../containers/container/container";
import Card from "../../ui/card/card";

function Projects() {
  return (
    <StyledProjects id="projects">
      <Container>
        <Title
          level={TitleLevel.H2}
          color={TitleColor.PRIMARY}
          type={TitleType.SECTION}
        >
          МОИ ПРОЕКТЫ
        </Title>
        <StyledProjectsGrid>
          <Card data={Data} />
        </StyledProjectsGrid>
      </Container>
    </StyledProjects>
  );
}

export default Projects;
