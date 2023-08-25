import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  margin: 60px 0;

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    margin: 30px 0;
  }
`;
