import React from "react";

const HowItWork = () => {
  return (
    <div className="how">
      <div className="how__title">How it works</div>
      <ul className="how__process">
        <li className="how__process--item">
          <img srcSet="how1.png 2x" alt="" />
          <span>Set up your wallet</span>
        </li>
        <li className="how__process--arrow">
          <div className="how__process--arrow-item">
            <img srcSet="howarrow.png 2x" alt="" />
          </div>
        </li>
        <li className="how__process--item">
          <img srcSet="how2.png 2x" alt="" />
          <span>Create your collection</span>
        </li>
        <li className="how__process--arrow">
          <div className="how__process--arrow-item">
            <img srcSet="howarrow.png 2x" alt="" />
          </div>
        </li>
        <li className="how__process--item">
          <img srcSet="how3.png 2x" alt="" />
          <span>Add your NFTs</span>
        </li>
        <li className="how__process--arrow">
          <div className="how__process--arrow-item">
            <img srcSet="howarrow.png 2x" alt="" />
          </div>
        </li>
        <li className="how__process--item">
          <img srcSet="how4.png 2x" alt="" />
          <span>List them for sale</span>
        </li>
      </ul>
    </div>
  );
};

export default HowItWork;
