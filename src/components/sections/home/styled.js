import styled from "styled-components";

export const StyledHome = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    flex-direction: column;
    justify-content: space-around;
    gap: 20px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    gap: 0;
  }
`;
