import styled from "styled-components";

export const StyledExperienceItem = styled.li`
  position: relative;
`;

export const StyledExperienceItemContent = styled.div`
  padding: 36px;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    padding: 32px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    padding: 24px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    padding: 18px;
  }
`;

export const StyledExperienceItemCards = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 60px;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    gap: 24px;
    margin-top: 30px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const StyledExperienceItemTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
`;

export const StyledExperienceItemDescriptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledExperienceItemTopCorner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 38px;
  height: 38px;
  border-top: 2px solid ${(props) => props.theme.colors.primary};
  border-left: 2px solid ${(props) => props.theme.colors.primary};

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    width: 24px;
    height: 24px;
  }
`;

export const StyledExperienceItemBottomCorner = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 38px;
  height: 38px;
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  border-right: 2px solid ${(props) => props.theme.colors.primary};

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    width: 24px;
    height: 24px;
  }
`;
