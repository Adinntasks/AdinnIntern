import React, { useState } from "react";
import "./Offers.css";

const offers = [
  {
    title: "LED Roadshow Vehicle",
    price: "₹25,000/Per Day",
    discount: "5% OFF",
    rating: "4.3",
    images: ["/images/gridtruck.png", "/images/gridtruck.png", "/images/gridtruck.png"],
  },
  {
    title: "LED Roadshow Vehicle",
    price: "₹25,000/Per Day",
    discount: "5% OFF",
    rating: "4.3",
    images: ["/images/gridtruck.png", "/images/gridtruck.png", "/images/gridtruck.png"],
  },
];

const Offers = () => {
  return (
    <section className="offers-page">
      <h2>Offers On Chennai</h2>
      <div className="offers-grid">
        {offers.map((offer, index) => (
          <OfferCard key={index} offer={offer} />
        ))}
      </div>
    </section>
  );
};

const OfferCard = ({ offer }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const nextSlide = () => {
    setCurrentImg((prev) => (prev + 1) % offer.images.length);
  };

  const prevSlide = () => {
    setCurrentImg(
      (prev) => (prev - 1 + offer.images.length) % offer.images.length
    );
  };

  const goToSlide = (index) => {
    setCurrentImg(index);
  };

  return (
    <div className="offer-card">
      <div className="best-seller">Best Seller</div>

      <div className="image-carousel">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentImg * 100}%)`,
          }}
        >
          {offer.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${offer.title} ${i + 1}`}
              className="carousel-image"
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <button className="carousel-btn left" onClick={prevSlide}>
          ‹
        </button>
        <button className="carousel-btn right" onClick={nextSlide}>
          ›
        </button>

        {/* Dots */}
        <div className="carousel-dots">
          {offer.images.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentImg ? "active" : ""}`}
              onClick={() => goToSlide(i)}
            ></span>
          ))}
        </div>
      </div>

      <h3>{offer.title}</h3>
      <p>
        Exclusive Chennai Deal – <strong>{offer.discount}</strong>
      </p>
      <p className="price">{offer.price}</p>
      <div className="rating">⭐ {offer.rating}</div>
      <button className="view-btn">View Details</button>
    </div>
  );
};

export default Offers;
