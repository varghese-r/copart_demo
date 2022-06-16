import React from "react";

import classes from "./LotInfo.module.css";
const LotInfo = () => {
  return (
    <div className={classes.lotInfo}>
      <div className={classes.lotInfo__title}>Lot # 32747601</div>
      <div className={classes.lotInfo__details}>
        <h3>Category:</h3>
        <h3>STOLEN/RECOVERED MINIMAL DMG</h3>
      </div>
      <hr className={classes.hr} />
      <div className={classes.lotInfo__details}>
        <h3>Odometer:</h3>
        <h3>19536</h3>
      </div>
      <hr className={classes.hr} />
      <div className={classes.lotInfo__details}>
        <h3>VRN:</h3>
        <h3>OE68**</h3>
      </div>
      <hr className={classes.hr} />
      <div className={classes.lotInfo__details}>
        <h3>Highlights:</h3>
        <h3>Engine Start Program</h3>
      </div>
      <hr className={classes.hr} />
      <div className={classes.lotInfo__details}>
        <h3>Primary Damage:</h3>
        <h3>MISSING/ALTERED VIN</h3>
      </div>
      <hr className={classes.hr} />
      <div className={classes.lotInfo__details}>
        <h3>Secondary Damage:</h3>
        <h3>Normal Wear</h3>
      </div>
      <hr className={classes.hr} />
      <div className={classes.lotInfo__details}>
        <h3>Est. Retail Value:</h3>
        <h3>£23,475.00 GBP</h3>
      </div>
      <hr className={classes.hr} />
      <div className={classes.lotInfo__details}>
        <h3>VIN:</h3>
        <h3>WBA4X52010A******</h3>
      </div>
      <hr className={classes.hr} />
      <div className={classes.lotInfo__details}>
        <h3>Body Style:</h3>
      </div>
      <hr className={classes.hr} />
      <div className={classes.lotInfo__details}>
        <h3>Color:</h3>
        <h3>Grey</h3>
      </div>
      <hr className={classes.hr} />
      <div className={classes.lotInfo__details}>
        <h3>Engine Type:</h3>
        <h3>cc</h3>
      </div>
      <hr className={classes.hr} />
      <div className={classes.lotInfo__details}>
        <h3>Transmission:</h3>
        <h3>8 SPEED AUTO DIESEL</h3>
      </div>
      <hr className={classes.hr} />
      <div className={classes.lotInfo__details}>
        <h3>Drive:</h3>
        <h3>2 AXLE RIGID BODY</h3>
      </div>
    </div>
  );
};

export default LotInfo;
