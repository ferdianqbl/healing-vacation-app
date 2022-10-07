import React, { useState } from "react";
import "./Hero.css";

const Hero = (e) => {
  const [playStatus, setPlayStatus] = useState(false);
  const videoHandler = () => {
    const playBtn = document.querySelector(".play-btn");
    const pauseBtn = document.querySelector(".pause-btn");
    const video = document.getElementById("hero-video");

    if (playStatus === false) {
      video.classList.remove("d-none");
      video.play();
      setPlayStatus(true);
      playBtn.classList.add("d-none");
      pauseBtn.classList.remove("d-none");
    }

    if (playStatus === true) {
      video.classList.add("d-none");
      video.pause();
      setPlayStatus(false);
      playBtn.classList.remove("d-none");
      pauseBtn.classList.add("d-none");
    }
  };

  return (
    <section className="hero d-flex align-items-center" id="hero">
      <video
        id="hero-video"
        className="d-none"
        src="/assets/video/background.mp4"
        loop
      ></video>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-1 hero-social-group">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Facebook
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Twitter
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
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

        {/* <div className="container ">
          <div className="row justify-content-center align-items-center side-place-group">
            <div className="col-12 side-place-group-container">
              <p className="place-description-group">
                02. <br />
                <span className="place-title">Nusa Penida</span> <br />
                <span className="place-text">Bali</span>
              </p>
            </div>
          </div>
        </div> */}

        <div className="play-btn-group" onClick={videoHandler}>
          <button type="button" className="play-btn">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="play-icon"
            >
              <path
                d="M42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24Z"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M31.8199 23.3444C32.3342 23.6301 32.3342 24.3699 31.8199 24.6556L20.6142 30.881C20.1143 31.1587 19.5 30.7972 19.5 30.2254V17.7746C19.5 17.2028 20.1143 16.8413 20.6142 17.119L31.8199 23.3444Z"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button type="button" className="pause-btn d-none">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pause-icon"
            >
              <path
                d="M24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48ZM24 45.6C35.9294 45.6 45.6 35.9294 45.6 24C45.6 12.0706 35.9294 2.4 24 2.4C12.0706 2.4 2.4 12.0706 2.4 24C2.4 35.9294 12.0706 45.6 24 45.6ZM16.8 12C19.451 12 21.6 14.149 21.6 16.8V31.2C21.6 33.851 19.451 36 16.8 36C14.149 36 12 33.851 12 31.2V16.8C12 14.149 14.149 12 16.8 12ZM16.8 14.4C15.4745 14.4 14.4 15.4745 14.4 16.8V31.2C14.4 32.5255 15.4745 33.6 16.8 33.6C18.1255 33.6 19.2 32.5255 19.2 31.2V16.8C19.2 15.4745 18.1255 14.4 16.8 14.4ZM31.2 12C33.851 12 36 14.149 36 16.8V31.2C36 33.851 33.851 36 31.2 36C28.549 36 26.4 33.851 26.4 31.2V16.8C26.4 14.149 28.549 12 31.2 12ZM31.2 14.4C29.8745 14.4 28.8 15.4745 28.8 16.8V31.2C28.8 32.5255 29.8745 33.6 31.2 33.6C32.5255 33.6 33.6 32.5255 33.6 31.2V16.8C33.6 15.4745 32.5255 14.4 31.2 14.4Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
