import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import StripNavbar from './components/Navbar/StripNavbar';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
// import About from './pages/About';
// import Academics from './pages/Academics';
// import Admissions from './pages/Admissions';
// import Contact from './pages/Contact';

function App() {
  // Set initial theme based on system preference if no theme is saved
  useEffect(() => {
    if (!localStorage.getItem('theme') &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  return (
    <Router>
      <div className="app">
        <StripNavbar />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
