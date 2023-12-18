import styled from "styled-components";

export const StyledSoftSkills = styled.div`

`;

export const StyledSoftSkill = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
  border: 2px solid ${(props) => props.theme.colors.textPrimary};
  border-radius: 20px;
  color: ${(props) => props.theme.colors.textPrimary};
  overflow: hidden;

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    padding: 14px;
    width: -webkit-fill-available;
  }

`;

export const StyledSoftSkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 30px;
  align-items: center;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-template-rows: repeat(3, 1fr);
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    grid-gap: 20px;
  }
`;

export const StyledSoftSkillsStack = styled.div`
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

export const StyledSoftSkillsSubtitle = styled.h3`
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