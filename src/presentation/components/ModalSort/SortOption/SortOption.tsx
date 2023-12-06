import React from "react";
import Icon from "@expo/vector-icons/Octicons";
import * as S from "./SortOption.styles";

interface Props {
  option: string;
  isSelected: boolean;
  onPress: () => void;
  size?: "small" | "large";
  icon?: string;
}

export function SortOption({
  option,
  isSelected,
  onPress,
  size = "large",
  icon,
}: Props) {
  return (
    <S.Wrapper isSelected={isSelected} onPress={onPress} size={size}>
      {icon && (
        <Icon
          name={icon as any}
          size={20}
          style={{
            marginRight: 8,
          }}
        />
      )}

      <S.Label>{option}</S.Label>
    </S.Wrapper>
  );
}
