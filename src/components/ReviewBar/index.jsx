import React, { useState, useEffect } from "react";
import "../../assets/styles/reviewBar.css";

const ReviewBar = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJvXOa-05r1moRPygTeOTmKsA&fields=reviews&key=AIzaSyAxUwa1_YZDRJwvXu8UWgTSNebOyof-ysA`
      );
      const data = await response.json();
      setReviews(data.result.reviews);
    };

    fetchReviews();
  }, []);

  return (
    <div className="review-bar">
      <div className="review-bar-container">
        <h3 className="review-bar-title">What Our Clients Say</h3>
        <div className="review-list">
          {reviews.slice(0, 3).map((review, index) => (
            <div key={index} className="review-item">
              <p className="review-text">"{review.text}"</p>
              <p className="review-author">- {review.author_name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewBar;
