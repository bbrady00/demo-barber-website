import React from "react";
import Slider from "react-slick";
import "../../assets/styles/gallery.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import gallery1 from "../../assets/images/Gallery/gallery1.jpg";
import gallery2 from "../../assets/images/Gallery/gallery2.jpg";
import gallery3 from "../../assets/images/Gallery/gallery3.jpg";
import gallery4 from "../../assets/images/Gallery/gallery4.jpg";
import gallery5 from "../../assets/images/Gallery/gallery5.jpg";
import gallery6 from "../../assets/images/Gallery/gallery6.jpg";
import gallery7 from "../../assets/images/Gallery/gallery7.jpg";
import gallery8 from "../../assets/images/Gallery/gallery8.jpg";
import gallery9 from "../../assets/images/Gallery/gallery9.jpg";
import gallery10 from "../../assets/images/Gallery/gallery10.jpg";
import gallery11 from "../../assets/images/Gallery/gallery11.jpg";
import gallery12 from "../../assets/images/Gallery/gallery12.jpg";

const Gallery = () => {
  const stackedImages = [
    { id: 1, src: gallery1, alt: "Haircut 1" },
    { id: 2, src: gallery2, alt: "Haircut 2" },
    { id: 3, src: gallery3, alt: "Haircut 3" },
    { id: 4, src: gallery4, alt: "Haircut 4" },
    { id: 5, src: gallery5, alt: "Haircut 5" },
    { id: 6, src: gallery6, alt: "Haircut 6" },
  ];

  const carouselImages = [
    { id: 7, src: gallery7, alt: "Haircut 7" },
    { id: 8, src: gallery8, alt: "Haircut 8" },
    { id: 9, src: gallery9, alt: "Haircut 9" },
    { id: 10, src: gallery10, alt: "Haircut 10" },
    { id: 11, src: gallery11, alt: "Haircut 11" },
    { id: 12, src: gallery12, alt: "Haircut 12" },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="gallery">
      <h1>Previous Haircuts</h1>
      <p>
        Offering unique and personalised grooming experiences, using only the
        highest quality products to ensure you look and feel your best.
      </p>
      <p>
        From the moment you step into our shop, you'll know you're in good
        hands. Don't take our word for it, see some of our latest work!
      </p>

      {/* Stacked Images */}
      <div className="stacked-images">
        {stackedImages.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className={`stacked-image stacked-image-${index + 1}`}
          />
        ))}
      </div>

      {/* Carousel */}
      <div className="carousel-section">
        <Slider {...carouselSettings}>
          {carouselImages.map((image) => (
            <div key={image.id} className="carousel-item">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </Slider>
      </div>
      {/* Instagram Feed Placeholder */}
      <div className="instagram-placeholder">
        <h2>Follow Us on Instagram</h2>
        <p>Stay updated with our latest work! Instagram feed coming soon.</p>
        <div className="placeholder-grid">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="placeholder-item">
              <div className="placeholder-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
