import styled from "styled-components";

export const StyledUnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 32px;

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    padding-left: 14px;
  }
`;

export const StyledListItem = styled.li`
  color: #e8e8e8;
  font-size: 18px;
  line-height: 24px;
  font-weight: 300;

  &::marker {
    color: #edf738;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    line-height: 20px;
    font-size: 16px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    line-height: 18px;
    font-size: 14px;
  }
`;
