import styled from "styled-components/native";

export const Container = styled.View`
  padding: 12px;
  padding-bottom: 16px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 6px;
  border-bottom-width: 1px;
  flex-direction: row;
  align-items: center;
  border-bottom-color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const InfoWrapper = styled.View`
  width: 100%;
`;

export const ItemText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin-left: 12px;
  width: 75%;
  color: ${({ theme }) => theme.colors.text};
`;

export const Label = styled.Text`
  font-size: 14px;
  margin-left: 12px;
  width: 75%;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const Image = styled.Image`
  width: 80px;
  height: 100px;
`;
