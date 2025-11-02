import React from "react";
import { Link } from "react-router-dom";
import movies from "../data/movies";

export default function MovieList() {
  return (
    <div className="container">
      <h2>🎬 Featured Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.poster} alt={movie.title} />
            <h4>{movie.title}</h4>
            <p>⭐ {movie.rating} / 5</p>
            <Link
              to={`/movie/${movie.id}`}
              style={{
                background: "var(--primary)",
                color: "#fff",
                padding: "0.5rem 1rem",
                borderRadius: "var(--radius)",
                textDecoration: "none",
              }}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
