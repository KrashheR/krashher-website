import styled from "styled-components";

export const StyledGreetings = styled.h1`
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 40px;
  font-weight: 900;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    font-size: 3vw;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    font-size: 3vw;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    gap: 6px;
    font-size: 3vw;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    font-size: 3vw;
  }
`;

