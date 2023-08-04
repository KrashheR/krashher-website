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
    let transform = "translate3d(48px, 0px, 0px)";
      if(props.$toggle === true) {
        transform = "translate3d(0px, 0px, 0px)";
      }
    return transform;
  }};

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    gap: 10px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    position: absolute;
    flex-direction: column;
    height: auto;
    width: 100%;
    top: 0;
    right: 0;
    z-index: 1;
    background-color: ${(props) => props.theme.colors.bg};
    transform: ${(props) => {
      let transform = "translate3d(0px, -80px, 0px)";
        if(props.$toggle === true) {
          transform = "translate3d(0px, 00px, 0px)";
        }
      return transform;
    }};
  }
`;

export const StyledLi = styled.li`
  font-size: 0.8rem;
  font-weight: 900;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.textPrimary};

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    border-top: 2px solid #EDF738;
    text-align: center;
    margin-right: 0px;
    padding: 20px 0;

    &:nth-child(1){
      margin-top: 30px;
    }
  }
`;