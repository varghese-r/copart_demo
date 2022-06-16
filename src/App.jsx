import React, { useState } from "react";
import "./App.css";

import Payment from "./components/Payment";
import Header from "./components/Header/Header";
import Bid from "./components/Bid/Bid";

export default function App() {
  const [isUserReadyToPay, setIsUserReadyToPay] = useState(false);

  const inventoryClickHandler = () => {
    setIsUserReadyToPay(true);
  };
  return (
    <div className="App">
      <Header inventoryClickHandler={inventoryClickHandler} />
      <Bid />
      {isUserReadyToPay && <Payment />}
    </div>
  );
}
