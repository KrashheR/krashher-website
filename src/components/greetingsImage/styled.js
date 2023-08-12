import styled from "styled-components";

export const StyledGreetingsImage = styled.img`
  position: absolute;
  border-radius: 50%;
  z-index: -1;
  left: 4px;
  top: 4px;
  width: calc(100% - 8px);
  height: calc(100% - 8px);

`;

export const StyledGreetingsImageContainer = styled.div`
  position: relative;
	z-index: 0;
	width: 350px;
	height: 350px;
	border-radius: 50%;
	overflow: hidden;
	padding: 2rem;
  box-shadow: 0px 0px 14px 4px rgba(237, 247, 56, 0.3);

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    width: 300px;
    height: 300px;
  }
`;

export const StyledBorder = styled.div`
  content: '';
  position: absolute;
  z-index: -2;
  left: -50%;
  top: -50%;
  width: 200%;
  height: 200%;
  background-color: #161a1f;
  background-repeat: no-repeat;
  background-size: 50% 50%, 50% 50%;
  background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  background-image: linear-gradient(#EDF738, #EDF738), linear-gradient(#161a1f, #161a1f), linear-gradient(#EDF738, #EDF738), linear-gradient(#161a1f, #161a1f);
`;

