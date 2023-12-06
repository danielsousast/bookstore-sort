import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;
