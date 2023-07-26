import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;
  list-style-type: none;
  transform-style: preserve-3d;
  opacity: 0;
  transition: 0.3s ease;
`;

export const StyledLi = styled.li`
  font-size: 0.8rem;
  font-weight: 900;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.textPrimary};
`;