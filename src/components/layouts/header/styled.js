import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  padding: 14px 0;
  z-index: 2;
  background-color: ${(props) => props.theme.colors.bg};
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
`;
