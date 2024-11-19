import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Reset error message on each login attempt
    setErrorMessage("");

    // Send API request to log in
    const response = await fetch("http://localhost:8080/login", { // Ensure this matches your backend route
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("authToken", data.token);  // Store JWT token in local storage
      onLogin();  // Update authentication state in App.js
      navigate("/home");  // Redirect to Home page
    } else {
      const data = await response.json();
      setErrorMessage(data.message || "Invalid credentials");  // Show error message from API
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", background: "#f8f9fa", padding: "20px" }}
    >
      <div
        className="shadow-sm p-4"
        style={{
          width: "100%",
          maxWidth: "375px",
          backgroundColor: "#ffffff",
          borderRadius: "15px",
        }}
      >
        <h3 className="text-center mb-1 fw-bold" style={{ fontSize: "1.5rem" }}>
          Sign in
        </h3>
        <p className="text-center text-muted mb-4" style={{ fontSize: "0.9rem" }}>
          Sign in to continue
        </p>

        {/* Error Message */}
        {errorMessage && (
          <div className="alert alert-danger text-center" style={{ fontSize: "0.9rem" }}>
            {errorMessage}
          </div>
        )}

        <div className="mb-3">
          <label className="form-label fw-semibold" style={{ fontSize: "0.85rem" }}>
            Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              fontSize: "0.95rem",
              borderRadius: "10px",
              borderColor: "#ddd",
              padding: "10px",
            }}
          />
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold" style={{ fontSize: "0.85rem" }}>
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              fontSize: "0.95rem",
              borderRadius: "10px",
              borderColor: "#ddd",
              padding: "10px",
            }}
          />
        </div>

        <button
          onClick={handleLogin}
          className="btn btn-primary w-100 py-2"
          style={{ backgroundColor: "#ffcc00", color: "#333", border: "none" }}
        >
          Log In
        </button>

        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-primary fw-semibold"
            style={{
              background: "none",
              border: "none",
              padding: 0,
              textDecoration: "underline",
            }}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
