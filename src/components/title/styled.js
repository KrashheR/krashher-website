import styled from "styled-components";
import { TitleColor, TitleType } from "./title";

export const StyledTitle = styled.h1`
  text-transform: uppercase;
  padding: ${(props) => {
    let padding = "0";
    if (props.$titleType === TitleType.CARD) {
      padding = "18px 0 12px 0";
    } else if (props.$titleType === TitleType.SOFTSKILLS) {
      padding = "0 0 5px 0";
    }
    return padding;
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

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}){
    font-size: ${(props) => {
      if (props.$titleType === TitleType.SOFTSKILLS) {
        return props.theme.fontSizes.softSkillsTitleTablet;
      }
    }};
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}){
    font-size: ${(props) => {
      return props.$titleType === TitleType.SECTION ? props.theme.fontSizes.sectionTitleMobile : props.theme.fontSizes.cardTitleMobile
    }};
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}){
    font-size: ${(props) => {
      return props.$titleType === TitleType.SECTION ? props.theme.fontSizes.sectionTitleMobileSmall : props.theme.fontSizes.cardTitleMobileSmall
    }};
  }

`;


