import React from "react";
import "./OffersBanner.css";

const OffersBanner = () => {
  return (
    <section className="hero-banner-wrapper">
      <div className="hero-banner-container">
        
        {/* LEFT COLUMN: Text Content */}
        <div className="hero-text-section">
          
          <div className="hero-content-top">
            <h2 className="hero-title">Special Roadshow Offer</h2>
            <p className="hero-subtitle">
              Book Roadshow Vehicle Today <br />
              and <strong>Save</strong> Big Instantly
            </p>
          </div>

          <div className="hero-cta-wrapper">
            {/* The Giant "OFFER" Text (Background Layer) */}
            <div className="hero-offer-text">OFFER</div>

            {/* Button (Foreground Layer) */}
            <button className="hero-offer-btn">Get Offer Now</button>
          </div>

        </div>

        {/* RIGHT COLUMN: Image */}
        <div className="hero-image-section">
          <img
            src="/images/Bannertruck.png"
            alt="Roadshow Truck"
            className="hero-truck-img"
          />
        </div>

      </div>
    </section>
  );
};

export default OffersBanner;