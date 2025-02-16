import styled from "styled-components";

export const StyledExperienceItemsList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 8px;
`;

export const StyledExperienceItemsTitle = styled.h3`
  margin-bottom: 10px;
  border-bottom: 2px solid ${(props) => props.theme.colors.textPrimary};
  text-align: left;
  font-size: 26px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.textPrimary};

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    font-size: 20px;
  }
`;
