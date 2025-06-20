import React, { useState } from "react";
import axios from "axios";

export default function ReviewForm({ bookId }) {
  const [review, setReview] = useState("");
  const [success, setSuccess] = useState(false);

  const submitReview = async () => {
    if (!review.trim()) return;
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/reviews`, { bookId, comment:review });
      setSuccess(true);
      setReview("");
    } catch {
      alert("Failed to submit review.");
    }
  };

  return (
    <div className="mt-4">
      <h3 className="font-semibold mb-2">Submit a Review</h3>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        className="w-full p-2 border rounded"
        rows={3}
        placeholder="Write your thoughts..."
      />
      <button
        onClick={submitReview}
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
      {success && <p className="text-green-600 mt-2">Review submitted!</p>}
    </div>
  );
}
