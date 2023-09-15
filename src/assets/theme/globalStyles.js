import { createGlobalStyle } from "styled-components";

import MontserratRegularWoff2 from "../fonts/Montserrat-Regular.woff2";
import MontserratRegularWoff from "../fonts/Montserrat-Regular.woff";
import MontserratRegularTtf from "../fonts/Montserrat-Regular.ttf";
import MontserratRegularEot from "../fonts/Montserrat-Regular.eot";
import MontserratRegularSvg from "../fonts/Montserrat-Regular.svg";

import MontserratLightWoff2 from "../fonts/Montserrat-Light.woff2";
import MontserratLightWoff from "../fonts/Montserrat-Light.woff";
import MontserratLightTtf from "../fonts/Montserrat-Light.ttf";
import MontserratLightEot from "../fonts/Montserrat-Light.eot";
import MontserratLightSvg from "../fonts/Montserrat-Light.svg";

import MontserratBoldWoff2 from "../fonts/Montserrat-Bold.woff2";
import MontserratBoldWoff from "../fonts/Montserrat-Bold.woff";
import MontserratBoldTtf from "../fonts/Montserrat-Bold.ttf";
import MontserratBoldEot from "../fonts/Montserrat-Bold.eot";
import MontserratBoldSvg from "../fonts/Montserrat-Bold.svg";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Montserrat";
    src: local("Montserrat Regular"),
      local("Montserrat-Regular"),
      url(${MontserratRegularWoff2}) format("woff2"),
      url(${MontserratRegularWoff}) format("woff"),
      url(${MontserratRegularTtf}) format("truetype"),
      url(${MontserratRegularEot}) format("embedded-opentype"),
      url(${MontserratRegularSvg}) format("svg");
    font-weight: 400;
  };

  @font-face {
    font-family: "Montserrat";
    src: local("Montserrat Light"),
      local("Montserrat-Light"),
      url(${MontserratLightWoff2}) format("woff2"),
      url(${MontserratLightWoff}) format("woff"),
      url(${MontserratLightTtf}) format("truetype"),
      url(${MontserratLightEot}) format("embedded-opentype"),
      url(${MontserratLightSvg}) format("svg");
    font-weight: 300;
  };

  @font-face {
    font-family: "Montserrat";
    src: local("Montserrat Bold"),
      local("Montserrat-Bold"),
      url(${MontserratBoldWoff2}) format("woff2"),
      url(${MontserratBoldWoff}) format("woff"),
      url(${MontserratBoldTtf}) format("truetype"),
      url(${MontserratBoldEot}) format("embedded-opentype"),
      url(${MontserratBoldSvg}) format("svg");
    font-weight: 700;
  };

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  @media (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }


  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${(props) => props.theme.colors.bg};
  }
`;

export default GlobalStyles;
