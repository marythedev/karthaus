import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="light" sticky="top">
      <Container>
        <Navbar.Brand href="#">Your Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Products</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
