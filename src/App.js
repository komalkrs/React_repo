import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Indoor1 from './components/projectDetails/Indoor1';
import Outdoor1 from './components/projectDetails/Outdoor1';
import Herbs1 from './components/projectDetails/Herbs1';
//import HomeGardenSetup from './components/ServiceDetail/HomeGardenSetup';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // <-- Import Icons
import HomeGardenSetup from './components/serviceDetails/Home-garden-setup';
import PlantMaintenancePage from './components/serviceDetails/Plant-maintenance';
import LawnLandscapeCarePage from './components/serviceDetails/Lawn-and-landscapecare';
import CustomGardenDesignPage from './components/serviceDetails/Custom-garden';
const App = () => {
  return (
    <>
      <Router>
        {/* Sticky Wrapper */}
        <div className="sticky-top bg-white shadow-sm">
          {/* Top Bar */}
          <div className="container-fluid  text-dark py-2 px-3">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <div className="mb-2 mb-md-0">
                <FaPhoneAlt className="me-2" /> +91-9876543210 &nbsp; | &nbsp;
                <FaEnvelope className="ms-2" /> info@greentouch.com
              </div>
              <div>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                  <FaFacebookF />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                  <FaInstagram />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>


          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-light bg-success shadow-sm p-3 animate__animated animate__fadeInDown">
            <div className="container-fluid">
              <Link className="navbar-brand fw-bold text-white fs-3" to="/" style={{ letterSpacing: '1px' }}>
                🌿 GardenCare
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto text-center">
                  <Link to="/" className="nav-link text-white mx-2 fs-5 hover-effect">Home</Link>
                  <Link to="/about" className="nav-link text-white mx-2 fs-5 hover-effect">About</Link>
                  <Link to="/services" className="nav-link text-white mx-2 fs-5 hover-effect">Services</Link>
                  <Link to="/projects" className="nav-link text-white mx-2 fs-5 hover-effect">Projects</Link>

                  <Link to="/contact" className="nav-link text-white mx-2 fs-5 hover-effect">Contact</Link>
                </div>
              </div>
            </div>
          </nav>

        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/indoor1" element={<Indoor1 />} />
          <Route path="/projects/outdoor1" element={<Outdoor1 />} />
          <Route path="/projects/herbs1" element={<Herbs1 />} />
          <Route path="/services/home-garden-setup" element={<HomeGardenSetup />} />
          <Route path="/services/plant-maintenance" element={<PlantMaintenancePage/>} />
          <Route path="/services/lawn-landscape-care" element={<LawnLandscapeCarePage/>} />
          <Route path="/services/custom-garden" element={<CustomGardenDesignPage/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>


    </>

  );
};

export default App;
