import React, { Children } from "react";
import { StyledButton } from "./styled";

export const ButtonType = {
  GITHUB:"github",
  DEMO:"demo"
}

function Button ({ buttonType, children }) {
  return(
    <StyledButton $buttonType = {buttonType}> {children}
    </StyledButton>
  )
}

export default Button;