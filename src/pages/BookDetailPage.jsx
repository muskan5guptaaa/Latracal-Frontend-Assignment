import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewForm from "../components/ReviewForm";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function BookDetailPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/books/${id}`)
      .then(res => setBook(res.data))
      .catch(() => setError("Book not found."))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (!book) return null;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{book.title}</h1>
      <p className="text-gray-600">{book.author}</p>
      <p className="mt-4">{book.description}</p>

      <h2 className="mt-6 text-xl font-semibold">Reviews</h2>
      <ul className="mt-2 space-y-2">
        {book.reviews?.map((review, idx) => (
          <li key={idx} className="border p-2 rounded">{review}</li>
        ))}
      </ul>

      <ReviewForm bookId={id} />
    </div>
  );
}
