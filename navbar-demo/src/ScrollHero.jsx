import React, { useEffect, useState } from "react";
import "./ScrollHero.css";

export default function ScrollHero() {
  const [scrollX, setScrollX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(window.innerWidth);

  const heroImages = [
    { id: 1, src: "/images/Caraousel_1.jpg", text: "Own the moment, Own the attention", buttonText: "Secure Spot" },
    { id: 2, src: "/images/Caraousel_2.jpg", text: "Own the moment, Own the attention", buttonText: "Secure Spot" },
    { id: 3, src: "/images/Caraousel_3.jpg", text: "Own the moment, Own the attention", buttonText: "Secure Spot" },
    { id: 4, src: "/images/Caraousel_4.jpg", text: "Own the moment, Own the attention", buttonText: "Secure Spot" }
  ];

  const MAX_SCROLL = slideWidth * (heroImages.length - 1);
  const SCROLL_SPEED = 1.5;

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    const updateWidth = () => setSlideWidth(window.innerWidth);

    update();
    updateWidth();

    window.addEventListener("resize", update);
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

useEffect(() => {
  const handleWheel = (e) => {
    if (window.innerWidth < 768) return;
    if (window.scrollY > 10) return;

    // Ignore sideways jitter from trackpad
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

    // Ignore ultra-small noise
    if (Math.abs(e.deltaY) < 0.5) return;

    const delta = e.deltaY * SCROLL_SPEED;
    const next = Math.floor(scrollX + delta);

    if ((delta > 0 && scrollX < MAX_SCROLL) || (delta < 0 && scrollX > 0)) {
      e.preventDefault();
      setScrollX(Math.max(0, Math.min(MAX_SCROLL, next)));
    }
  };

  window.addEventListener("wheel", handleWheel, { passive: false });
  return () => window.removeEventListener("wheel", handleWheel);
}, [scrollX, MAX_SCROLL]);

  const DesktopScrollHero = () => (
    <div className="desktop-hero-container">
      <div
        className="desktop-track"
        style={{
          width: `${heroImages.length * slideWidth}px`,
          transform: `translateX(-${scrollX}px)`
        }}
      >
        {heroImages.map((img) => (
          <div
            key={img.id}
            className="desktop-slide"
            style={{ width: `${slideWidth}px` }}
          >
            <img src={img.src} alt="" className="desktop-image" />

            <div className="desktop-text">
              <p className="desktop-title">{img.text}</p>
              <button className="desktop-button">{img.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );



  /* -----------------------------------------
     MOBILE VIEW
  ------------------------------------------ */
  /* -----------------------------------------
   MOBILE CAROUSEL NAVIGATION (must come BEFORE MobileCarousel)
------------------------------------------ */
const nextSlide = () => setCurrentSlide((p) => (p + 1) % heroImages.length);
const prevSlide = () => setCurrentSlide((p) => (p === 0 ? heroImages.length - 1 : p - 1));
const goToSlide = (i) => setCurrentSlide(i);

/* -----------------------------------------
   MOBILE VIEW
------------------------------------------ */
const MobileCarousel = () => (
  <div className="mobile-carousel-container">
    <div
      className="mobile-carousel-track"
      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
    >
      {heroImages.map((img) => (
        <div className="mobile-carousel-slide" key={img.id}>
          <img src={img.src} className="mobile-image" />
          <div className="mobile-text-wrapper">
            <p className="mobile-title">{img.text}</p>
            <button className="mobile-button">{img.buttonText}</button>
          </div>
        </div>
      ))}
    </div>

    <div className="carousel-dots">
      {heroImages.map((_, i) => (
        <button
          key={i}
          className={`carousel-dot ${i === currentSlide ? "active" : ""}`}
          onClick={() => goToSlide(i)}
        />
      ))}
    </div>

    <button className="carousel-arrow prev" onClick={prevSlide}>‹</button>
    <button className="carousel-arrow next" onClick={nextSlide}>›</button>
  </div>
);

  return isMobile ? <MobileCarousel /> : <DesktopScrollHero />;
}
