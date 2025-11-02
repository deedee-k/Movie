import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function MyReviews() {
  const [reviews, setReviews] = useState([]);
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, "reviews"), where("userId", "==", user.uid));
    getDocs(q).then((snapshot) => {
      setReviews(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, [user]);

  if (!user)
    return <p className="container">You must be logged in to see your reviews.</p>;

  return (
    <div className="container">
      <h2 style={{ color: "var(--primary)", marginBottom: "1.5rem" }}>
        My Reviews
      </h2>
      {reviews.map((r) => (
        <div key={r.id} className="card">
          <div className="review-header">
            <strong>Movie ID: {r.movieId}</strong>
            <span>⭐ {r.rating}</span>
          </div>
          <p className="review-text">{r.text}</p>
        </div>
      ))}
      {reviews.length === 0 && <p>No reviews yet.</p>}
    </div>
  );
}
