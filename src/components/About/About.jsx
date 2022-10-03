import React from "react";
import "./About.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="about-title">
              Sebuah platform tuk membantumu menemukan tempat wisata
            </p>
          </div>
          <div className="col-md-6">
            <p className="about-text">
              Healing merupakan suatu platform khusus dibidang wisata, yang
              dikembangkan oleh <span>Tupai Tech</span>. Harapannya adalah dapat
              melayani dan menjadi sumber rekomendasi wisata yang sesuai oleh
              keinginan wisatawan. Mulai dari budget, kondisi tempat wisata, dan
              daerahnya.
            </p>
          </div>
        </div>
        <OwlCarousel className="owl-theme" loop margin={10} nav>
          <div className="item bg-primary">
            <h4>1</h4>
          </div>
          <div className="item bg-primary">
            <h4>2</h4>
          </div>
          <div className="item bg-primary">
            <h4>3</h4>
          </div>
          <div className="item bg-primary">
            <h4>4</h4>
          </div>
          <div className="item bg-primary">
            <h4>5</h4>
          </div>
          <div className="item bg-primary">
            <h4>6</h4>
          </div>
          <div className="item bg-primary">
            <h4>7</h4>
          </div>
          <div className="item bg-primary">
            <h4>8</h4>
          </div>
          <div className="item bg-primary">
            <h4>9</h4>
          </div>
          <div className="item bg-primary">
            <h4>10</h4>
          </div>
          <div className="item bg-primary">
            <h4>11</h4>
          </div>
          <div className="item bg-primary">
            <h4>12</h4>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default About;
