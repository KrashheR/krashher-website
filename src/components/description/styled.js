import styled from "styled-components";

export const StyledDescription = styled.p`
  color: ${(props) => props.theme.colors.textGray};
  font-size: 20px;
  padding: 0 20px;
  font-weight: 500;
  text-align: center;

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}){
    font-size: 16px;
  }
`;