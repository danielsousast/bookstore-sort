import { getBooks } from "./bookService";

describe("bookTest", () => {
  it("should order by title", () => {
    const books = getBooks({
      sortBy: "title",
      sortOrder: "ascending",
    });
    expect(books[0].title).toBe(
      "Clean Code: A Handbook of Agile Software Craftsmanship"
    );
    expect(books[1].title).toBe("Learning GraphQL");
    expect(books[2].title).toBe("Steve Jobs");
    expect(books[3].title).toBe("The Browser Hacker's Handbook");
  });

  it("should order by author", () => {
    const books = getBooks({
      sortBy: "author",
      sortOrder: "ascending",
    });

    expect(books[0].author).toBe("Eve Porcello, Alex Banks");
    expect(books[1].author).toBe("Robert C. Martin");
    expect(books[2].author).toBe(
      "Wade Alcorn, Christian Frichot, Michele Orru"
    );
    expect(books[3].author).toBe("Walter Isaacson");
  });

  it("should order by year", () => {
    const books = getBooks({
      sortBy: "editionYear",
      sortOrder: "ascending",
    });

    expect(books[0].editionYear).toBe(2008);
    expect(books[1].editionYear).toBe(2011);
    expect(books[2].editionYear).toBe(2014);
    expect(books[3].editionYear).toBe(2018);
  });

  it("should order by title descending", () => {
    const books = getBooks({
      sortBy: "title",
      sortOrder: "descending",
    });

    expect(books[0].title).toBe("The Browser Hacker's Handbook");
    expect(books[1].title).toBe("Steve Jobs");
    expect(books[2].title).toBe("Learning GraphQL");
    expect(books[3].title).toBe(
      "Clean Code: A Handbook of Agile Software Craftsmanship"
    );
  });

  it("should order by author descending", () => {
    const books = getBooks({
      sortBy: "author",
      sortOrder: "descending",
    });

    expect(books[0].author).toBe("Walter Isaacson");
    expect(books[1].author).toBe(
      "Wade Alcorn, Christian Frichot, Michele Orru"
    );
    expect(books[2].author).toBe("Robert C. Martin");
    expect(books[3].author).toBe("Eve Porcello, Alex Banks");
  });

  it("should order by year descending", () => {
    const books = getBooks({
      sortBy: "editionYear",
      sortOrder: "descending",
    });

    expect(books[0].editionYear).toBe(2018);
    expect(books[1].editionYear).toBe(2014);
    expect(books[2].editionYear).toBe(2011);
    expect(books[3].editionYear).toBe(2008);
  });

  it("should throw an exception when attribute is null", () => {
    expect(() => {
      getBooks({
        sortBy: null,
        sortOrder: "descending",
      });
    }).toThrow("Attribute cannot be null");
  });
});
