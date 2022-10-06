import React from "react";
import "./TrendingCard.css";

const TrendingCard = ({ category, imgUrl, title, body }) => {
  return (
    <div className="card trending-card" id="trending-card">
      <div className="card-body">
        <img src={imgUrl} className="card-img-top" alt={title} />
        <p className="card-category">{category}</p>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
      </div>
    </div>
  );
};

export default TrendingCard;
