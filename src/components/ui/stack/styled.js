import styled from "styled-components";

export const StyledStackImg = styled.img`
  height: 60px;
  max-width: 60px;
  justify-self: center;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    max-height: 55px;
    max-width: 55px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    max-height: 50px;
    max-width: 50px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    max-height: 40px;
    max-width: 40px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    max-height: 30px;
    max-width: 30px;
  }
`;

export const StyledStackItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.theme.colors.textGray};
  text-align: center;
  font-size: 18px;
  font-weight: 300;

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    font-size: 16px;
  }
`;
