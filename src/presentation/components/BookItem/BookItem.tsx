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
      <S.ItemText>
        {book.id} - {book.title}
      </S.ItemText>
    </S.Container>
  );
}
