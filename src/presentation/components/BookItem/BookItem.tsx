import React from "react";
import * as S from "./BookItem.styles";
import { Book } from "@/data";

interface Props {
  book: Book;
}

export function BookItem({ book }: Props) {
  return (
    <S.Container>
      <S.Image source={book.image} resizeMode="cover" />
      <S.InfoWrapper>
        <S.ItemText>{book.title}</S.ItemText>
        <S.Label>{book.author}</S.Label>
      </S.InfoWrapper>
    </S.Container>
  );
}
