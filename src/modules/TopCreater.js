import React, { Fragment } from "react";
import { topCreatorsList } from "../data/constant";

const TopCreater = () => {
  return (
    <section className="top" id="creators">
      <div className="top__blurP"></div>
      <div className="top__blurY"></div>
      <h1 className="top__title">Top Creators</h1>
      <div className="top__creators">
        <div className="top__creators--col1">
          <CreatorsCol start={0} end={2}></CreatorsCol>
        </div>
        <div className="top__creators--col2">
          <CreatorsCol start={2} end={4}></CreatorsCol>
        </div>
      </div>
      <button className="top__btn">View all</button>
    </section>
  );
};

export default TopCreater;

export const CreatorsCol = ({ start = 0, end = 2 }) => {
  return (
    <Fragment>
      {topCreatorsList.slice(start, end).map((item, index) => (
        <div key={index} className="top__creators--item">
          <div className="top__creators--item-info">
            <img
              srcSet={`${item.avatar} 2x`}
              alt=""
              className="top__creators--item-info-avatar"
            />
            <div className="top__creators--item-info-creator">
              <span>{item.author}</span>
              <span>{item.eth}</span>
            </div>
          </div>
          <div className="top__creators--item-donate">
            <span>{item.coin}</span>
            <span>Items</span>
          </div>
        </div>
      ))}
    </Fragment>
  );
};
