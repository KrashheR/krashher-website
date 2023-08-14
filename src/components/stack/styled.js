import styled from "styled-components";

export const StyledStackImg = styled.img`
  height: 60px;
  width: 60px;
  justify-self: center;

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    max-height: 40px;
    max-width: 40px;
  }
`;

export const StyledStackSpan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  color: ${(props) => props.theme.colors.textGray};
  text-align: center;
  font-size: 18px;

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    font-size: 16px;
  }
`;

