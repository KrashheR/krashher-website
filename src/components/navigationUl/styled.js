import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;
  list-style-type: none;
  transform-style: preserve-3d;
  opacity: ${(props) => {
    let opacity = 0;
    if (props.$toggle === true) {
      opacity = 1;
    }
    return opacity;
  }};
  transition: 0.3s ease;
  transform: ${(props) => {
    let transform = "translate3d(48px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
      if(props.$toggle === true) {
        transform = "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
      }
    return transform;
  }};
`;

export const StyledLi = styled.li`
  font-size: 0.8rem;
  font-weight: 900;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.textPrimary};
`;