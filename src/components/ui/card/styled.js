import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 540px;
  box-shadow: 0px 0px 20px 10px #000;
  border-radius: 20px;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 0px 30px 14px #000;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    max-width: 500px;
  }
`;

export const StyledImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export const StyledPicture = styled.picture`
  display: flex;
  width: 100%;
  height: 340px;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    max-height: 320px;
    height: auto;
  }
`;

export const StyledCardLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-top: auto;
`;

export const StyledStack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 30px 0;
  gap: 5px;

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    margin: 20px 0;
  }
`;
