import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/services.css";

const Services = () => {
  return (
    <div className="services-page">
      <header>
        <h1>Our Services</h1>
        <h2 className="services-sub">
          Looking for a barber who understands your style?
        </h2>
        <p className="services-paragraph">
          At Kong The Barber, we don't just give you a haircut – we craft a look
          that's uniquely you.
        </p>
        <p className="services-paragraph">
          We’re all about taking the time to understand your needs and
          delivering a haircut that boosts your confidence.
        </p>
      </header>

      <ul className="grid-container services-list">
        <li className="service-item">
          <div className="card">
            <div className="card-front">
              <img
                src={require("../../assets/images/Services/haircut.jpg")}
                alt="Standard Haircut"
                className="service-image"
              />
            </div>
            <div className="card-back">
              <p>Any type of Fade/Taper, Shear work and a Line up</p>
              <div className="price-section">
                <span className="price">$50.00</span>
              </div>
              <Link
                to="https://book.squareup.com/appointments/6hn3xjye7xu1p9/location/LJDRH4FCQK8DK/services/WH6ESN5SSXJK7VZYP5A6BXBD"
                className="book-now btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </Link>
            </div>
          </div>
          <h2 className="service-title">Standard Haircut</h2>
        </li>

        <li className="service-item">
          <div className="card">
            <div className="card-front">
              <img
                src={require("../../assets/images/Services/haircut-eyebrow.jpg")}
                alt="Haircut + Eyebrow Design"
                className="service-image"
              />
            </div>
            <div className="card-back">
              <p>
                Any Haircut + Eyebrows Razor Clean up (can switch this out for a
                design instead or have both, unibrow/monobrow will be tweezed
                for better regrowth)
              </p>
              <div className="price-section">
                <span className="price">$55.00</span>
              </div>
              <Link
                to="https://book.squareup.com/appointments/6hn3xjye7xu1p9/location/LJDRH4FCQK8DK/services/F2GQRUUHJJGNLG3VDTHNJDW6"
                className="book-now btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </Link>
            </div>
          </div>
          <h2 className="service-title">Haircut + Eyebrow Design</h2>
        </li>

        <li className="service-item">
          <div className="card">
            <div className="card-front">
              <img
                src={require("../../assets/images/Services/haircut-beard.png")}
                alt="Haircut + Beard"
                className="service-image"
              />
            </div>
            <div className="card-back">
              <p>
                Any Haircut + Beard Trim including Line Up/Sculpting + Eyebrows
                Clean Up (optional)
              </p>
              <div className="price-section">
                <span className="price">$65.00</span>
              </div>
              <Link
                to="https://book.squareup.com/appointments/6hn3xjye7xu1p9/location/LJDRH4FCQK8DK/services/IN5ERV5JVHIW7Q7CTWNLVU4H"
                className="book-now btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </Link>
            </div>
          </div>
          <h2 className="service-title">Haircut + Beard</h2>
        </li>

        <li className="service-item">
          <div className="card">
            <div className="card-front">
              <img
                src={require("../../assets/images/Services/before-after-cut.png")}
                alt="Before Hours/After Hours Cut"
                className="service-image"
              />
            </div>
            <div className="card-back">
              <p>
                Any service outside of my opening hours. Price is 2x. DM me to
                book and state "Subject: Before/After Hours"
              </p>
              <div className="price-section">
                <span className="price">$100+</span>
              </div>
              <Link
                to="https://book.squareup.com/appointments/6hn3xjye7xu1p9/location/LJDRH4FCQK8DK/services/WZ22IL5CJHKASXWYPWQLLZSP"
                className="book-now btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </Link>
            </div>
          </div>
          <h2 className="service-title">Before Hours/After Hours Cut</h2>
        </li>
      </ul>

      <img
        className="booking-instructions"
        src={require("../../assets/images/Services/booked.png")}
        alt="Once you have booked"
      />

      <div className="booking-step booking-confirmation"></div>
      <div className="arrow"></div>
      <div className="booking-step consultation"></div>
      <div className="arrow"></div>
      <div className="booking-step fresh-haircut"></div>
    </div>
  );
};

export default Services;
