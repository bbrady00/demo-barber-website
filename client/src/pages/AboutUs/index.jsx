import React from "react";
import "../../assets/styles/about.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Introduction Section */}
      <section className="flex-container about-us">
        <div className="about-us-text-container">
          <h1 className="about-us-title">About Kong The Barber</h1>
          <p>
            <strong>Kong The Barber</strong> was established on July 17, 2023,
            in Clayton, and is dedicated to providing detailed and
            transformative haircuts. With a focus on personalized grooming
            experiences, Kong ensures each client leaves feeling confident and
            stylish.
          </p>
        </div>
        <div className="about-us-long-image">
          <img
            src={require("../../assets/images/About/about1.png")}
            alt="About Kong The Barber"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="flex-container about-us-reverse">
        <div className="about-us-text">
          <h2 className="about-us-subtitle">Our Services</h2>
          <p>
            We offer a variety of services tailored to your needs, including:
          </p>
          <ul className="about-us-list">
            <li>
              <strong>Standard Haircuts:</strong> Precise cuts that match your
              personal style.
            </li>
            <li>
              <strong>Haircuts with Beard Grooming:</strong> A complete grooming
              package.
            </li>
            <li>
              <strong>Haircuts with Eyebrow Shaping:</strong> For a polished
              appearance.
            </li>
          </ul>
          <p>
            Kong takes a consultative approach, providing personalized
            recommendations based on your face shape and style preferences. This
            ensures you receive the ideal haircut that complements your overall
            look.
          </p>
        </div>
        <div className="about-us-long-image">
          <img
            src={require("../../assets/images/About/about2.png")}
            alt="Our Services"
          />
        </div>
      </section>

      {/* Key Services Section */}
      <section className="flex-container about-us">
        <div className="about-us-long-image">
          <img
            src={require("../../assets/images/About/about3.png")}
            alt="Key Services"
          />
        </div>
        <div className="about-us-text">
          <h2 className="about-us-subtitle">Key Services</h2>
          <ul className="about-us-list">
            <li>
              <strong>Clean Line-Ups:</strong> Sharply defined hairlines and
              beards.
            </li>
            <li>
              <strong>Eyebrow Clean-Up:</strong> Shaping for a polished
              appearance.
            </li>
          </ul>
          <p>
            These services, combined with Kong's exceptional dedication to
            precision, significantly enhance your appearance, ensuring you
            always leave with a haircut you love.
          </p>
        </div>
      </section>

      {/* Transformative Haircuts Section */}
      <section className="grid-container about-us-square-section">
        <div className="about-us-text">
          <h2 className="about-us-subtitle">Transformative Haircuts</h2>
          <p>
            Specialising in dramatic hair transformations, Kong guides you
            through the process, offering recommendations that suit your face
            shape and personal style. Whether you're looking for a completely
            new style or just a fresh update, Kong provides the expertise needed
            to achieve your desired look.
          </p>
        </div>
        <div className="about-us-square-image">
          <img
            src={require("../../assets/images/About/about4-1.png")}
            alt="Transformative haircut 1"
          />
          <img
            src={require("../../assets/images/About/about4-2.png")}
            alt="Transformative haircut 2"
          />
          <img
            src={require("../../assets/images/About/about4-3.png")}
            alt="Transformative haircut 3"
          />
        </div>
      </section>

      {/* Special Occasions Section */}
      <section className="flex-container about-us">
        <div className="about-us-long-image">
          <img
            src={require("../../assets/images/About/about5.png")}
            alt="Special Occasion Haircut"
          />
        </div>
        <div className="about-us-text">
          <h2 className="about-us-subtitle">Perfect for Special Occasions</h2>
          <p>
            Kong The Barber is your go-to for special occasions, offering styles
            that ensure you stand out at weddings, birthdays, clubs, and raves.
            From sharp clean line-ups to sophisticated scissor cuts, we make
            sure you're ready for any event.
          </p>
        </div>
      </section>

      {/* Customer Satisfaction Section */}
      <section className="grid-container about-us-square-section">
        <div className="about-us-text">
          <h2 className="about-us-subtitle">Customer Satisfaction</h2>
          <p>
            Customer satisfaction is central to our philosophy. With easy
            appointment booking through social media and a welcoming
            environment, each client receives VIP treatment, ensuring a haircut
            that exceeds expectations.
          </p>
          <p>
            Clients in Mulgrave, Notting Hill, Oakleigh, Oakleigh East, Oakleigh
            South, Huntingdale, Clarinda, Clayton South, Springvale, and Monash
            can enjoy one-on-one VIP treatment. Experience the difference with
            Kong The Barber and enjoy a grooming experience that leaves you
            looking and feeling your best.
          </p>
        </div>
        <div className="about-us-square-image">
          <img
            src={require("../../assets/images/About/about6-1.png")}
            alt="Customer Service 1"
          />
          <img
            src={require("../../assets/images/About/about6-2.jpg")}
            alt="Customer Service 2"
          />
          <img
            src={require("../../assets/images/About/about6-3.png")}
            alt="Customer Service 3"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
