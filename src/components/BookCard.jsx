import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  console.log("Bokke",book);
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h2 className="font-semibold text-lg">{book.title}</h2>
      <p className="text-sm text-gray-600 mb-2">{book.author}</p>
      <p className="text-sm line-clamp-3">{book.description}</p>
      <Link to={`/books/${book._id}`} className="text-blue-500 mt-2 block">Read more</Link>
    </div>
  );
}
