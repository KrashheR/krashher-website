import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
  list-style-type: none;
  transform-style: preserve-3d;
  transition: 0.7s ease;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    gap: 10px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    position: absolute;
    flex-direction: column;
    justify-content: center;
    height: ${window.innerHeight}px;
    width: 100%;
    top: 0;
    right: 0;
    z-index: 1;
    opacity: ${(props) => (props.$isToggle ? 1 : 0)};
    background-color: ${(props) => props.theme.colors.bg};
    transform: ${(props) => {
      return props.$isToggle === true
        ? "translate3d(0px, 0px, 0px)"
        : "translate3d(0px, -100%, 0px)";
    }};
    transition: all 0.5s ease-in-out;
  }
`;

export const StyledLi = styled.li`
  position: relative;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.textPrimary};

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    border-bottom: 2px solid ${(props) => props.theme.colors.textPrimary};
    text-align: center;
    margin-right: 0px;
    padding: 20px 0;
    font-size: 1.5rem;
  }
`;

export const StyledLink = styled.a`
  padding: 1px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.textPrimary};

  &:before {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    transition: 0.4s all ease;
    background: ${(props) => props.theme.colors.textPrimary};
    left: 0;
    z-index: -1;
  }

  &:hover {
    color: ${(props) => props.theme.colors.bg};
    &:before {
      width: 100%;
    }
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    &:after {
      display: none;
    }
  }
`;
