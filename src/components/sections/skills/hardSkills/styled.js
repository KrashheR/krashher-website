import styled from "styled-components";

export const StyledHardSkills = styled.div`

`;

export const StyledHardSkillsStack = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 40px;
  place-items: center;
  width: 100%;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  }
`;

export const StyledHardSkillsSubtitle = styled.h3`
  margin: 50px 0;
  border-bottom: 2px solid ${(props) => props.theme.colors.textPrimary};
  text-align: left;
  font-size: 26px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.textPrimary};

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    font-size: 20px;
  }
`;