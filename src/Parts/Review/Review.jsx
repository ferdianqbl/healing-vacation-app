import React from "react";
import "./Review.css";
import reviewJson from "../../json/review.json";
import ReviewCarousel from "../../components/ReviewCarousel/ReviewCarousel";

const Review = () => {
  return (
    <section id="review" className="review">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="review-title">
              Lihat apa yang mereka katakan setelah menggunakan Healing
            </h1>
          </div>
        </div>

        <div className="row align-items-center mt-5">
          <ReviewCarousel classData="carousel-card-review" data={reviewJson} />
        </div>
      </div>
    </section>
  );
};

export default Review;
