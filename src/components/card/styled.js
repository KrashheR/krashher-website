import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 4px;
`;

export const StyledImage = styled.img`
  max-width: 500px;
  max-height: 500px;

`;

export const StyledDescription = styled.p`
  color: ${(props) => props.theme.colors.textGray};
  font-size: 20px;
  padding: 10px;

`;

export const StyledGithubLink = styled.a`
  color: ${(props) => props.theme.colors.textGray};
  padding: 10px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
`;

export const StyledDemoLink = styled.a`
  color: ${(props) => props.theme.colors.textGray};
  padding: 10px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
`;

export const StyledLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;