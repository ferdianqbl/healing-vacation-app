import React from "react";
import "./Trending.css";

const Trending = () => {
  return (
    <section className="trending" id="trending">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6">
            <h1 className="trending-title">
              Tempat Wisata yang Sedang Trending
            </h1>
          </div>
          <div className="col-md-6">
            <nav>
              <div
                class="nav nav-pills justify-content-end"
                id="nav-tab"
                role="tablist"
              >
                <button
                  class="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Home
                </button>
                <button
                  class="nav-link"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Profile
                </button>
                <button
                  class="nav-link"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-contact"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  Contact
                </button>
              </div>
            </nav>
          </div>
        </div>

        <div className="row">
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              tabindex="0"
            >
              Home
            </div>
            <div
              class="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tabindex="0"
            >
              Profile
            </div>
            <div
              class="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
              tabindex="0"
            >
              Contact
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
