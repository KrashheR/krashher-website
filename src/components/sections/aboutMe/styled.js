import styled from "styled-components"

export const StyledAboutMe = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    padding: 0;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    gap: 20px;
    padding-bottom: 10px;
  }
`;

export const StyledAboutMeText = styled.p`
  max-width: 600px;
  font-weight: 300;
  color: ${(props) => props.theme.colors.textGray};
  font-size: 25px;
  text-align: left;
  transition: 0.8s ease;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    max-width: 450px;
    padding: 5px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    padding-bottom: 10px;
    text-align: center;
    max-width: 550px;
    font-size: 3.5vw;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    font-size: 20px;
  }
`;

export const StyledAboutMeLink = styled.a`
  color: ${(props) => props.theme.colors.textPrimary};
  font-weight: 400;
`;

export const StyledKeyword = styled.span`
  color: ${(props) => props.theme.colors.textPrimary};
  font-weight: 400;
`;