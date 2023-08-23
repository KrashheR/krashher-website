import styled from 'styled-components';

export const StyledSkills = styled.section``;

export const StyledSkillsStack = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 40px;
  align-items: center;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
`;

export const StyledSkillsSubtitle = styled.h3`
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 26px;
  margin: 80px 0 50px 0;
  text-align: left;
  border-bottom: 2px solid ${(props) => props.theme.colors.textPrimary};
  font-weight: 700;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    margin: 50px 0 50px 0;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    font-size: 20px;
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

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    display: flex;
    flex-direction: column;
  }
`;
