import { Book, BookSortBy, BookSortOrder, getBooks } from "@/data";
import React, { useMemo, useState } from "react";

export function useHomeScreen() {
  const [searchString, setSearchString] = React.useState("");
  const [sort, setSort] = useState({
    sortBy: null,
    sortOrder: null,
  });
  const [showSortModal, setShowSortModal] = React.useState(false);
  const [books, setBooks] = React.useState([]);

  const sortedBooks = useMemo(() => {
    return getBooks({
      sortBy: sort.sortBy,
      sortOrder: sort.sortOrder,
    });
  }, [books, sort]);

  const filteredBooks = useMemo(() => {
    if (!searchString) {
      return sortedBooks;
    }

    return searchBooksByTitle(searchString, sortedBooks);
  }, [sortedBooks, searchString]);

  function handleSortRulesChange(
    sortBy: BookSortBy,
    orderDirection: BookSortOrder
  ) {
    setSort({
      sortBy: sortBy,
      sortOrder: orderDirection,
    });
    setShowSortModal(false);
  }

  function searchBooksByTitle(query: string, books: Book[]): Book[] {
    const searchResults: Book[] = books?.filter((book) =>
      book.title.toLowerCase().includes(query?.toLowerCase())
    );
    return searchResults;
  }

  return {
    searchString,
    setSearchString,
    showSortModal,
    setShowSortModal,
    filteredBooks,
    handleSortRulesChange,
  };
}
