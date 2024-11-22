import React, { useState } from "react";
import "../../assets/styles/contact.css";
import { InstagramIcon, PhoneIcon, GlobeIcon } from "../../components/Icon";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="contact container">
      <h1>Contact Us</h1>
      <p>
        At Kong The Barber, we specialize in delivering premium, consultative
        haircuts tailored to your unique style. Whether you're looking for
        expert recommendations or a fresh new look, Kong is here to guide you
        through every step. We understand the importance of getting the perfect
        cut, and we're dedicated to helping you achieve it.
      </p>
      <p>
        Feel free to reach out if you have any questions or need assistance with
        booking an appointment. You’re welcome to use the form below for
        specific requests, though it’s entirely optional.
      </p>

      <div className="contact-info">
        <h2>Contact Details</h2>
        <ul className="contact-list">
          <li>
            <InstagramIcon />
            <a
              href="https://www.instagram.com/kongtkebarber"
              target="_blank"
              rel="noopener noreferrer"
            >
              @kongtkebarber
            </a>
          </li>
          <li>
            <PhoneIcon />
            <a href="tel:0401523371">0401 523 371</a>
          </li>
          <li>
            <GlobeIcon />
            <a
              href="https://kong-the-barber.square.site/"
              target="_blank"
              rel="noopener noreferrer"
            >
              kong-the-barber.square.site
            </a>
          </li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
        </div>

        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
