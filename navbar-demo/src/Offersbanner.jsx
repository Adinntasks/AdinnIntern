import React from "react";
import "./OffersBanner.css";

const OffersBanner = () => {
  const handleBannerClick = () => {
    const offersContent = document.getElementById('offers-content');
    if (offersContent) {
      offersContent.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero-banner-wrapper">
      {/* The entire banner is now a clickable div with smooth scrolling */}
      <div 
        className="hero-banner-link" 
        onClick={handleBannerClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleBannerClick();
          }
        }}
      >
        <img
          src="/images/Banner.png" 
          alt="Special Roadshow Offer - Book Now"
          className="hero-banner-img"
        />
      </div>
    </section>
  );
};

export default OffersBanner;