import React, { useState } from "react";
import "./Trending.css";
import trendingItems from "../../json/trending.json";
import TrendingCard from "../../components/TrendingCard/TrendingCard";

const Trending = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const trendingItemFilterCategories = trendingItems.filter(
    (item, index) =>
      trendingItems.map((item) => item.category).indexOf(item.category) ===
      index
  );

  const selectedCategoryHandler = (category) => {
    setSelectedCategory(category);
    // console.log(e.target.attributes[1].value);
  };

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
                className="nav nav-pills justify-content-end"
                id="nav-btn-group"
              >
                <button
                  className={`nav-link${
                    selectedCategory === "All" ? " active" : ""
                  }`}
                  type="button"
                  onClick={() => selectedCategoryHandler("All")}
                >
                  Semua
                </button>
                {trendingItemFilterCategories.map((item, index) => (
                  <button
                    key={new Date() + index}
                    className={`nav-link${
                      item.category === selectedCategory ? " active" : ""
                    }`}
                    type="button"
                    onClick={() => selectedCategoryHandler(item.category)}
                  >
                    {item.category}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4 align-items-center trending-item-group">
          {trendingItems.map((item, index) =>
            item.category === selectedCategory || selectedCategory === "All" ? (
              <div className="col" key={new Date() + index}>
                <TrendingCard {...item} />
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Trending;
