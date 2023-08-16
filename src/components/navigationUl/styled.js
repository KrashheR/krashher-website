import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;
  list-style-type: none;
  transform-style: preserve-3d;
  opacity: ${(props) => {
    return props.$toggle === true ? 1 : 0;
  }};
  transition: 0.7s ease;
  transform: ${(props) => {
    return props.$toggle === true ? "translate3d(0px, 0px, 0px)" : "translate3d(80px, 0px, 0px)";
  }};
  pointer-events: ${(props) => {
    return props.$toggle === true ? "auto" : "none";
  }};

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    gap: 10px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    position: absolute;
    flex-direction: column;
    justify-content: center;
    height: -webkit-fill-available;
    width: 100%;
    top: 0;
    right: 0;
    z-index: 1;
    opacity: 1;
    background-color: ${(props) => props.theme.colors.bg};
    transform: ${(props) => {
      return props.$toggle === true ? "translate3d(0px, 0px, 0px)" : "translate3d(0px, -100%, 0px)";
    }};
  }
`;

export const StyledLi = styled.li`
  font-size: 0.8rem;
  font-weight: 700;
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
  text-decoration: none;
  color: ${(props) => props.theme.colors.textPrimary};
`;