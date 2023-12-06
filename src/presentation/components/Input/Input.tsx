import React from "react";
import * as S from "./Input.styles";
import { TextInputProps, ViewStyle } from "react-native";
import { useTheme } from "styled-components/native";

interface Props extends TextInputProps {
  containerSyles?: ViewStyle;
}

export function Input({ containerSyles, ...rest }: Props) {
  const { colors } = useTheme();
  return (
    <S.Container style={containerSyles}>
      <S.TextInput {...rest} placeholderTextColor={colors.textLight} />
    </S.Container>
  );
}
