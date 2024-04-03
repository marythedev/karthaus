// Home.js
import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  // Check if user is authenticated
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return !!token; // Convert token to boolean
  };

  // Handle logout
  const handleLogout = () => {
    // Clear token from local storage
    localStorage.removeItem("token");
    // Redirect to login page
    navigate("/login");
  };

  return (
    <div>
      <h2>Welcome to Home Page</h2>
      {isAuthenticated() ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <p>Please login to access this page</p>
      )}
    </div>
  );
};

export default HomePage;
