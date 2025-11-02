import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to Viewers Choice</h1>
      <p>
        Discover trending movies, share your opinions, and explore what others think — 
        all in a clean and minimalist interface.
      </p>
      <img
        src="images/Bk.jpg"
        alt="Movie night"
        style={{
          borderRadius: "var(--radius)",
          boxShadow: "var(--shadow)",
          margin: "2rem 0",
          width: "80%",
          maxWidth: "600px",
        }}
      />
      <Link
        to="/movies"
        style={{
          background: "var(--primary)",
          color: "#fff",
          padding: "0.8rem 1.8rem",
          borderRadius: "var(--radius)",
          textDecoration: "none",
          fontWeight: 500,
        }}
      >
        Browse Movies
      </Link>
    </div>
  );
}
