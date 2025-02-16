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
    return props.$color === TitleColor.GRAY
      ? props.theme.colors.textGray
      : props.theme.colors.textPrimary;
  }};
  font-size: ${(props) => {
    return props.$titleType === TitleType.SECTION
      ? props.theme.fontSizes.sectionTitle
      : props.theme.fontSizes.cardTitle;
  }};
  font-weight: ${(props) => {
    if (
      props.$titleType === TitleType.SECTION ||
      props.$titleType === TitleType.EXPERIENCE
    ) {
      return 700;
    }
    return 400;
  }};
  text-align: ${(props) => {
    if (props.$titleType === TitleType.SECTION) {
      return "left";
    }
    return "center";
  }};

  margin-bottom: ${(props) =>
    props.$titleType === TitleType.SECTION ? "50px" : "0"};

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    font-size: ${(props) => {
      if (props.$titleType === TitleType.SOFTSKILLS) {
        return props.theme.fontSizes.softSkillsTitleTablet;
      }
    }};
  }

  border-bottom: ${(props) => (props.$withUnderline ? "2px solid " : "0")};
  border-color: ${(props) => props.theme.colors.primary};

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    font-size: ${(props) => {
      return props.$titleType === TitleType.SECTION
        ? props.theme.fontSizes.sectionTitleMobile
        : props.theme.fontSizes.cardTitleMobile;
    }};
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    font-size: ${(props) => {
      return props.$titleType === TitleType.SECTION
        ? props.theme.fontSizes.sectionTitleMobileSmall
        : props.theme.fontSizes.cardTitleMobileSmall;
    }};
  }
`;
