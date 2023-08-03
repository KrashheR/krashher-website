import styled from "styled-components";
import { ButtonType } from "./button";

export const StyledButton = styled.button`
  border-color: ${(props) => {
    let borderColor = props.theme.colors.githubButton;
    if (props.$buttonType === ButtonType.DEMO) {
      borderColor = props.theme.colors.demoButton;
    }
    return borderColor;
  }};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;