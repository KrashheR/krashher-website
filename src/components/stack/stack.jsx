import React from "react";
import { StyledStackImg, StyledStackSpan } from "./styled";
import { motion } from "framer-motion";
import jsIcon from "../../assets/images/js.png";
import htmlIcon from "../../assets/images/html.png";
import scssIcon from "../../assets/images/scss.png";
import sassIcon from "../../assets/images/sass.png";
import gulpIcon from "../../assets/images/gulp.png";
import bemIcon from "../../assets/images/bem.png";
import cssIcon from "../../assets/images/css.png";
import gitIcon from "../../assets/images/git.svg";
import reactIcon from "../../assets/images/react.svg";
import reduxIcon from "../../assets/images/redux.svg";
import tsIcon from "../../assets/images/ts.png";
import vscodeIcon from "../../assets/images/vscode.svg";
import webpackIcon from "../../assets/images/webpack.svg";
import figmaIcon from "../../assets/images/figma.png";
import wordpressIcon from "../../assets/images/wordpress.png";
import styledComponentsIcon from "../../assets/images/styled-components.png";

function Stack({ stackList, cardStack }) {
  const iconsList = {"html":htmlIcon,
                    "css": cssIcon,
                    "sass": sassIcon,
                    "scss": scssIcon,
                    "js": jsIcon,
                    "gulp": gulpIcon,
                    "bem": bemIcon,
                    "git": gitIcon,
                    "react": reactIcon,
                    "redux": reduxIcon,
                    "ts": tsIcon,
                    "vscode": vscodeIcon,
                    "webpack": webpackIcon,
                    "figma": figmaIcon,
                    "styled-components": styledComponentsIcon,
                    "wordpress": wordpressIcon,
                    };

  const namesList = {"html":"HTML",
                    "css": "CSS",
                    "sass": "SASS",
                    "scss": "SCSS",
                    "js": "JavaScript",
                    "gulp": "Gulp",
                    "bem": "BEM",
                    "git": "Git",
                    "react": "React",
                    "redux": "Redux",
                    "ts": "TypeScript",
                    "vscode": "VSCode",
                    "webpack": "Webpack",
                    "figma": "Figma",
                    "styled-components": "Styled-Components",
                    "wordpress": "WordPress",
                    };

  const stackAnimation = {
    hidden: {
      y: cardStack? 40: 100,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      scale: [1.3, 1],
      transition: {delay: custom * 0.2, duration: 0.45},
  })
  }

  if (cardStack) {
    return(
      <>
        {stackList.map((item, index) =>(
          <StyledStackImg as={motion.img} custom={index+1} variants={stackAnimation} src={iconsList[item]} alt={item} key={index} />
        ))}
      </>
    );
  } else {
    return(
      <>
        {stackList.map((item, index) =>(
          <StyledStackSpan as={motion.span} custom={index+1} key={index} variants={stackAnimation}>
            <StyledStackImg src={iconsList[item]} alt={item} />
            <p>{namesList[item]}</p>
          </StyledStackSpan>
        ))}
      </>
    );
  }


}

export default Stack;