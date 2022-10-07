import React from "react";
import Slider from "react-slick";
import "./Carousel.css";

const Carousel = ({ classData, data }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div
            className={`card ${classData}`}
            key={new Date() + index * 10000 + 999}
          >
            <div className="card-body">
              <div className="card-profile d-flex">
                <img
                  src="https://source.unsplash.com/random/500x500/?people"
                  className={`card-img-top ${classData}-img me-3`}
                  alt="carousel-card-img"
                />
                <div className="card-profile-description">
                  <h5 className="card-title text-white">{item.name}</h5>
                  <p className="card-text">{item.status}</p>
                </div>
              </div>
              <hr />
              <p className="card-text">{item.body}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
