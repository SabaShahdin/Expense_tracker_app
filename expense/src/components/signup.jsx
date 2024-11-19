import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const navigate = useNavigate();

  // Handle form submission
  const handleSignUp = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!userName || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (!acceptTerms) {
      alert("You must accept the terms and conditions.");
      return;
    }

    // Send API request to sign up
    const response = await fetch("http://localhost:8080/signup", {  // Ensure correct API URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, email, password }),
    });

    if (response.ok) {
      console.log("User signed up successfully");
      // Redirect to login after successful signup
      navigate("/login");
    } else {
      const error = await response.json();
      alert(error.message || "Error during sign-up.");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", background: "#ffff", padding: "20px" }}
    >
      <div className="shadow-lg p-5" style={{ width: "100%", maxWidth: "400px", backgroundColor: "#ffffff", borderRadius: "25px", boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.15)" }}>
        <h2 className="text-center mb-3 fw-bold" style={{ color: "#ffcc00" }}>Hello, Sign Up!</h2>
        <p className="text-center text-muted mb-4">Create your account to get started</p>

        {/* User Name Input */}
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="User Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </div>

        {/* Email Input */}
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        {/* Terms and Conditions */}
        <div className="form-check mb-4">
          <input type="checkbox" className="form-check-input" id="termsCheck" checked={acceptTerms} onChange={() => setAcceptTerms(!acceptTerms)} />
          <label className="form-check-label text-muted" htmlFor="termsCheck">I accept the <a href="#!" className="text-warning">policy and terms</a></label>
        </div>

        {/* Sign Up Button */}
        <button onClick={handleSignUp} className="btn w-100 fw-bold py-2" style={{ backgroundColor: "#ffcc00", color: "#ffffff" }}>
          Sign Up
        </button>

        {/* Footer - Redirect to Login */}
        <p className="text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-warning fw-bold">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
