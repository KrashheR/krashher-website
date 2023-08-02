import React from "react";
import { StyledCard, StyledDescription, StyledImage } from "./styled";


function Card ( {data} ) {

  return (
    <StyledCard>
      <StyledImage src={require("../../assets/images/oculus.png")}/>
      <StyledDescription>
        {data.description}
      </StyledDescription>

    </StyledCard>
  );
}

export default Card;