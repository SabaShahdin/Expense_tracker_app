import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="d-flex flex-column"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
      }}
    >
      {/* Navigation Bar */}
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white shadow-sm"
        style={{
          padding: "10px 20px",
        }}
      >
        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{ color: "#333", textDecoration: "none" }}
        >
          Expense Tracker
        </Link>
        <div className="ms-auto">
          <Link to="/" className="btn btn-outline-primary mx-2">
            Home
          </Link>
          <Link to="/entry" className="btn btn-outline-primary mx-2">
            Expense Entry
          </Link>
          <Link to="/summary" className="btn btn-primary mx-2">
            Expense Summary
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-5">
        <h2 className="text-center fw-bold" style={{ color: "#444" }}>
          Welcome to Your Expense Tracker
        </h2>
        <p className="text-center text-muted mb-4">
          Track your spending effortlessly!
        </p>

        {/* Categories Section */}
        <div className="row gy-4">
          {[ 
            { name: "Clothing", icon: "👗" },
            { name: "Travel", icon: "✈️" },
            { name: "Food", icon: "🍔" },
            { name: "Education", icon: "📚" },
            { name: "Health", icon: "💊" },
            { name: "Entertainment", icon: "🎮" },
          ].map((category, index) => (
            <div className="col-md-4 col-sm-6" key={index}>
              <div
                className="card text-center p-4 shadow-sm"
                style={{
                  borderRadius: "15px",
                  border: "none",
                  backgroundColor: "#fff",
                }}
              >
                <span
                  style={{
                    fontSize: "2.5rem",
                    color: "#6c757d",
                    marginBottom: "15px",
                  }}
                >
                  {category.icon}
                </span>
                <h5 className="fw-bold" style={{ color: "#333" }}>
                  {category.name}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer
        className="text-center py-3 mt-auto"
        style={{ backgroundColor: "#fff", borderTop: "1px solid #ddd" }}
      >
        <p className="mb-0 text-muted">
          © 2024 Expense Tracker. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;
