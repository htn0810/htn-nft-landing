import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__blurY"></div>
      <div className="banner__blurP"></div>
      <div className="banner__blurR"></div>
      <div className="banner__content">
        <h1 className="banner__content--title">
          Explore, Buy and Sell the{" "}
          <span className="banner__content--title-mark">Best NFTs!</span>
        </h1>
        <div className="banner__content--button">
          <button>Explore</button>
          <button>Create</button>
        </div>
        <ul className="banner__content--details">
          <li className="banner__content--details-item">
            <strong>32k+</strong>
            <span>Artworks</span>
          </li>
          <li className="banner__content--details-item">
            <strong>32k+</strong>
            <span>Artworks</span>
          </li>
          <li className="banner__content--details-item">
            <strong>32k+</strong>
            <span>Artworks</span>
          </li>
        </ul>
      </div>
      <div className="banner__product">
        <div className="banner__product--item">
          <div className="banner__product--item-top"></div>
          <div className="banner__product--item-bot">
            <div className="banner__product--item-bot-author">
              <span>Artist</span>
              <span>@wzard</span>
            </div>
            <button>Start Bid</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
