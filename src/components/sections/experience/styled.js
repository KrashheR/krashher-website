import styled from "styled-components";

export const StyledExperience = styled.section`
  padding-top: 80px;

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    flex-direction: column;
    justify-content: space-around;
    gap: 20px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    gap: 0;
  }
`;

export const StyledExperienceList = styled.ul`
  list-style: none;
`;
