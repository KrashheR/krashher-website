import styled from "styled-components";

export const StyledEducation = styled.section`
  margin: 100px 0;
`;

export const StyledEducationGrid = styled.div`
  display: grid;
  grid-template-areas: "universityBac . ."
                       "universityBac . htmlacademy"
                       ". . ."
                       ". . learnjs"
                       "universityMag . ."
                       "universityMag . react";
  grid-gap: 40px;
  margin-top: 80px;
`;

