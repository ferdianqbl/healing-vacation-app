import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero d-flex align-items-center" id="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="hero-title">
              Temukan Tempat <br /> Wisata Impianmu
            </h1>
            <p className="hero-text">
              Lebih cepat dan lebih tepat membantumu mencari tempat wisata yang
              kamu harapkan
            </p>
            <a href="/" className="nav-link my-btn-primary d-inline-block">
              Cari Wisata
            </a>
          </div>
        </div>

        <div className="row place-group justify-content-center align-items-center">
          <div className="col-12 text-center">
            <h1 className="hero-place-title">01. Gunung Bromo</h1>
            <p className="hero-place-text">Jawa Timur</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
