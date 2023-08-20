import React, { Suspense, lazy } from "react";
import { StyledProjects, StyledProjectsGrid } from "./styled";
import Title, { TitleColor, TitleLevel, TitleType } from "../title/title";
import Data from "../../data/projectsData.json";
import Container from "../container/container";
import { useInView } from "react-intersection-observer";
const Card = lazy(() => import("../card/card"));

function Projects () {
  const { ref, inView } = useInView({triggerOnce: true});

  return (
    <StyledProjects id="projects">
      <Container>
        <Title level={TitleLevel.H2} color={TitleColor.PRIMARY} type={TitleType.SECTION}>МОИ ПРОЕКТЫ</Title>
        <StyledProjectsGrid ref={ref}>
          <Suspense fallback={<div />}>{inView && <Card data={Data} animationOrder={1}/>}</Suspense>
        </StyledProjectsGrid>
      </Container>
    </StyledProjects>
  );
}

export default Projects;