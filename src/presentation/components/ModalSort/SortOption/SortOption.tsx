import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

// import { Container } from './styles';

interface Props {
  filter: {
    slug: string;
    display: string;
  };
  isSelected: boolean;
  onPress: () => void;
}

export function SortOption({ filter, isSelected, onPress }: Props) {
  return (
    <Wrapper isSelected={isSelected} onPress={onPress}>
      <Label>{filter?.display}</Label>
    </Wrapper>
  );
}

interface WrapperProps {
  isSelected: boolean;
}

export const Wrapper = styled.TouchableOpacity<WrapperProps>`
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.backgroundLight};
  margin-bottom: 10px;
  border-radius: 5px;
  ${({ isSelected }) => isSelected && `background-color: #eee;`};
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;