import styled from "styled-components";

export const StyledGreetingsImage = styled.img`
  max-width: 350px;
  max-height: 350px;
  border-radius: 50%;
  padding: 10px;

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    max-width: 300px;
    max-height: 300px;
    padding: 6px;
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    max-width: 260px;
    max-height: 260px;
    padding: 4px;
  }

`;