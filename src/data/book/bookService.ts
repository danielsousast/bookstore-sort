import { Book, BookSortBy, BookSortOrder } from "./bookTypes";
import { bookList } from "./bookList";
import { sortingService } from "@/services";

interface GetBooksParams {
  sortBy: BookSortBy;
  sortOrder: BookSortOrder;
}

export function getBooks({ sortBy, sortOrder }: GetBooksParams): Book[] {
  if (sortBy === null || sortOrder === null) {
    return bookList;
  }
  return sortingService.sort<Book>(bookList, sortBy, sortOrder);
}
