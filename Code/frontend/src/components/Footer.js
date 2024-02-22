import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'; // Import Footer.css file

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <p>&copy; 2024 E-Commerce Shop by Group 13.</p>
      </Container>
    </footer>
  );
};

export default Footer;
