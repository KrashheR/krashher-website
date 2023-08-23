import styled from "styled-components";

export const StyledEducationPlace = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: ${(props) => props.$position};
  border-left: 4px solid ${(props) => props.theme.colors.primary};
  border-radius: 15px;
`;
