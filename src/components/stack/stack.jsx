import React from "react";
import { StyledStack, StyledStackImg } from "./styled";
import jsIcon from "../../assets/images/js.png"
import htmlIcon from "../../assets/images/html.png"
import sassIcon from "../../assets/images/sass.png"
import gulpIcon from "../../assets/images/gulp.png"
import bemIcon from "../../assets/images/bem.png"

function Stack({ stackList }) {
  const iconList = {"js": jsIcon,
                    "html":htmlIcon,
                    "sass": sassIcon,
                    "gulp": gulpIcon,
                    "bem": bemIcon};

  return(
    <StyledStack>
      {stackList.map((item, index) =>(
        <StyledStackImg src = {iconList[item]} alt={iconList[item]} key={index} />
      ))}
    </StyledStack>
  );
}

export default Stack;