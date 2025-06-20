import React from "react";

export default function UserProfilePage() {
  // Simulated user
  const user = { name: "John Doe", email: "john@example.com", reviews: ["Great book!", "Loved it!"] };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">User Profile</h1>
      <p className="mt-2">Name: {user.name}</p>
      <p>Email: {user.email}</p>

      <h2 className="mt-4 text-lg font-semibold">Your Reviews</h2>
      <ul className="list-disc list-inside">
        {user.reviews.map((rev, idx) => <li key={idx}>{rev}</li>)}
      </ul>
    </div>
  );
}
