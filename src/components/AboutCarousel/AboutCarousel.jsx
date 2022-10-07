import React from "react";
import Slider from "react-slick";
import "./AboutCarousel.css";

const AboutCarousel = ({ classData, data }) => {
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
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="position-absolute carousel-group">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div
            className={`card h-100 ${classData}`}
            key={new Date() + index * 10000 + 999}
          >
            <div className="card-body">
              <img
                src={item.imgSvg}
                className={`img-fluid ${classData}-img pb-3`}
                alt="carousel-card-img"
              />
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.body}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AboutCarousel;
