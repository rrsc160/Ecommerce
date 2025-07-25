import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DivorceePage from './pages/DivorceePage';
import BridesPage from './pages/BridesPage';
import GroomsPage from './pages/GroomsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <NavBar />
        <div className="content-area">
          <SideBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/divorcee" element={<DivorceePage />} />
            <Route path="/brides" element={<BridesPage />} />
            <Route path="/grooms" element={<GroomsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
