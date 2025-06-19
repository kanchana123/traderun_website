import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GuidePage from './pages/GuidePage';
import SupportPage from './components/SupportPage';
import './style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/support" element={<SupportPage />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
