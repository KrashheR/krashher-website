import React from "react";
import { StyledDescription } from "./styled";

function Description ({ children }) {
  return(
    <StyledDescription>{ children }</StyledDescription>
  );
}

export default Description;