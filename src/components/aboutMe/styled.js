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
    gap: 20px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    gap: 0;
  }
`;

export const StyledAboutMeText = styled.p`
  max-width: 700px;
  font-weight: 900;
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 25px;
`;

export const StyledAboutMeLink = styled.a`
  color: #dc2b46;
`;