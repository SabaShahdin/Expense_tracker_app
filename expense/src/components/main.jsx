import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; // Use Link for internal navigation
import mainImage from "./images/main.jpg"; // Import the main image

function Main() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        background: "linear-gradient(to bottom, #fff, #f9f9f9)",
        color: "#333",
        minHeight: "100vh",
      }}
    >
      <img
        src={mainImage}
        className="img-fluid rounded-circle shadow mb-4"
        alt="Main Logo"
        style={{ width: "150px", height: "150px" }}
      />
      <h1 className="fw-bold mb-3">Expense App</h1>
      <h2 className="text-muted mb-5" style={{ fontSize: "1.2rem" }}>
        Sign Up
      </h2>
      
      {/* Continue with Facebook Button */}
      <a
        href="/homepage" // You might want to change this to a route (if it is for a specific action)
        className="btn btn-warning text-white w-50 py-2 mb-3 fw-semibold"
        style={{
          borderRadius: "30px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        Continue with Facebook
      </a>

      {/* Use email or phone Button (Redirects to SignUp) */}
      <Link
        to="/signup"
        className="btn btn-outline-secondary w-50 py-2 mb-3 fw-semibold"
        style={{ borderRadius: "30px" }}
      >
        Use email or phone
      </Link>

      {/* Login Link (Redirects to Login page) */}
      <p className="mt-4 text-muted">
        Already have an account?{" "}
        <Link to="/login" className="text-warning fw-semibold">
          Login
        </Link>
      </p>
    </div>
  );
}

export default Main;
