import styled from 'styled-components';

export const StyledDescription = styled.p`
  color: ${(props) => props.theme.colors.textGray};
  font-size: 20px;
  padding: 0 20px;
  font-weight: 300;
  text-align: center;

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    font-size: 16px;
    padding: 0 5px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    font-size: 14px;
  }
`;
