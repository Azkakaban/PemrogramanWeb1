import { createContext, useState } from "react";

export const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useState([
    { id: 1, title: "Book A", author: "Author A" },
    { id: 2, title: "Book B", author: "Author B" }
  ]);

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
}
