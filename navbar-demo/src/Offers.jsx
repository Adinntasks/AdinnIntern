import React, { useState, useRef, useEffect } from "react";
import "./Offers.css"; // Make sure to update this CSS file with the new class names!

const offers = [
  {
    title: "LED Roadshow Vehicle",
    price: "₹25,000",
    discount: "5% OFF",
    rating: "4.3",
    images: ["/images/gridtruck.png", "/images/gridtruck.png", "/images/gridtruck.png"],
  },
  {
    title: "LED Roadshow Vehicle",
    price: "₹25,000",
    discount: "5% OFF",
    rating: "4.3",
    images: ["/images/gridtruck.png", "/images/gridtruck.png", "/images/gridtruck.png"],
  },
  {
    title: "LED Roadshow Vehicle",
    price: "₹25,000",
    discount: "5% OFF",
    rating: "4.3",
    images: ["/images/gridtruck.png", "/images/gridtruck.png", "/images/gridtruck.png"],
  },
  {
    title: "LED Roadshow Vehicle",
    price: "₹25,000",
    discount: "5% OFF",
    rating: "4.3",
    images: ["/images/gridtruck.png", "/images/gridtruck.png", "/images/gridtruck.png"],
  }
];

const Offers = () => {
  return (
    // Renamed container classes to match the style logic (inferred)
    <section className="rdAvailVehPageDtpg">
      <h2>Offers On Chennai</h2>
      <div className="rdAvailVehGridDtpg">
        {offers.map((offer, index) => (
          <OfferCard key={index} offer={offer} />
        ))}
      </div>
    </section>
  );
};

