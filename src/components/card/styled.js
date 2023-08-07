import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  box-shadow: 0px 0px 20px 10px #000;
  border-radius: 20px;
`;

export const StyledImage = styled.img`
  max-width: 500px;
  max-height: 500px;
  border-radius: 20px 20px 0 0;
`;

export const StyledCardLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledStack = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;