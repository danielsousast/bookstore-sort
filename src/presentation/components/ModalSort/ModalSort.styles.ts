import { Platform } from "react-native";
import styled from "styled-components/native";

export const ModalContent = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: ${Platform.OS === "ios" ? "50%" : "55%"};
`;

export const SortOptionWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  justify-content: space-between;
`;

export const SortText = styled.Text`
  font-size: 18px;
  margin-bottom: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;
