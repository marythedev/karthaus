import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap CSS
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1 className="league-spartan-bold">OnlineShop</h1>
      </Link>
      <div id="search-form-container" className="d-flex align-items-center">
        <form
          method="POST"
          action="#"
          id="search-form"
          className="d-flex flex-row justify-content-between align-items-center"
        >
          <div
            className="d-flex flex-row align-items-center"
            id="search-input-w-icon"
          >
            <img
              src={window.location.origin + "/icons/search.png"}
              alt="search"
              height={20}
            />
            <input type="text" placeholder="Search" />
          </div>
          <Button variant="dark" id="search-btn" type="submit">
            Go
          </Button>
        </form>
      </div>
      {localStorage.getItem("username") === null ? (
        <div id="getin-btns">
          <Link to="/login">
            <Button variant="dark">Login</Button>
          </Link>
          <Link to="/register">
            <Button variant="outline-dark" id="signup-btn">
              Signup
            </Button>
          </Link>
        </div>
      ) : (
        <div id="logged-account" className="d-flex flex-row align-items-center justify-content-center">
          <Link to="/cart">
            <img
              src={window.location.origin + "/icons/cart.png"}
              alt="cart"
              height={28}
            />
          </Link>
          <Link to="/account" className="d-flex flex-row align-items-center">
            <p><strong>{localStorage.getItem("username")}</strong></p>
            <img src={window.location.origin + "/icons/profile.png"}
              alt="profile"
              height={35}
            />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