const OfferCard = ({ offer }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const isDragging = useRef(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);

  // Create circular array with cloned first and last images for seamless transitions
  const circularImages = [
    offer.images[offer.images.length - 1], // Clone of last image
    ...offer.images,
    offer.images[0] // Clone of first image
  ];

  // Adjusted index to account for the cloned images (add 1 offset)
  const adjustedIndex = currentImg + 1;

  // Check if it's a touch device (more flexible for different screen sizes)
  useEffect(() => {
    const checkDevice = () => {
      const isTouchCapable = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      // More flexible: detect touch capability without strict screen size requirement
      setIsTouchDevice(isTouchCapable);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const nextSlide = () => {
    setCurrentImg((prev) => {
      const nextIndex = prev + 1;
      // If we're at the last real image, transition to cloned first image
      if (nextIndex === offer.images.length) {
        // Enable transition for smooth animation to cloned first image
        setIsTransitionEnabled(true);
        return 0;
      }
      return nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentImg((prev) => {
      const prevIndex = prev - 1;
      // If we're at the first real image, transition to cloned last image
      if (prevIndex < 0) {
        // Enable transition for smooth animation to cloned last image
        setIsTransitionEnabled(true);
        return offer.images.length - 1;
      }
      return prevIndex;
    });
  };

  // Handle seamless transition after animation completes
  const handleTransitionEnd = () => {
    // If we're at the cloned first image (index 0 in circular array), jump to last real image
    if (adjustedIndex === 0) {
      setIsTransitionEnabled(false);
      setCurrentImg(offer.images.length - 1);
    }
    // If we're at the cloned last image (last index in circular array), jump to first real image
    else if (adjustedIndex === circularImages.length - 1) {
      setIsTransitionEnabled(false);
      setCurrentImg(0);
    }
  };

  const goToSlide = (index) => {
    setCurrentImg(index);
    setIsTransitionEnabled(true);
  };

  // Touch event handlers for swipe gestures with circular navigation
  const handleTouchStart = (e) => {
    if (!isTouchDevice) return;
    
    const touch = e.touches[0];
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
    isDragging.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current || !isTouchDevice) return;
    
    // Prevent default scrolling behavior when swiping
    e.preventDefault();
  };

  const handleTouchEnd = (e) => {
    if (!isDragging.current || !isTouchDevice) return;
    
    const touch = e.changedTouches[0];
    const touchEndX = touch.clientX;
    const touchEndY = touch.clientY;
    
    const deltaX = touchEndX - touchStartX.current;
    const deltaY = touchEndY - touchStartY.current;
    
    // Minimum swipe distance threshold (50px)
    const minSwipeDistance = 50;
    
    // Check if horizontal swipe is greater than vertical swipe and meets distance threshold
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0) {
        // Swipe right - go to previous slide (circular)
        prevSlide();
      } else {
        // Swipe left - go to next slide (circular)
        nextSlide();
      }
    }
    
    isDragging.current = false;
  };

  // Add mouse drag support for testing on desktop
  const handleMouseDown = (e) => {
    if (isTouchDevice) return; // Only for non-touch devices
    
    touchStartX.current = e.clientX;
    touchStartY.current = e.clientY;
    isDragging.current = true;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || isTouchDevice) return;
    e.preventDefault();
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current || isTouchDevice) return;
    
    const touchEndX = e.clientX;
    const touchEndY = e.clientY;
    
    const deltaX = touchEndX - touchStartX.current;
    const deltaY = touchEndY - touchStartY.current;
    
    const minSwipeDistance = 50;
    
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    
    isDragging.current = false;
  };

  return (
    // Root Card Class from Image
    <div className="rdAvailVehDtpgMain">
      
      {/* I created a new class for this badge consistent with the naming convention */}
      <div className="rdAvailVehBadgeDtpg">Best Seller</div>

      {/* Carousel Section - Updated for circular navigation */}
      <div 
        className="rdAvailVehCarouselDtpg"
        onTouchStart={isTouchDevice ? handleTouchStart : undefined}
        onTouchMove={isTouchDevice ? handleTouchMove : undefined}
        onTouchEnd={isTouchDevice ? handleTouchEnd : undefined}
        onMouseDown={!isTouchDevice ? handleMouseDown : undefined}
        onMouseMove={!isTouchDevice ? handleMouseMove : undefined}
        onMouseUp={!isTouchDevice ? handleMouseUp : undefined}
      >
        <div
          className="rdAvailVehCarouselTrackDtpg"
          style={{
            transform: `translateX(-${adjustedIndex * 100}%)`,
            transition: isTransitionEnabled ? 'transform 0.4s ease-in-out' : 'none'
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {circularImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${offer.title} ${i + 1}`}
              className="rdAvailVehImgDtpg" 
            />
          ))}
        </div>

        {/* Dots - Only show dots for real images (exclude clones) */}
        <div className="rdAvailVehCarouselDotsDtpg">
          {offer.images.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentImg ? "active" : ""}`}
              onClick={() => goToSlide(i)}
            ></span>
          ))}
        </div>
      </div>

      {/* CHANGED: Use rdAvailVehContent instead of rdAvailVehDetailsDtpg */}
      <div className="rdAvailVehContent">
        
        {/* Title Class from Image */}
        <div className="rdAvailVehNameDtpg">{offer.title}</div>

        {/* Discount (Inferred class name as it wasn't in the image snippet) */}
        <div className="rdAvailVehDiscountDtpg">
            Exclusive Chennai Deal – <strong>{offer.discount}</strong>
        </div>

        {/* Price Class from Image */}
        <div className="rdAvailVehRatedDtpg">
             {offer.price} / Per Day
        </div>

        {/* Rating Class from Image */}
        <div className="rdAvailVehRatingStarDtpg">
           <div>{offer.rating} ⭐</div>
           {/* If you have the star image from the screenshot: */}
           {/* <img src='./images/AvailVehRatingStar.png' className='rdAvailVehRatingStarIcon' /> */}
        </div>

        {/* Button Class from Image */}
        <button className="rdAvailVehBtnDtpg">
            View Details
        </button>
      </div>
    </div>
  );
};

export default Offers;