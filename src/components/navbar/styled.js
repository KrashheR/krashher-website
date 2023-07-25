import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;
  list-style-type: none;
`;

export const StyledNav = styled.nav`
  display: flex;
`;

export const StyledLi = styled.li`
  font-size: 0.8rem;
  font-weight: 900;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.textPrimary};
`;

export const StyledButton = styled.button`
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.bg};
`;