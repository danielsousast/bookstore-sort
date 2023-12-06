import React from "react";
import Icon from "@expo/vector-icons/FontAwesome";
import * as S from "./SortButton.styles";
import { useTheme } from "styled-components/native";

interface Props {
  onPress: () => void;
}

export function SortButton({ onPress }: Props) {
  const { colors } = useTheme();
  return (
    <S.Container onPress={onPress}>
      <Icon name="sort-alpha-desc" size={20} color={colors.icon} />
    </S.Container>
  );
}
