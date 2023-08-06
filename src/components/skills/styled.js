import styled from "styled-components";

export const StyledSkills = styled.article`
  margin-top: 80px;
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
  color: ${(props) => props.theme.colors.textGray};
  font-size: 26px;
  margin: 60px 0 30px 0;
  text-align: center;
`;

export const StyledSkillsSoftContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  grid-gap: 40px;

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    display: flex;
    flex-direction: column;
  }
`;
