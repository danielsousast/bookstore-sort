import React from "react";
import * as S from "./Button.styles";

interface Props {
  title: string;
  onPress: () => void;
}

export function Button({ onPress, title }: Props) {
  return (
    <S.Container onPress={onPress}>
      <S.Title>{title || "Button"}</S.Title>
    </S.Container>
  );
}
