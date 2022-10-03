import React from "react";
import Logo from "./Logo.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg align-items-center" id="my-navbar">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Tentang
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Fitur
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Cara Kerja
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Jelajahi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Testimoni
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Pertanyaan
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn-started" href="/">
                Mulai Sekarang
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
