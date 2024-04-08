import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExampleLandingPage from './pages/ExampleLandingPage';
import RegisterPage from './pages/Register';

function App() {
  return (
    <div style={{'min-height': '100vh', display: 'flex', 'flex-direction': 'column'}}>
      <Navbar />
      <main style={{ flex: '1' }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/exampleLandingPage" element={<ExampleLandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
