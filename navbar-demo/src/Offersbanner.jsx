import React from "react";
import "./Offersbanner.css";

const Offersbanner = () => {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <h2>Special Roadshow Offer</h2>
        <p>
          Book Roadshow Vehicle Today and <strong>Save</strong> Big Instantly
        </p>
        <h1 className="offer-text">OFFER</h1>
        <button className="offer-btn">Get Offer Now</button>
      </div>
      <div className="hero-image">
        <img
          src="/images/Bannertruck.png"
          alt="Offer Truck"
        />
      </div>
    </section>
  );
};

export default Offersbanner;
