import React from "react";
import { useSelector } from "react-redux";
import { useGetBooksQuery } from "../../features/api/apiSlice";
import Book from "./Book";

export default function Books() {
  const { data: books, error, isLoading } = useGetBooksQuery();

  const filter = useSelector((state) => state.filter.value);

  let content = null;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>{error.message}</div>;
  } else if (books) {
    content = books
      .filter((book) => {
        if (filter === "All") {
          return true;
        } else if (filter === "Featured") {
          return book.featured;
        }
        return false;
      })
      .map((book) => <Book key={book.id} book={book} />);
  }

  return (
    <>
      <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
        {content}
      </div>
    </>
  );
}
