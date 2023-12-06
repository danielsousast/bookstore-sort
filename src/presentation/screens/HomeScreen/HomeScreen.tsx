import React from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import * as S from "./HomeScreen.styles";
import {
  Input,
  BookItem,
  SortButton,
  ModalSort,
} from "@/presentation/components";
import { Book } from "@/data/book/bookTypes";
import { useHomeScreen } from "./useHomeScreen";
import { HomeListEmpty } from "./components/HomeListEmpty";
import { useAppSafeArea } from "@/presentation/hooks";

export const HomeScreen = () => {
  const { top } = useAppSafeArea();
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
    <S.ScreeContainer
      style={{
        paddingTop: top,
      }}
    >
      <S.Content>
        <S.InputWrapper>
          <Input
            placeholder="Pesquise seu livro pelo título"
            value={searchString}
            onChangeText={setSearchString}
          />
          <SortButton onPress={() => setShowSortModal(true)} />
        </S.InputWrapper>
        <FlatList
          data={filteredBooks}
          renderItem={renderItem}
          ListEmptyComponent={<HomeListEmpty />}
        />
      </S.Content>
      <ModalSort
        isVisible={showSortModal}
        onClose={() => setShowSortModal(false)}
        onSubmit={handleSortRulesChange}
      />
    </S.ScreeContainer>
  );
};
