import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ExampleLandingPage from "./pages/ExampleLandingPage";

function App() {
  const user = false; // Change this to your logic to determine if the user is authenticated

  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* If user is authenticated, redirect login and signup routes to home */}
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/exampleLandingPage" element={<ExampleLandingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
