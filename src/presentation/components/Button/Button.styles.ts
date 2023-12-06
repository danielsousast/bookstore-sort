import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding: 12px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
`;
