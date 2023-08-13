import styled from "styled-components";

export const StyledEducation = styled.section`
  margin: 100px 0;

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    margin: 0;
  }
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

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    display: flex;
    flex-direction: column;
  }
`;

