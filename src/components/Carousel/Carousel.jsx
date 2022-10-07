import React from "react";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <div key={new Date() + index * 10000}>
            <h1 className="text-primary">{item}</h1>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
