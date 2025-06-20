import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import BookCard from "../components/BookCard";
import SearchFilterBar from "../components/SearchFilterBar";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function BookListPage() {
  const { books, loading, error } = useContext(BookContext);
  const [query, setQuery] = useState("");

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div className="p-6">
      <SearchFilterBar query={query} setQuery={setQuery} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
