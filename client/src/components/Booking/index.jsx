import React from "react";
import "../../assets/styles/booking.css";

const Booking = () => {
  return (
    <div className="booking-container">
      <section className="booking">
        <h2>Book Your Appointment Today</h2>
        <p>Call us or visit at one of our locations.</p>
        <div className="button-container">
          <a
            href="https://book.squareup.com/appointments/6hn3xjye7xu1p9/location/LJDRH4FCQK8DK/services?buttonTextColor=000000&color=ffd814&locale=en&referrer=so"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Booking;
