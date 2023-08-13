import styled from "styled-components"

export const StyledAboutMe = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding-bottom: 15em;

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    flex-direction: column;
    justify-content: space-around;
    padding-bottom: 5em;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    gap: 0;
  }
`;

export const StyledAboutMeText = styled.p`
  max-width: 600px;
  font-weight: 900;
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 25px;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    max-width: 450px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    padding-bottom: 10px;
    text-align: center;
    max-width: 550px;
    font-size: 3.5vw;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    font-size: 22px;
  }

`;

export const StyledAboutMeLink = styled.a`
  color: #dc2b46;
`;