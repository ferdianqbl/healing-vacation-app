import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <section
      className="cta row align-items-center justify-content-center mx-auto"
      id="cta"
    >
      <div className="top-overlay"></div>
      <div className="bot-overlay"></div>
      <div className="container text-center">
        <h1 className="cta-title mb-5 text-white">
          Temukan Tempat <br /> Wisata Impianmu
        </h1>
        <a
          href="/"
          className="nav-link my-btn-primary d-inline-block text-white"
        >
          Cari Wisata
        </a>
      </div>
    </section>
  );
};

export default CTA;
