import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, query, where, onSnapshot, deleteDoc, doc } from "firebase/firestore";

export default function ReviewCard({ movieId }) {
  const [reviews, setReviews] = useState([]);
  const user = auth.currentUser;

  useEffect(() => {
    const q = query(collection(db, "reviews"), where("movieId", "==", movieId));
    const unsub = onSnapshot(q, (snapshot) => {
      setReviews(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsub();
  }, [movieId]);

  const deleteReview = async (id) => {
    if (!user) return alert("You must be logged in.");
    await deleteDoc(doc(db, "reviews", id));
  };

  return (
    <div style={{ width: "100%", maxWidth: "700px", margin: "0 auto" }}>
      {reviews.map((r) => (
        <div key={r.id} className="card">
          <div className="review-header">
            <strong>{r.userEmail || "Anonymous"}</strong>
            <span>⭐ {r.rating}</span>
          </div>
          <p className="review-text">{r.text}</p>
          {user && user.uid === r.userId && (
            <button className="danger" onClick={() => deleteReview(r.id)}>
              Delete
            </button>
          )}
        </div>
      ))}
      {reviews.length === 0 && <p>No reviews yet.</p>}
    </div>
  );
}
