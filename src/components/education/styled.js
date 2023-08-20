import styled from "styled-components";

export const StyledEducation = styled.section`
  padding: 100px 0;
`;

export const StyledEducationGrid = styled.div`
  display: grid;
  grid-template-areas: "universityBac . htmlacademy"
                       "andOther . learnjs"
                       "universityMag . react";
  grid-gap: 40px;
  margin-top: 50px;

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    display: flex;
    flex-direction: column;
  }
`;

