import styled from "styled-components";

export const StyledStack = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
;`

export const StyledStackImg = styled.img`
  max-height: 50px;
  max-width: 50px;

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    max-height: 40px;
    max-width: 40px;
  }
`;