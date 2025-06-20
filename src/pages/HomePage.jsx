import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookCard from "../components/BookCard";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function HomePage() {
  const { books, loading, error } = useContext(BookContext);
  const featured = books.slice(0, 4); // top 4 featured

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Featured Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {featured.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
