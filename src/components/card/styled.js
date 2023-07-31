import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  border: 2px solid ${(props) => props.theme.colors.primary};
`;

export const StyledImage = styled.img`

`;