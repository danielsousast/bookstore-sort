import React from "react";
import Icon from "@expo/vector-icons/FontAwesome";
import * as S from "./FilterButton.styles";
import { useTheme } from "styled-components/native";

interface Props {
  onPress: () => void;
}

export function FilterButton({ onPress }: Props) {
  const { colors } = useTheme();
  return (
    <S.Container onPress={onPress}>
      <Icon name="filter" size={20} color={colors.icon} />
    </S.Container>
  );
}
