import styled from "styled-components";

export const StyledStackImg = styled.img`
  height: 60px;

  justify-self: center;

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    max-height: 40px;
    max-width: 40px;
  }
`;

