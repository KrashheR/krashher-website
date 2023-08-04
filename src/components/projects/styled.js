import styled from "styled-components";

export const StyledProjects = styled.section`
  height: 100vh;

`;

export const StyledProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  margin-top: 80px;
  grid-gap: 40px;

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}){
    display: flex;
    flex-direction: column;
  }
`;