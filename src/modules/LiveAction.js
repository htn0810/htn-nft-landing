import React, { useState } from "react";
import { liveActionList } from "../data/constant";

const LiveAction = () => {
  const lengthLive = liveActionList.length;
  const [position, setPosition] = useState(0);
  console.log(position);
  return (
    <section className="live">
      <div className="live__blurY"></div>
      <div className="live__blurR"></div>
      <h1 className="live__title">Live Actions</h1>
      <div className="live__icon">
        <span
          onClick={() =>
            position === 0
              ? setPosition(lengthLive - 1)
              : setPosition(position - 1)
          }
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
            position === lengthLive - 1
              ? setPosition(0)
              : setPosition(position + 1)
          }
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
      </div>
      <div
        className="live__slider"
        style={{ transform: `translateX(${position * -350}px)` }}
      >
        {liveActionList.map((item, index) => (
          <div
            key={index}
            className={`live__slider--item ${position === index ? "mark" : ""}`}
          >
            <div className="live__slider--item-img">
              <img srcSet={`${item.url} 2x`} alt="" />
              <span className="live__slider--item-time">{item.time}</span>
            </div>
            <div className="live__slider--item-info">
              <div className="live__slider--author">
                <div className="live__slider--author-avatar">
                  <img srcSet={`${item.avatar} 2x`} alt="" />
                </div>
                <div className="live__slider--author-info">
                  <span>{item.title}</span>
                  <span>{item.author}</span>
                </div>
              </div>
              <div className="live__slider--love">
                <img srcSet="iconLove.png 2x" alt="" />
                <span>{item.love}</span>
              </div>
            </div>
            <div className="live__slider--item-bid">
              <span>Current Bid</span>
              <span>{item.eth}</span>
            </div>
            <button className="live__slider--item-btn">Place a bid</button>
          </div>
        ))}
      </div>
      <button className="live__btn">View all</button>
    </section>
  );
};

export default LiveAction;
