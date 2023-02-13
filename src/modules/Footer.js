import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__details">
        <div className="footer__info">
          <img src="logo.svg" alt="" />
          <p className="footer__info--overview">
            Nec, enim sed lacus, magna pharetra. Phasellus tincidunt nulla
            pharetra gravida est.
          </p>
        </div>
        <div className="footer__list">
          <div className="footer__list--item">
            <h2 className="footer__list--item-title">About Us</h2>
            <ul className="footer__list--item-category">
              <li>About NFTs</li>
              <li>Live Actions</li>
              <li>NFT Blog</li>
              <li>Activity</li>
            </ul>
          </div>
          <div className="footer__list--item">
            <h2 className="footer__list--item-title">Support</h2>
            <ul className="footer__list--item-category">
              <li>Help & Support</li>
              <li>Item Details</li>
              <li>Author Profile</li>
              <li>Collection</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__icon">
        <img src="youtube.svg" alt="" />
        <img src="twitter.svg" alt="" />
        <img src="facebook.svg" alt="" />
        <img src="google.svg" alt="" />
      </div>
      <div className="footer__author">All rights reserved@2021</div>
    </footer>
  );
};

export default Footer;
