import styled from "styled-components";

export const StyledEducationPlace = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: ${(props) => props.$position};
  border-left: 3px solid ${(props) => props.theme.colors.primary};
  border-radius: 15px;

  @media(max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    padding: 5px 0;
    border-width: 2px;
  }
  `;
