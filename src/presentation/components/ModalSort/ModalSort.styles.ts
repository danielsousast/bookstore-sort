import styled from "styled-components/native";

export const ModalContent = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 50%;
`;
