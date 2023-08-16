import styled from "styled-components";
import { LinkType } from "./link";

export const StyledLink = styled.a`
  color: ${(props) => {
    let color = props.theme.colors.textPrimary;
    if(props.$linkType === LinkType.GITHUB){
      color = props.theme.colors.textGray;
    } else if (props.$linkType === LinkType.TELEGRAM){
      color = props.theme.colors.telegram;
    }
    return color;
  }};
  padding: 10px;
  border: 2px solid ${(props) => {
    let color = props.theme.colors.textPrimary;
    if(props.$linkType === LinkType.GITHUB){
      color = props.theme.colors.textGray;
    } else if (props.$linkType === LinkType.TELEGRAM){
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
  &:hover{
    background-color: ${(props) => {
      let color = props.theme.colors.textPrimary;
      if(props.$linkType === LinkType.GITHUB){
        color = props.theme.colors.textGray;
      } else if (props.$linkType === LinkType.TELEGRAM){
        color = props.theme.colors.telegram;
      }
      return color;
    }};
    color: ${(props) => props.theme.colors.bg};
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}){
    font-size: 14px;
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.mobileSmall}){
    font-size: 12px;
  }
`;