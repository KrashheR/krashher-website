import styled from "styled-components";

export const StyledProjectsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  margin-top: 50px;
  grid-gap: 80px;
  list-style: none;

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    align-items: normal;
  }
`;