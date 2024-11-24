import React from "react";
import { InstagramIcon, PhoneIcon, MapIcon } from "../Icon";
import { Link } from "react-router-dom";
import "../../assets/styles/footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-logo">
            <img
              src={require("../../assets/images/Logo/logoMain.png")}
              alt="Barber Logo"
              className="footer-logo-img"
            />
            <div className="footer-icons">
              <InstagramIcon />
              <PhoneIcon />
            </div>
          </div>

          <div className="footer-map-container">
            <MapIcon />
            <div className="footer-address">
              <p>Address Line 1</p>
              <p>State, Post, Country</p>
            </div>
            <img
              src={require("../../assets/images/Footer/maps-screenshot.jpg")}
              alt="Google Maps Location"
              className="footer-map-screenshot"
            />
          </div>

          <div className="footer-contact-hours">
            <h3 className="footer-hours-heading">Staffed Hours</h3>
            <div className="footer-hours">
              <p>Mon-Tue: Closed</p>
              <p>Wed-Sat: 10:00 am - 7:00 pm</p>
              <p>Sun: 8:00 am - 5:00 pm</p>
            </div>
            <p className="footer-hours-description">
              *After/Before hours available. Please contact us if you’d like to
              schedule an appointment outside regular hours.
            </p>
          </div>
        </div>

        {/* Footer links*/}
        <div className="footer-links">
          <Link to="/contact" onClick={scrollToTop}>
            Contact
          </Link>
          <Link to="/privacy-policy" onClick={scrollToTop}>
            Privacy Policy
          </Link>
          <Link to="/terms-conditions" onClick={scrollToTop}>
            Terms & Conditions
          </Link>
        </div>
      </div>

      <div className="footer-review-prompt">
        <p>We’d love to hear your feedback! Leave us a review on Google:</p>
        <a
          href="https://www.google.com/search?q=Kong+The+Barber&rlz=1C1GCEU_enAU832AU832&oq=Kong+The+Barber&aqs=chrome..69i57j0i22i30l9.2064j1j7&sourceid=chrome&ie=UTF-8#lrd=0x6ad65d8bf3f350f7:0x0,3"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-review-link"
        >
          Leave a Google Review
        </a>
      </div>

      <div className="footer-copyright">
        <p>© 2024 bbrady00. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
