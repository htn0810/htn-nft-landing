import React, { useState } from "react";
import { popularList } from "../data/constant";

const Popular = () => {
  const lengthPopular = popularList.length;
  const [position, setPosition] = useState(0);
  return (
    <section className="popular" id="community">
      <div className="popular__blurP"></div>
      <div className="popular__blurR"></div>
      <span
        onClick={() =>
          position === 0
            ? setPosition(lengthPopular - 1)
            : setPosition(position - 1)
        }
        className={`popular__iconLeft ${position === 0 ? "hide" : ""}`}
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
          position === lengthPopular - 1
            ? setPosition(0)
            : setPosition(position + 1)
        }
        className={`popular__iconRight ${
          position === lengthPopular - 1 ? "hide" : ""
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
      <h1 className="popular__title">Popular Collections</h1>
      <div
        className="popular__slider"
        style={{ transform: `translateX(${position * -320}px)` }}
      >
        {popularList.map((item, index) => (
          <div key={index} className="popular__slider--item">
            <img srcSet={`${item.url} 2x`} alt="" />
            <div className="popular__slider--item-info">
              <div className="popular__slider--item-info-author">
                <img srcSet={`${item.avatar} 2x`} alt="" />
                <span>{item.author}</span>
              </div>
              <span className="popular__slider--item-info-detail">
                {item.details}
              </span>
            </div>
          </div>
        ))}
      </div>
      <button className="popular__btn">View all</button>
    </section>
  );
};

export default Popular;
