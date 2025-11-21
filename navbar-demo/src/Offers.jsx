import React from "react";
import "./Offers.css";

const offers = new Array(9).fill({
  title: "LED Roadshow Vehicle",
  price: "₹25,000/Per Day",
  discount: "5% OFF",
  rating: "4.3",
  img: "/public/images/gridtruck.png",
});

const Offers = () => {
  return (
    <section className="offers-section">
      <h2>Offers On Chennai</h2>
      <div className="offers-grid">
        {offers.map((offer, index) => (
          <div className="offer-card" key={index}>
            <div className="best-seller">Best Seller</div>
            <img src={offer.img} alt={offer.title} />
            <h3>{offer.title}</h3>
            <p>
              Exclusive Chennai Deal – <strong>{offer.discount}</strong>
            </p>
            <p className="price">{offer.price}</p>
            <div className="rating">⭐ {offer.rating}</div>
            <button className="view-btn">View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
