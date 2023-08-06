import styled from "styled-components";

export const StyledSoftSkill = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 2px solid ${(props) => props.theme.colors.textPrimary};
  border-radius: 20px;
  color: ${(props) => props.theme.colors.textPrimary};
  transition: 0.2s ease-in-out;

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    padding: 14px;
    width: -webkit-fill-available;
  }

`;

export const StyledSoftSkillTitle = styled.h4`
  font-size: 20px;

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    font-size: 18px;
  }
`;

export const StyledSoftSkillDescription = styled.p`
  color: ${(props) => props.theme.colors.textGray};
  font-size: 18px;
  text-align: center;
  font-weight: 600;

`;