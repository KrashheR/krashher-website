import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: -webkit-fill-avaiable;
  justify-content: space-between;
`;

export const StyledToggler = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 40px;
  height: 40px;
  margin-left: 25px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.primary};
  background: none;
  transition: 0.3s ease;
  cursor: pointer;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    margin-left: 10px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    display: flex;
    z-index: 2;
  }
`;
