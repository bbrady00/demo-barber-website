import React from "react";
import "../../assets/styles/gallery.css";

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
  const galleryImages = [
    { id: 1, src: gallery1, alt: "Haircut 1", size: "large" },
    { id: 2, src: gallery2, alt: "Haircut 2", size: "small" },
    { id: 3, src: gallery3, alt: "Haircut 3", size: "large" },
    { id: 4, src: gallery4, alt: "Haircut 4", size: "small" },
    { id: 5, src: gallery5, alt: "Haircut 5", size: "small" },
    { id: 6, src: gallery6, alt: "Haircut 6", size: "small" },
    { id: 7, src: gallery7, alt: "Haircut 7", size: "small" },
    { id: 8, src: gallery8, alt: "Haircut 8", size: "large" },
    { id: 9, src: gallery9, alt: "Haircut 9", size: "small" },
    { id: 10, src: gallery10, alt: "Haircut 10", size: "large" },
    { id: 11, src: gallery11, alt: "Haircut 11", size: "small" },
    { id: 12, src: gallery12, alt: "Haircut 12", size: "small" },
  ];

  return (
    <div className="gallery">
      <h1>Previous Haircuts</h1>
      <h2>
        Offering unique and personalised grooming experience, using only the
        highest quality products to ensure you look and feel your best.
      </h2>
      <h2>
        From the moment you step into our shop, you'll know you're in good
        hands. Don't take our word for it, see some of our latest work!
      </h2>
      <div className="gallery-list">
        {galleryImages.map((image) => (
          <div
            className={`gallery-item ${image.size}`}
            data-id={image.id}
            key={image.id}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
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
