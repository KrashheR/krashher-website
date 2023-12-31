import styled from "styled-components";

export const StyledProjectsCard = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 540px;
  box-shadow: 0px 0px 20px 10px #000;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 0px 30px 14px #000;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    max-width: 500px;
  }
`;

export const StyledProjectsCardImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export const StyledProjectsCardPicture = styled.picture`
  display: flex;
  width: 100%;
  height: 340px;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    height: auto;
  }
`;

export const StyledProjectsCardStack = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  align-items: center;
  place-items: center;
  height: 100%;
  margin: 25px 0;
  padding: 0 5px;
  gap: 3px;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    gap: 0;
    grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
    margin: 20px 0;
  }
`;

export const StyledCardLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-top: auto;
`;
