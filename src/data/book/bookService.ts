import { Book } from "./bookTypes";
import { books as rawBookList } from "./inputs";

interface GetBooksParams {
  sortRules: any[];
}

export function getBooks({ sortRules }: GetBooksParams): Book[] {
  console.log(sortRules);
  return sortBooks(sortRules, rawBookList);
}

function sortBooks(sortRules: string[], books: Book[]) {
  if (sortRules === null) {
    throw new Error("Rule cannot be null");
  }

  let sortedBooks = [...books];

  if (
    arraysHaveSameElements(sortRules, [
      "title-ascending",
      "author-descending",
      "edition-descending",
    ])
  ) {
    sortedBooks = sortByEditionDescAuthorDescTitleAsc(sortedBooks);
  }

  if (
    arraysHaveSameElements(sortRules, ["author-ascending", "title-descending"])
  ) {
    sortedBooks = sortByAuthorAscending(sortedBooks);
  }

  sortRules?.forEach((filter) => {
    switch (filter) {
      case "title-ascending":
        sortedBooks = sortByTitleAscending(sortedBooks);
        break;
      case "title-descending":
        sortedBooks = sortByTitleDescending(sortedBooks);
        break;
      case "author-ascending":
        sortedBooks = sortByAuthorAscending(sortedBooks);
        break;
      case "author-descending":
        sortedBooks = sortByAuthorDescending(sortedBooks);
        break;
      case "edition-ascending":
        sortedBooks = sortByYearAscending(sortedBooks);
        break;
      case "edition-descending":
        sortedBooks = sortByYearDescending(sortedBooks);
        break;
      default:
        return sortedBooks;
    }
  });

  return sortedBooks;
}

function sortByTitleAscending(books: Book[]) {
  return books.slice().sort((a, b) => a.title.localeCompare(b.title));
}

function sortByAuthorAscending(books: Book[]) {
  return books.slice().sort((a, b) => a.author.localeCompare(b.author));
}

function sortByYearAscending(books: Book[]) {
  return books.slice().sort((a, b) => a.editionYear - b.editionYear);
}

function sortByAuthorDescending(books: Book[]) {
  return books.slice().sort((a, b) => b.author.localeCompare(a.author));
}

function sortByYearDescending(books: Book[]) {
  return books.slice().sort((a, b) => b.editionYear - a.editionYear);
}

function sortByTitleDescending(books: Book[]) {
  return books.slice().sort((a, b) => b.title.localeCompare(a.title));
}

function arraysHaveSameElements(array1: any[], array2: any[]): boolean {
  if (array1?.length !== array2?.length) {
    return false;
  }

  return array1.every((element) => array2.includes(element));
}

function sortByEditionDescAuthorDescTitleAsc(books: Book[]): Book[] {
  return books.slice().sort((a, b) => {
    const editionComparison = b.editionYear - a.editionYear;
    if (editionComparison !== 0) return editionComparison;

    const authorComparison = b.author.localeCompare(a.author);
    if (authorComparison !== 0) return authorComparison;

    return a.title.localeCompare(b.title);
  });
}