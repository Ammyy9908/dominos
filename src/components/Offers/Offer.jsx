import React from "react";
import "./Offer.css";
const Offer = ({ offer }) => {
  return (
    <div className="offer-card">
      <img src={offer} alt="offer-card" />
    </div>
  );
};

export default Offer;
