import styled from "styled-components/native";

interface WrapperProps {
  isSelected: boolean;
  size: "small" | "large";
}

export const Wrapper = styled.TouchableOpacity<WrapperProps>`
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.backgroundLight};
  margin-bottom: 10px;
  border-radius: 5px;
  width: ${({ size }) => (size === "small" ? "48%" : "100%")};
  ${({ isSelected }) => isSelected && `background-color: #eee;`};
`;

export const Label = styled.Text`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;
