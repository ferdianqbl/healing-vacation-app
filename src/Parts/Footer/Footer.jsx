import React from "react";
import "./Footer.css";
import {
  Whatsapp,
  Tiktok,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <ul className="footer-nav d-flex align-items-center justify-content-center mx-auto flex-wrap">
          <li className="footer-item">
            <a href="/" className="footer-link">
              Tentang
            </a>
          </li>
          <li className="footer-item">
            <a href="/" className="footer-link">
              Fitur
            </a>
          </li>
          <li className="footer-item">
            <a href="/" className="footer-link">
              Cara Kerja
            </a>
          </li>
          <li className="footer-item">
            <a href="/" className="footer-link">
              Jelajahi
            </a>
          </li>
          <li className="footer-item">
            <a href="/" className="footer-link">
              Testimoni
            </a>
          </li>
          <li className="footer-item">
            <a href="/" className="footer-link">
              Pertanyaan
            </a>
          </li>
        </ul>
        <ul className="footer-nav d-flex align-items-center justify-content-center mx-auto flex-wrap">
          <li className="footer-item">
            <a href="/" className="footer-link">
              <Whatsapp size={`1.25rem`} />
            </a>
          </li>
          <li className="footer-item">
            <a href="/" className="footer-link">
              <Tiktok size={`1.25rem`} />
            </a>
          </li>
          <li className="footer-item">
            <a href="/" className="footer-link">
              <Instagram size={`1.25rem`} />
            </a>
          </li>
          <li className="footer-item">
            <a href="/" className="footer-link">
              <Facebook size={`1.25rem`} />
            </a>
          </li>
          <li className="footer-item">
            <a href="/" className="footer-link">
              <Linkedin size={`1.25rem`} />
            </a>
          </li>
          <li className="footer-item">
            <a href="/" className="footer-link">
              <Twitter size={`1.25rem`} />
            </a>
          </li>
        </ul>

        <hr />

        <p className="footer-copyright text-center">
          Copyright © 2022 Tupai Tech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
