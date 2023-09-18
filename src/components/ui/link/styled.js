import styled from "styled-components";
import { LinkType } from "./link";

export const StyledLink = styled.a`
  position: relative;
  color: ${(props) => {
    let color = props.theme.colors.textPrimary;
    if (props.$linkType === LinkType.GITHUB) {
      color = props.theme.colors.textGray;
    } else if (props.$linkType === LinkType.TELEGRAM) {
      color = props.theme.colors.telegram;
    }
    return color;
  }};
  padding: 10px;
  border: 2px solid
    ${(props) => {
      let color = props.theme.colors.textPrimary;
      if (props.$linkType === LinkType.GITHUB) {
        color = props.theme.colors.textGray;
      } else if (props.$linkType === LinkType.TELEGRAM) {
        color = props.theme.colors.telegram;
      }
      return color;
    }};
  border-radius: 20px;
  font-weight: 400;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.6s ease-in;
  text-align: center;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 0%;
    height: 100%;
    margin: auto;
    opacity: 0;
    border-radius: 16px;
    z-index: -10;
    background-color: ${(props) => {
      let color = props.theme.colors.textPrimary;
      if (props.$linkType === LinkType.GITHUB) {
        color = props.theme.colors.textGray;
      } else if (props.$linkType === LinkType.TELEGRAM) {
        color = props.theme.colors.telegram;
      }
      return color;
    }};
    transition:
      width 0.6s ease,
      opacity 0.4s ease-in-out;
  }

  &:hover {
    color: ${(props) => props.theme.colors.bg};

    &:after {
      width: 100%;
      opacity: 1;
    }
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    font-size: 14px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    font-size: 12px;
  }
`;
