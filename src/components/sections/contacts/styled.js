import styled from "styled-components";

export const StyledContacts = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  @media(max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    gap: 15px;
  }
`;

export const StyledContactsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
