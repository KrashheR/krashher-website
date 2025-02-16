import styled from "styled-components";

export const StyledEducationPlacesList = styled.ul`
  display: grid;
  grid-template-areas:
    "universityBac . htmlacademy"
    "andOther . learnjs"
    "universityMag . react";
  grid-gap: 40px;
  list-style: none;

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    grid-gap: 30px;
  }
`;
