import styled from "styled-components"

export const StyledHome = styled.section`
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 108px);
  padding-top: 4em;
`;

export const StyledImage = styled.img`
  max-width: 350px;
  max-height: 350px;
  border-radius: 50%;
  padding: 10px;
  border: 4px solid  ${(props) => props.theme.colors.primary};
  aspect-ratio: auto 512 / 512;
`;

