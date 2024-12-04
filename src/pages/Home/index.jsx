import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/home.css";

const Home = () => {
  const [showDetails, setShowDetails] = useState(false);

  //State to control open and close of FAQ dropdown
  const [faqStates, setFaqStates] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const toggleFaq = (id) => {
    setFaqStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Function to show details on mouse enter
  const handleMouseEnter = () => {
    setShowDetails(true);
  };

  // Function to hide details on mouse leave
  const handleMouseLeave = () => {
    setShowDetails(false);
  };

  return (
    <div className="home">
      <div className="home-banner">
        <div className="banner-content">
          <h1>
            Discover The Perfect<br></br>
            <span className="highlight-text">Cut For You.</span>
          </h1>
          <p className="description">
            Our goal is to find you the haircut that suits you best, so you can
            unlock your best look today!
          </p>
          <div className="reviews-section flex-container">
            <div className="review-avatars">
              <img src="placeholder-avatar1.jpg" alt="Client 1" />
              <img src="placeholder-avatar2.jpg" alt="Client 2" />
              <img src="placeholder-avatar3.jpg" alt="Client 3" />
              <img src="placeholder-avatar4.jpg" alt="Client 4" />
              <img src="placeholder-avatar5.jpg" alt="Client 5" />
            </div>
            <div className="review-count">
              <strong>185</strong> Total Review
              <span className="stars">★★★★★</span>
            </div>
          </div>
          <div className="stats">
            <div className="stat-item">
              <h2>100%</h2>
              <p>Customer Satisfaction</p>
            </div>
            <div className="stat-item">
              <h2>200+</h2>
              <p>Tailored Haircuts</p>
            </div>
            <div className="stat-item">
              <h2>185+</h2>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
        <div className="button-container">
          <a
            href="https://book.squareup.com/appointments/6hn3xjye7xu1p9/location/LJDRH4FCQK8DK/services?buttonTextColor=000000&color=ffd814&locale=en&referrer=so"
            className="home-book-now btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </div>
      </div>

      <div className="home-content flex-container">
        <div className="home-content-image">
          <img
            src={require("../../assets/images/Home/home-haircut.jpg")}
            alt="Kong Haiircut"
          />
        </div>
        <section className="home-intro">
          <h2>Looking for a Barber in Who Gets Your Style?</h2>
          <p>
            You're in the right place. We don't just give haircuts – we craft
            them. Our passion for barbering shines through in every cut, and
            dedication to personalised service means you'll walk out looking and
            feeling your best. Whether you're after a sharp fade, a perfectly
            sculpted beard, or just a clean-up, our expertise and attention to
            detail will have you looking sharp and ready to take on the world.
          </p>
        </section>
      </div>

      <h2>What We Offer: More Than Just a Haircut</h2>
      <div className="flex-container offerings">
        <div className="offering">
          <h3>Haircuts That Turn Heads</h3>
          <p>
            <strong>Standard Haircuts:</strong> From classic cuts to modern
            fades and tapers, we've got you covered.
          </p>
          <p>
            <strong>Haircuts with Beard Grooming:</strong> Complete your look
            with a sharp beard trim.
          </p>
          <p>
            <strong>Haircuts with Eyebrow Shaping:</strong> Defined eyebrows can
            enhance your features for a polished look.
          </p>
        </div>
        <div className="offering">
          <h3>Beard Grooming That's Second to None</h3>
          <p>
            <strong>Beard Trims:</strong> Shape and maintain your beard to your
            desired length and style.
          </p>
          <p>
            <strong>Line-Ups and Sculpting:</strong> Get crisp, clean lines that
            define a truly sharp beard.
          </p>
        </div>
        <div className="offering">
          <h3>Special Occasion Styles</h3>
          <p>
            <strong>Weddings:</strong> Look your absolute best on your big day.
          </p>
          <p>
            <strong>Events:</strong> Stand out with a stylish haircut for any
            special occasion.
          </p>
        </div>
      </div>

      <h2>Why Choose Demo Barber?</h2>
      <div className="flex-container reasons">
        <div className="reason">
          <h3>Expertise You Can Trust</h3>
          <p>
            We are highly skilled with years of experience, always up-to-date
            with the latest trends and techniques.
          </p>
        </div>
        <div className="reason">
          <h3>A Relaxed and Welcoming Vibe</h3>
          <p>
            Our barbershop offers a comfortable atmosphere where you can unwind
            and enjoy the experience.
          </p>
        </div>
        <div className="reason">
          <h3>Attention to Detail</h3>
          <p>
            We believe that the difference is in the details, ensuring you leave
            looking and feeling your best.
          </p>
        </div>
      </div>

      <section className="home-services flex-container">
        <div className="table">
          <div className="title">
            <h1>
              SERVICES & <br /> PRICES
            </h1>
          </div>
          <div
            className="row"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h3 className="name">STANDARD HAIRCUT</h3>
            <h3 className="price">$50.00</h3>
          </div>
          <div
            className="row"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h3 className="name">HAIRCUT + EYEBROW STYLING</h3>
            <h3 className="price">$55.00</h3>
          </div>
          <div
            className="row"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h3 className="name">HAIRCUT & BEARD TRIM</h3>
            <h3 className="price">$60.00</h3>
          </div>
          <div
            className="row"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h3 className="name">HAIRCUT - BEFORE/AFTER HOURS</h3>
            <h3 className="price">$100.00+</h3>
          </div>
        </div>
        <section className="home-transform">
          <h2>Transform Your Look</h2>
          <p>
            Whether you're looking for a classic cut or a modern style, we
            provide a consultative experience to ensure your haircut fits you
            perfectly.
          </p>
          <div className="button-container">
            <Link
              to="/services"
              className="home-services-btn btn"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Our Services
            </Link>
          </div>
        </section>
      </section>

      <section className="faq flex-container">
        <div className="title">
          <h1>FAQs</h1>
          <ul className="questions-rows">
            {[
              {
                id: 1,
                question: "How can I pay?",
                answer: "Book now and pay on the day via cash or card.",
              },
              {
                id: 2,
                question: "Where Are You Located?",
                answer:
                  "We are located .... If you have trouble finding us, text or call for assistance.",
              },
              {
                id: 3,
                question: "What's Your Cancellation Policy?",
                answer:
                  "Cancel or reschedule at least one day before your appointment. A cancellation fee of 50% applies for no-shows or late cancellations.",
              },
              {
                id: 4,
                question: "Do You Take Walk-Ins?",
                answer:
                  "No, we operate by appointment only to ensure each client receives personalized attention.",
              },
            ].map((faq) => (
              <li key={faq.id} className="question-row">
                <h2
                  className="question-title"
                  onClick={() => toggleFaq(faq.id)}
                >
                  {faq.question} <span className="dropdown-arrow">⬇︎</span>
                </h2>
                <p
                  className={
                    faqStates[faq.id] ? "dropdown-active" : "dropdown-hidden"
                  }
                >
                  {faq.answer}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
