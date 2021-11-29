import React from "react";
import { Link } from "react-router-dom";
import "./ExploreCard.css";
const ExploreCard = ({ logo, header, desc, title }) => {
  return (
    <div className="explore-card">
      <div className="card-header">
        <img src={logo} alt="explore-icon" />
      </div>
      <div className="card-body">
        <h1>{header}</h1>
        <p>{desc}</p>
      </div>
      <div className="card-footer">
        <Link to="/menu"><span>{title}</span></Link>
      </div>
    </div>
  );
};

export default ExploreCard;
