import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/main";  // Import the Main component
import Login from "./components/login";
import SignUp from "./components/signup";
import Home from "./components/homepage";
import ExpenseEntry from "./components/expenseentry";
import ExpenseSummary from "./components/expensesummary";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginHandler = () => {
    setIsAuthenticated(true); // Simulating login success
  };

  const logoutHandler = () => {
    setIsAuthenticated(false); // Handle logout
  };

  return (
    <Router>
      <Routes>
        {/* Default Route, leading to the Main component */}
        <Route path="/" element={<Main />} />  {/* Main is the default route */}

        {/* Login Page */}
        <Route path="/login" element={<Login onLogin={loginHandler} />} />

        {/* Sign Up Page */}
        <Route path="/signup" element={<SignUp />} />

        {/* Home Page */}
        <Route path="/home" element={isAuthenticated ? <Home logoutHandler={logoutHandler} /> : <Navigate to="/login" />} />

        {/* Expense Entry */}
        <Route path="/entry" element={isAuthenticated ? <ExpenseEntry /> : <Navigate to="/login" />} />

        {/* Expense Summary */}
        <Route path="/summary" element={isAuthenticated ? <ExpenseSummary /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
