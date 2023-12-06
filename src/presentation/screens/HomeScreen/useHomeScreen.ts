import { Book, getBooks } from "@/data";
import React, { useMemo } from "react";

export function useHomeScreen() {
  const [searchString, setSearchString] = React.useState("");
  const [selectedSortBy, setSelectedSortBy] = React.useState("");
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
      const response = getBooks(selectedSortBy);
      setBooks(response);
    }
    loadBooks();
  }, [selectedSortBy]);

  function handleSortRulesChange(sort: string) {
    setSelectedSortBy(sort);
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
    selectedSortBy,
    setSelectedSortBy,
    showSortModal,
    setShowSortModal,
    books,
    setBooks,
    filteredBooks,
    handleSortRulesChange,
  };
}
