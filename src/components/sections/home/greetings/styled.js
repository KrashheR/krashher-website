import styled from "styled-components";

export const StyledGreetings = styled.h1`
  display: flex;
  overflow: hidden;
  height: 100vh;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 40px;
  font-weight: 700;
  gap: 8px;
  will-change: transform;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    font-size: 3vw;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    font-size: 6vw;
    flex-direction: column;
    gap: 8px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.bigScreen}) {
    gap: 4px;
  }
`;
