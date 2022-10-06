import React from "react";

const TrendingCard = ({ category, title, body }) => {
  return (
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-category text-primary">{category}</p>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
      </div>
    </div>
  );
};

export default TrendingCard;
