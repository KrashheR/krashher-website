import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: ${(props) => props.theme.colors.bg};
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};
`;
