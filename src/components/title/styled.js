import styled from "styled-components";
import { TitleColor, TitleType } from "./title";

export const StyledTitle = styled.h1`
  padding: ${(props) => {
    return props.$titleType === TitleType.CARD ? "0 0 5px 0" : "0";
  }};
  color: ${(props) => {
    return props.$color === TitleColor.GRAY ? props.theme.colors.textGray : props.theme.colors.textPrimary;
  }};
  font-size: ${(props) => {
    return props.$titleType === TitleType.SECTION ? props.theme.fontSizes.sectionTitle : props.theme.fontSizes.cardTitle;
  }};
  font-weight: ${(props) => {
    return props.$titleType === TitleType.SECTION ? 700 : 400;
  }};
  text-align: ${(props) => {
    return props.$titleType === TitleType.SECTION ? "left" : "center";
  }};

  text-transform: uppercase;

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}){
    font-size: ${(props) => {
      return props.$titleType === TitleType.SECTION ? props.theme.fontSizes.sectionTitleMobile : props.theme.fontSizes.cardTitleMobile
    }};
    padding: ${(props) => {
      return props.$titleType === TitleType.CARD ? "0 0 5px 0" : "0";
    }};
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}){
    font-size: ${(props) => {
      return props.$titleType === TitleType.SECTION ? props.theme.fontSizes.sectionTitleMobileSmall : props.theme.fontSizes.cardTitleMobileSmall
    }};
  }

`;


