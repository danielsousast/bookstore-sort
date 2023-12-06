import React, { useMemo } from "react";
import * as S from "./HomeScreen.styles";
import {
  Input,
  BookItem,
  FilterButton,
  ModalSort,
} from "@/presentation/components";
import { FlatList, ListRenderItemInfo } from "react-native";
import { getBooks } from "@/data/book/bookService";
import { Book } from "@/data/book/bookTypes";

export const HomeScreen = () => {
  const [searchString, setSearchString] = React.useState("");
  const [selectedSortRules, setSelectedSortRules] = React.useState();
  const [showSortModal, setShowSortModal] = React.useState(false);
  const [books, setBooks] = React.useState([]);

  const filteredBooks = useMemo(() => {
    if (!searchString) {
      return books;
    }
    return searchBooksByTitle(searchString, books);
  }, [books, searchString]);

  React.useEffect(() => {
    function loadBooks() {
      const response = getBooks({
        sortRules: selectedSortRules,
      });
      setBooks(response);
    }
    loadBooks();
  }, [selectedSortRules]);

  function renderItem({ item }: ListRenderItemInfo<Book>) {
    return <BookItem book={item} />;
  }

  function handleSortRulesChange(sortRules: any) {
    setSelectedSortRules(sortRules);
    setShowSortModal(false);
  }

  function searchBooksByTitle(query: string, books: Book[]): Book[] {
    const searchResults: Book[] = books?.filter((book) =>
      book.title.toLowerCase().includes(query?.toLowerCase())
    );
    return searchResults;
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
