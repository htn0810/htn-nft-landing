import React, { useState } from "react";
import { exploreList } from "../data/constant";

const Explore = () => {
  const lengthExplore = exploreList.length;
  const [position, setPosition] = useState(0);
  return (
    <section className="explore" id="explore">
      <div className="explore__blurY"></div>
      <div className="explore__blurP"></div>
      <span
        onClick={() =>
          position === 0
            ? setPosition(lengthExplore - 1)
            : setPosition(position - 1)
        }
        className={`explore__iconLeft ${position === 0 ? "hide" : ""}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
      </span>
      <span
        onClick={() =>
          position === lengthExplore - 1
            ? setPosition(0)
            : setPosition(position + 1)
        }
        className={`explore__iconRight ${
          position === lengthExplore - 1 ? "hide" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </span>
      <h1 className="explore__title">Explore By Categories</h1>
      <div
        className="explore__slider"
        style={{ transform: `translateX(${position * -200}px)` }}
      >
        {exploreList.map((item, index) => (
          <div key={index} className="explore__slider--item">
            <div className="explore__slider--item-img">
              <img srcSet={`${item.url} 2x`} alt="" />
              <div className="explore__slider--item-img-modal">
                <button>Place a Bid</button>
              </div>
            </div>
            <div className="explore__slider--item-info">
              <div className="explore__slider--item-info-author">
                <img srcSet="avatar3.png 2x" alt="" />
                <div className="explore__slider--item-info-author-details">
                  <span>{item.title}</span>
                  <span>{item.author}</span>
                </div>
              </div>
              <div className="explore__slider--item-info-love">
                <img srcSet="iconLove.png 2x" alt="" />
                <span>{item.love}</span>
              </div>
            </div>
            <div className="explore__slider--item-bid">
              <span>Current Bid</span>
              <span>{item.eth}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="explore__btn">View all</button>
    </section>
  );
};

export default Explore;
