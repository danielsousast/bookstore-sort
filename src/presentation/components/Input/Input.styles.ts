import styled from "styled-components/native";

export const Container = styled.View`
  height: 50px;
  width: 80%;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 6px;
  padding-left: 12px;
`;

export const TextInput = styled.TextInput`
  height: 50px;
`;
