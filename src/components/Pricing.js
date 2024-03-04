import React, { useState } from "react";
import PricingCard from "./PricingCard";
import '../styles/PricingCard.css';
import "../styles/PricingApp.css";

const Pricing = () => {
  const [selectMonthly, setSelectMonthly] = useState(true);

  return (
    <div className="PricingApp">
      <div className="app-container">
        <header>
          <h1 className="header-topic">Our Pricing Plan</h1>
          <div className="header-row">
            <button
              className={`billing-option ${selectMonthly ? 'active' : ''}`}
              onClick={() => setSelectMonthly(true)}
            >
              Monthly
            </button>
            <button
              className={`billing-option ${!selectMonthly ? 'active' : ''}`}
              onClick={() => setSelectMonthly(false)}
            >
              Annually
            </button>
          </div>
        </header>
        {/* Cards here */}
        <div className="pricing-cards">
          <PricingCard
            title="Starter"
            price={selectMonthly ? "20.99" : "188.9"}
            storage="600 mins transcription a month"
            text1="8+ Auto-generated contents like summary, clips, quotes and blog."
            text2="Email Sequences"
            text3="Migration service"
            text4="Collaborations & Permisssions"
            users="5"
            sendUp="5"
            billingFrequency={selectMonthly ? "monthly" : "annually"}
          />
          <PricingCard
            title="Pro"
            price={selectMonthly ? "34.99" : "349.9"}
            storage="600 mins transcription a month"
            text1="8+ Auto-generated contents like summary, clips, quotes and blog."
            text2="Email Sequences"
            text3="Migration service"
            text4="Collaborations & Permisssions"
            users="10"
            sendUp="10"
            billingFrequency={selectMonthly ? "monthly" : "annually"}
          />
          <PricingCard
            title="Ultimate"
            price={selectMonthly ? "79.99" : "499.9"}
            storage="600 mins transcription a month"
            text1="8+ Auto-generated contents like summary, clips, quotes and blog."
            text2="Email Sequences"
            text3="Migration service"
            text4="Collaborations & Permisssions"
            text5="Custom billing"
            users="20"
            billingFrequency={selectMonthly ? "monthly" : "annually"}
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
