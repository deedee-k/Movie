import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return () => unsub();
  }, []);

  return (
    <nav className="navbar">
      <h1>Viewers Choice</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/myreviews">My Reviews</Link>
        <Link to="/about">About</Link>

        {!user && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}

        {user && (
          <>
            <span style={{ fontSize: "0.85rem", opacity: 0.8 }}>
              {user.email}
            </span>
            <button onClick={() => signOut(auth)}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}
