import styled from "styled-components";

export const StyledSoftSkill = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 2px solid ${(props) => props.theme.colors.textPrimary};
  border-radius: 20px;
  color: ${(props) => props.theme.colors.textPrimary};
  overflow: hidden;


  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    padding: 14px;
    width: -webkit-fill-available;
  }

`;
