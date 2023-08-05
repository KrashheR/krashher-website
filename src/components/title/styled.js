import styled from "styled-components";
import { TitleColor, TitleType } from "./title";

export const StyledTitle = styled.h1`
  padding: ${(props) => {
    let padding = "0";
    if(props.type === TitleType.CARD) {
      padding = "14px 0";
    }
    return padding;
  }};
  color: ${(props) => {
    let textColor = props.theme.colors.textPrimary;
    if(props.$color === TitleColor.GRAY) {
      textColor = props.theme.colors.textGray;
    }
    return textColor;
  }};
  font-size: ${(props) => {
    let fontSize = props.theme.fontSizes.cardTitle;
    if(props.type === TitleType.SECTION) {
      fontSize = props.theme.fontSizes.sectionTitle;
    }
    return fontSize;
  }};
  font-weight: ${(props) => {
    let fontWeight = 700;
    if(props.type === TitleType.SECTION) {
      fontWeight = 900;
    }
    return fontWeight;
  }};
  text-align: center;
  text-transform: uppercase;

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}){
    font-size: ${(props) => {
      let fontSize = props.theme.fontSizes.cardTitleMobile;
      if(props.type === TitleType.SECTION) {
        fontSize = props.theme.fontSizes.sectionTitleMobile;
      }
      return fontSize;
    }}
  }

`;


