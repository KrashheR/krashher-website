import styled from "styled-components";

export const StyledSkills = styled.article`

`;

export const StyledSkillsStack = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-gap: 40px;
  align-items: center;

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
`;

export const StyledSkillsSubtitle = styled.h3`
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 26px;
  margin: 100px 0 50px 0;
  text-align: left;
  border-bottom: 2px solid ${(props) => props.theme.colors.textPrimary};

`;

export const StyledSkillsSoftContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  grid-gap: 40px;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    display: flex;
    flex-direction: column;
  }
`;
