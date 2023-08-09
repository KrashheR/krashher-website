import React from "react";
import { StyledStackImg } from "./styled";
import { motion } from "framer-motion";
import jsIcon from "../../assets/images/js.png";
import htmlIcon from "../../assets/images/html.png";
import scssIcon from "../../assets/images/scss.svg";
import sassIcon from "../../assets/images/sass.png";
import gulpIcon from "../../assets/images/gulp.png";
import bemIcon from "../../assets/images/bem.png";
import cssIcon from "../../assets/images/css.svg";
import gitIcon from "../../assets/images/git.svg";
import reactIcon from "../../assets/images/react.svg";
import reduxIcon from "../../assets/images/redux.svg";
import tsIcon from "../../assets/images/ts.svg";
import vscodeIcon from "../../assets/images/vscode.svg";
import webpackIcon from "../../assets/images/webpack.svg";
import figmaIcon from "../../assets/images/figma.png";
import wordpressIcon from "../../assets/images/wordpress.png";
import styledComponentsIcon from "../../assets/images/styled-components.png";

function Stack({ stackList }) {
  const iconList = {"html":htmlIcon,
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

  const stackAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: {delay: custom * 0.15},
  })
  }

  return(
    <>
      {stackList.map((item, index) =>(
        <StyledStackImg as={motion.img} custom={index+1} variants={stackAnimation} src = {iconList[item]} alt={item} key={index} />
      ))}
    </>
  );
}

export default Stack;