import React from "react";
import AboutCarousel from "../../components/AboutCarousel/AboutCarousel";
import "./About.css";
import aboutJson from "../../json/about.json";

const About = () => {
  return (
    <section className="about " id="about">
      <div className="container">
        <div
          className="row align-items-center"
          style={{ marginBottom: "5rem" }}
        >
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

        <div className="row align-item-center position-relative">
          <AboutCarousel classData="carousel-card-about" data={aboutJson} />
        </div>
      </div>
    </section>
  );
};

export default About;
