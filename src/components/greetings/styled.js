import styled from "styled-components";

export const StyledGreetings = styled.h1`
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;
  text-align: left;
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 4.5rem;
`;

