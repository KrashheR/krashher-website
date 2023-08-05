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

export const StyledDescription = styled.p`
  color: ${(props) => props.theme.colors.textGray};
  font-size: 18px;
  padding: 0 20px;
  font-weight: 500;

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}){
    font-size: 16px;
  }
`;

export const StyledGithubLink = styled.a`
  color: ${(props) => props.theme.colors.textGray};
  padding: 10px;
  border: 2px solid ${(props) => props.theme.colors.textGray};
  border-radius: 20px;
  font-weight: 700;
  text-decoration: none;
  font-size: 16px;
  transition: 0.3s ease;

  &:hover{
    background-color: ${(props) => props.theme.colors.textGray};
    color: ${(props) => props.theme.colors.bg};
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}){
    font-size: 14px;
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.mobileSmall}){
    font-size: 12px;
  }
`;

export const StyledDemoLink = styled.a`
  color: ${(props) => props.theme.colors.textPrimary};
  padding: 10px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 20px;
  font-weight: 700;
  text-decoration: none;
  font-size: 16px;
  transition: 0.3s ease;

  &:hover{
    background-color: ${(props) => props.theme.colors.textPrimary};
    color: ${(props) => props.theme.colors.bg};
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}){
    font-size: 14px;
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.mobileSmall}){
    font-size: 12px;
  }
`;

export const StyledLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledCardTitle = styled.span`
  padding: 14px 0;
  text-align: center;
  font-size: 24px;
  text-transform: uppercase;

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}){
    font-size: 20px;
  }
`;