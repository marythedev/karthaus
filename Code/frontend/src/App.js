import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExampleLandingPage from './pages/ExampleLandingPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/exampleLandingPage" element={<ExampleLandingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
