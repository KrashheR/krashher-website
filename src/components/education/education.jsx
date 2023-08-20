import React, { Suspense, lazy } from "react";
import { StyledEducation, StyledEducationGrid } from "./styled";
import Title, { TitleColor, TitleLevel, TitleType } from "../title/title";
import Container from "../container/container";
import { motion } from "framer-motion";
import educationData from "../../data/educationData.json";
import { useInView } from "react-intersection-observer";
const EducationPlaces = lazy(() => import("../educationPlaces/educationPlaces"));

function Education() {
  const { ref, inView } = useInView({triggerOnce: true});

  return(
    <Container>
      <StyledEducation id="education" ref={ref}>
        <Title level={TitleLevel.H2} color={TitleColor.PRIMARY} type={TitleType.SECTION}>Образование</Title>
        <StyledEducationGrid as={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Suspense fallback={<div />}>{inView && <EducationPlaces data={educationData}/>}</Suspense>
        </StyledEducationGrid>
      </StyledEducation>
    </Container>
  );
}

export default Education;