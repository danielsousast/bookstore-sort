import React from "react";
import * as S from "./HomeScreen.styles";
import {
  Input,
  BookItem,
  FilterButton,
  ModalSort,
} from "@/presentation/components";
import { FlatList, ListRenderItemInfo } from "react-native";
import { Book } from "@/data/book/bookTypes";
import { useHomeScreen } from "./useHomeScreen";

export const HomeScreen = () => {
  const {
    searchString,
    setSearchString,
    filteredBooks,
    setShowSortModal,
    showSortModal,
    handleSortRulesChange,
  } = useHomeScreen();

  function renderItem({ item }: ListRenderItemInfo<Book>) {
    return <BookItem book={item} />;
  }

  return (
    <S.ScreeContainer>
      <S.Content>
        <S.InputWrapper>
          <Input
            placeholder="Pesquise seu livro"
            value={searchString}
            onChangeText={setSearchString}
          />
          <FilterButton onPress={() => setShowSortModal(true)} />
        </S.InputWrapper>
        <FlatList data={filteredBooks} renderItem={renderItem} />
      </S.Content>
      <ModalSort
        isVisible={showSortModal}
        onClose={() => setShowSortModal(false)}
        onSubmit={handleSortRulesChange}
      />
    </S.ScreeContainer>
  );
};
