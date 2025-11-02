import React from "react";
import { useParams } from "react-router-dom";
import movies from "../data/movies";
import ReviewForm from "../components/ReviewForm";
import ReviewCard from "../components/ReviewCard";

export default function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <p className="container">Movie not found.</p>;

  return (
    <div className="container">
      <h2>{movie.title}</h2>
      <img
        src={movie.poster}
        alt={movie.title}
        style={{
          width: "250px",
          borderRadius: "var(--radius)",
          boxShadow: "var(--shadow)",
          marginTop: "1rem",
        }}
      />
      <p style={{ maxWidth: "600px", margin: "1rem auto", opacity: 0.8 }}>
        {movie.description}
      </p>
      <p>⭐ {movie.rating} / 5</p>

      <h3 style={{ marginTop: "2rem" }}>Leave a Review</h3>
      <ReviewForm movieId={movie.id.toString()} />

      <h3 style={{ marginTop: "2rem" }}>User Reviews</h3>
      <ReviewCard movieId={movie.id.toString()} />
    </div>
  );
}
