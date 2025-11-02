import React, { useState } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ReviewForm({ movieId }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");
  const [loading, setLoading] = useState(false);

  const submitReview = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) return alert("Please log in to post a review.");
    if (!text.trim() || !rating) return alert("Please fill out all fields.");

    setLoading(true);
    try {
      await addDoc(collection(db, "reviews"), {
        movieId,
        text: text.trim(),
        rating: Number(rating),
        userId: user.uid,
        userEmail: user.email,
        createdAt: serverTimestamp(),
      });
      setText("");
      setRating("");
      alert("✅ Review added!");
    } catch (err) {
      console.error(err);
      alert("Error adding review.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submitReview}>
      <textarea
        placeholder="Write your review..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
      />
      <input
        type="number"
        min="1"
        max="5"
        placeholder="Rating (1–5)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  );
}
