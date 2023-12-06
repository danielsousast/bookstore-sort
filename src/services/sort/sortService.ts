import { SortingServiceException } from "./SortingServiceException";

export const sortingService = {
  sort: <T>(
    array: T[],
    sortBy: keyof T,
    sortOrder: "ascending" | "descending"
  ): T[] => {
    if (sortBy === null) {
      throw new SortingServiceException("Attribute cannot be null");
    }

    return array.sort((a, b) => {
      if (sortOrder === "ascending") {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      } else {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    });
  },
};
