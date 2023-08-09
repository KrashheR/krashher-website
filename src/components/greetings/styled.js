import styled from "styled-components";

export const StyledGreetings = styled.h1`
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;
  text-align: left;
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 65px;
  font-weight: 900;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    font-size: max(6vw, 46px);
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    font-size: 8.5vw;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    gap: 6px;
    font-size: 9vw;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    font-size: 30px;
  }
`;

