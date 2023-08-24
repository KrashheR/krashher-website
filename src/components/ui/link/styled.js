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
  transition: 0.3s ease;
  text-align: center;

  &:after {
    content: "";
    position: absolute;
    height: 1px;
    left: 0;
    bottom: 0;
    margin: auto;
    width: 0%;
    border-radius: 15px;
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
  }

  &:hover {
    color: ${(props) => props.theme.colors.bg};
    &:after {
      animation: fillLink 0.7s forwards;
      -webkit-animation: fillLink 0.7s forwards;
      -moz-animation: fillLink 0.7s forwards;
    }
  }

  @-webkit-keyframes fillLink {
    0% {
      background-color: ${(props) => props.theme.colors.bg};
      width: 0%;
      height: 100%;
    }

    10% {
      background-color: ${(props) => props.theme.colors.bg};
      width: 5%;
      height: 100%;
    }
    100% {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    font-size: 14px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    font-size: 12px;
  }
`;
