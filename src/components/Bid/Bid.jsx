import React from "react";

import classes from "./Bid.module.css";
import BidInfo from "./BidInfo/BidInfo";
import LotInfo from "./LotInfo/LotInfo";

const Bid = () => {
  return (
    <div className={classes.bid}>
      <div className={classes.title}>2018 BMW 420D XDRIV</div>
      <hr />
      <div className={classes.carSection}>
        <img src={require("../../assets/bmw.jpeg")} alt="bmw" />
        <LotInfo />
        <BidInfo />
      </div>
    </div>
  );
};

export default Bid;
