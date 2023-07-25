import styled from "styled-components";
import { TitleColor } from "./title";

export const StyledTitle = styled.h1`
  color: ${(props) => {
    let textColor = props.theme.colors.textPrimary;
    if(props.$color === TitleColor.GRAY) {
      textColor = props.theme.colors.textGray;
    }
    return textColor;
  }};
`;