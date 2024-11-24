import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Booking from "./components/Booking";

import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Services from "./pages/Services";
import TermsConditions from "./pages/TermsConditions";

import "./assets/styles/app.css";

const App = () => {
  return (
    <Router basename="/demo-barber">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Booking />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
