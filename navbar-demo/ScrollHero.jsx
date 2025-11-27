import React, { useEffect, useState } from "react";
import "./ScrollHero.css";

export default function ScrollHero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    { id: 1, src: "/images/Caraousel_1.jpg", text: "Own the moment, Own the attention", buttonText: "Secure Spot" },
    { id: 2, src: "/images/Caraousel_2.jpg", text: "Own the moment, Own the attention", buttonText: "Secure Spot" },
    { id: 3, src: "/images/Caraousel_3.jpg", text: "Own the moment, Own the attention", buttonText: "Secure Spot" },
    { id: 4, src: "/images/Caraousel_4.jpg", text: "Own the moment, Own the attention", buttonText: "Secure Spot" }
  ];

  // 🔹 keep resize listener only for switching views
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* -----------------------------------------------------------
      DESKTOP HORIZONTAL SCROLL HERO (completely isolated)
  ------------------------------------------------------------ */
  const DesktopScrollHero = () => {
    useEffect(() => {
      const section = document.querySelector(".desktop-hero-container");
      const track = document.querySelector(".desktop-track");
      if (!section || !track) return;

      const slides = heroImages.length;
      const slideWidth = window.innerWidth;
      const totalScroll = slideWidth * (slides - 1);

      // Create a scroll spacer *only in desktop mode*
      let spacer = document.querySelector("#hero-spacer");
      if (!spacer) {
        spacer = document.createElement("div");
        spacer.id = "hero-spacer";
        section.parentNode.insertBefore(spacer, section.nextSibling);
      }

      // Extended spacer height for much longer hero visibility
      // Add extra scroll duration before main content appears
      const extendedScrollDistance = totalScroll + (window.innerWidth * 4.5); // Extra 4 viewport widths
      spacer.style.height = `${extendedScrollDistance}px`;

      const start = section.offsetTop;
      const end = start + extendedScrollDistance;

      const handleScroll = () => {
        const scrollY = window.scrollY;
        
        if (scrollY >= start && scrollY <= end) {
          // In hero scroll area - fixed positioning
          section.style.position = "fixed";
          section.style.top = "0";
          section.style.left = "0";
          section.style.width = "100%";
          section.style.zIndex = "1";

          // Calculate extended progress within scroll area
          const extendedScrollDistance = totalScroll + (window.innerWidth * 4); // Extra 4 viewport widths
          const scrollProgress = Math.min(Math.max(scrollY - start, 0), extendedScrollDistance);
          
          // Slow down horizontal movement to extend duration
          // Map scroll progress to slide progress with easing
          const horizontalProgress = Math.min((scrollProgress / extendedScrollDistance) * totalScroll, totalScroll);
          
          track.style.transform = `translateX(-${horizontalProgress}px)`;
        } else if (scrollY > end) {
          // Past hero scroll area - position at end of hero
          const extendedScrollDistance = totalScroll + (window.innerWidth * 4); // Extra 4 viewport widths
          section.style.position = "absolute";
          section.style.top = `${extendedScrollDistance}px`;
          section.style.left = "0";
          section.style.width = "100%";
          section.style.zIndex = "1";
          
          track.style.transform = `translateX(-${totalScroll}px)`;
        } else {
          // Before hero scroll area - normal flow
          section.style.position = "relative";
          section.style.top = "auto";
          section.style.left = "auto";
          section.style.width = "100%";
          section.style.zIndex = "auto";
          
          track.style.transform = `translateX(0px)`;
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll(); // Initial call

      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (spacer && spacer.parentNode) {
          spacer.remove();
        }
        // Cleanup styles
        section.style.position = "";
        section.style.top = "";
        section.style.left = "";
        section.style.width = "";
        section.style.zIndex = "";
        track.style.transform = "";
      };
    }, [heroImages.length]);

    return (
      <div className="desktop-hero-container">
        <div className="desktop-track">
          {heroImages.map((img) => (
            <div key={img.id} className="desktop-slide">
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
  };

  /* -----------------------------------------------------------
      MOBILE CAROUSEL (fully isolated with swipe support)
  ------------------------------------------------------------ */
  const nextSlide = () => setCurrentSlide((p) => (p + 1) % heroImages.length);
  const prevSlide = () => setCurrentSlide((p) => (p === 0 ? heroImages.length - 1 : p - 1));
  const goToSlide = (i) => setCurrentSlide(i);

  // Touch/swipe gesture handling
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide(); // Swipe left - go to next slide (circular)
    } else if (isRightSwipe) {
      prevSlide(); // Swipe right - go to previous slide (circular)
    }
  };

  const MobileCarousel = () => (
    <div className="mobile-carousel-container"
         onTouchStart={onTouchStart}
         onTouchMove={onTouchMove}
         onTouchEnd={onTouchEnd}>
      <div
        className="mobile-carousel-track"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {heroImages.map((img) => (
          <div className="mobile-carousel-slide" key={img.id}>
            <img src={img.src} className="mobile-image" alt={img.text} />
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
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <button className="carousel-arrow prev" onClick={prevSlide} aria-label="Previous slide">‹</button>
      <button className="carousel-arrow next" onClick={nextSlide} aria-label="Next slide">›</button>
    </div>
  );

  return isMobile ? <MobileCarousel /> : <DesktopScrollHero />;
}
