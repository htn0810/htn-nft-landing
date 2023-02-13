import React from "react";

const ReadyEmail = () => {
  return (
    <section className="ready">
      <h1 className="ready__title">Ready for Next NFT Drop?</h1>
      <div className="ready__email">
        <input
          type="text"
          className="ready__email--input"
          placeholder="info@gmail.com"
        />
        <button className="ready__email--btn">Subscribe</button>
      </div>
    </section>
  );
};

export default ReadyEmail;
