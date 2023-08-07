import styled from "styled-components";
import { LinkType } from "./link";

export const StyledLink = styled.a`
  color: ${(props) => {
    let color = props.theme.colors.textPrimary;
    if(props.$linkType === LinkType.GITHUB){
      color = props.theme.colors.textGray;
    }
    return color;
  }};
  padding: 10px;
  border: 2px solid ${(props) => {
    let color = props.theme.colors.textPrimary;
    if(props.$linkType === LinkType.GITHUB){
      color = props.theme.colors.textGray;
    }
    return color;
  }};
  border-radius: 20px;
  font-weight: 700;
  text-decoration: none;
  font-size: 16px;
  transition: 0.3s ease;

  &:hover{
    background-color: ${(props) => {
      let color = props.theme.colors.textPrimary;
      if(props.$linkType === LinkType.GITHUB){
        color = props.theme.colors.textGray;
      }
      return color;
    }};
    color: ${(props) => {
      let color = props.theme.colors.textPrimary;
      if(props.$linkType === LinkType.GITHUB){
        color = props.theme.colors.textGray;
      }
      return color;
    }};
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}){
    font-size: 14px;
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.mobileSmall}){
    font-size: 12px;
  }
`;