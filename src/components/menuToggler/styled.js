import styled from "styled-components";

export const StyledMenuToggler = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 39px;
  height: 39px;
  margin-left: 25px;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.colors.primary};
  background: none;
  transition: 0.3s ease;
  cursor: pointer;
  padding: 5px;
`;
