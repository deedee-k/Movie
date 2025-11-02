import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieList from "./pages/MovieList";
import MovieDetails from "./pages/MovieDetails";
import MyReviews from "./pages/MyReview";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main className="page-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/myreviews" element={<MyReviews />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
