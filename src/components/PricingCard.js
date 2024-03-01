import React from "react";
import "../styles/PricingCard.css";

const PricingCard = ({ title, price, storage, text1, text2,text3, text4,  text5, users, sendUp, billingFrequency }) => {
  const formattedPrice = billingFrequency === "monthly" ? `${price} per month` : `${price} per year`;

  return (
    <div className="PricingCard">
      <header>
        <p className="card-title">{title}</p>
        <h1 className="card-price">{formattedPrice}</h1>
      </header>
      {/* features here */}
      <div className="card-features">
        <div className="card-storage">{storage}</div>
        <div className="card-text">{text1}</div>
        <div className="card-text">{text2}</div>
        <div className="card-text">{text3}</div>
        <div className="card-text">{text4}</div>
        <div className="card-text">{text5}</div>
        <div className="card-users-allowed"> users in total {users}</div>
        {sendUp && <div className="card-send-up">Send up to {sendUp}</div>}
      </div>
      <button className="card-btn">READ MORE</button>
    </div>
  );
};

export default PricingCard;
