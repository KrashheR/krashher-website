import styled from 'styled-components';

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
  max-width: 540px;
  max-height: 500px;
  border-radius: 20px 20px 0 0;

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    max-width: 500px;
  }
`;

export const StyledCardLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const StyledStack = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    margin: 20px 0;
  }
`;
