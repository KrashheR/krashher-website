import styled from "styled-components";

export const StyledProjects = styled.section`
  padding-top: 80px;
`;

export const StyledProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  margin-top: 50px;
  grid-gap: 80px;

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    align-items: normal;
  }
`;
