import React, { useState, useRef, useEffect } from "react";
import "./Offers.css"; // Make sure to update this CSS file with the new class names!

const offers = [
  {
    title: "LED Roadshow Vehicle",
    price: "₹25,000",
    discount: "5% OFF",
    rating: "4.3",
    type: "Trucks",
    state: "Tamil Nadu",
    images: ["/images/gridtruck.png", "/images/gridtruck.png", "/images/gridtruck.png"],
  },
  {
    title: "LED Roadshow Vehicle",
    price: "₹25,000",
    discount: "5% OFF",
    rating: "4.3",
    type: "Vans",
    state: "Karnataka",
    images: ["/images/gridtruck.png", "/images/gridtruck.png", "/images/gridtruck.png"],
  },
  {
    title: "LED Roadshow Vehicle",
    price: "₹25,000",
    discount: "5% OFF",
    rating: "4.3",
    type: "Cars",
    state: "Kerala",
    images: ["/images/gridtruck.png", "/images/gridtruck.png", "/images/gridtruck.png"],
  },
  {
    title: "LED Roadshow Vehicle",
    price: "₹25,000",
    discount: "5% OFF",
    rating: "4.3",
    type: "Trucks",
    state: "Andhra Pradesh",
    images: ["/images/gridtruck.png", "/images/gridtruck.png", "/images/gridtruck.png"],
  }
];

const vehicleTypes = [
  { id: 'trucks', label: 'Trucks' },
  { id: 'vans', label: 'Vans' },
  { id: 'cars', label: 'Cars' }
];

const indianStates = [
  'Tamil Nadu', 'Karnataka', 'Kerala', 'Andhra Pradesh', 'Telangana', 
  'Maharashtra', 'Gujarat', 'Rajasthan', 'Delhi', 'Uttar Pradesh'
];

const Offers = () => {
  const [selectedVehicleTypes, setSelectedVehicleTypes] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const filterDropdownRef = useRef(null);
  const filterButtonRef = useRef(null); // Ref for the Filter By button

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Allow the click if it's the filter button itself
      if (filterButtonRef.current && filterButtonRef.current.contains(event.target)) {
        return;
      }
      
      // Close if the click is outside the dropdown content
      if (filterDropdownRef.current && !filterDropdownRef.current.contains(event.target)) {
        setShowFilterDropdown(false);
      }
    };

    if (showFilterDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showFilterDropdown]);

  // Filter offers logic remains the same
  const filteredOffers = offers.filter(offer => {
    const matchesVehicleType = selectedVehicleTypes.length === 0 || 
                              selectedVehicleTypes.includes(offer.type);
    const matchesState = selectedStates.length === 0 || 
                        selectedStates.includes(offer.state);
    const matchesSearch = searchTerm === '' || 
                         offer.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesVehicleType && matchesState && matchesSearch;
  });

  const handleVehicleTypeChange = (vehicleType) => {
    setSelectedVehicleTypes(prev => 
      prev.includes(vehicleType) 
        ? prev.filter(vt => vt !== vehicleType)
        : [...prev, vehicleType]
    );
  };

  const handleStateChange = (state) => {
    setSelectedStates(prev => 
      prev.includes(state) 
        ? prev.filter(s => s !== state)
        : [...prev, state]
    );
  };

  const clearAllFilters = () => {
    setSelectedVehicleTypes([]);
    setSelectedStates([]);
    setSearchTerm('');
  };

  const toggleFilterDropdown = () => {
    setShowFilterDropdown(!showFilterDropdown);
  };
  
  const closeFilterDropdown = () => {
    setShowFilterDropdown(false);
  };

  return (
    <section className="rdAvailVehPageDtpg">
      <div className="rdAvailVehHeaderDtpg">
        <h2>Offers On Chennai</h2>
        <div className="rdAvailVehFiltersDtpg">
          <button 
            ref={filterButtonRef} // Attach ref to the button
            className="rdAvailVehFilterByBtnDtpg"
            onClick={toggleFilterDropdown}
          >
            FILTER BY
          </button>
          
          {/* Note: In the screenshot, CLEAR ALL appears faintly to the right of the dropdown, 
              but keeping it here for its functional grouping. Adjusting CSS to match the faint text. */}
          <button 
            className="rdAvailVehClearAllBtnDtpg"
            onClick={clearAllFilters}
            disabled={selectedVehicleTypes.length === 0 && selectedStates.length === 0 && searchTerm === ''}
          >
            CLEAR ALL
          </button>
          
          {showFilterDropdown && (
            <div ref={filterDropdownRef} className="rdAvailVehFilterDropdownDtpg">
              
              {/* Close button in the top right corner */}
              <button 
                className="rdAvailVehCloseDropdownBtnDtpg" 
                onClick={closeFilterDropdown} 
                aria-label="Close filters"
              >
                &times; 
              </button>
              
              <div className="rdAvailVehFilterSectionDtpg">
                <h4>Vehicles</h4>
                <div className="rdAvailVehCheckboxesDtpg">
                  {/* Mapping over original vehicle types */}
                  {vehicleTypes.map(vehicle => (
                    <label key={vehicle.id} className="rdAvailVehCheckboxLabelDtpg">
                      <input
                        type="checkbox"
                        checked={selectedVehicleTypes.includes(vehicle.label)}
                        onChange={() => handleVehicleTypeChange(vehicle.label)}
                        className="rdAvailVehCheckboxDtpg"
                      />
                      {vehicle.label}
                    </label>
                  ))}
                  {/* Placeholder vehicles if needed to match the number of lines in the screenshot: */}
                  {/* <label key="mobile-van-placeholder" className="rdAvailVehCheckboxLabelDtpg">
                      <input type="checkbox" className="rdAvailVehCheckboxDtpg" />
                      Mobile Branding Van
                  </label> */}
                  {/* <label key="l-type-placeholder" className="rdAvailVehCheckboxLabelDtpg">
                      <input type="checkbox" className="rdAvailVehCheckboxDtpg" />
                      L-Type Seating
                  </label> */}
                </div>
              </div>
              
              <div className="rdAvailVehSearchSectionDtpg">
                {/* Simplified search input - no button/icon wrapper in the new screenshot */}
                <input
                  type="text"
                  placeholder="Search vehicles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="rdAvailVehSearchInputDtpg"
                />
                
                {/* The new screenshot has a magnifying glass icon next to the search input, but in a button-like box. 
                   I'll re-add the magnifying glass as a pseudo-element or simple element inside a slightly restyled wrapper if needed, 
                   but for now, stick to the simple input as requested in the previous step's code.
                   
                   Based on the *latest* screenshot, it looks like a magnifying glass icon *is* present next to the search input, 
                   but the 'State' label immediately follows it, implying the search input is self-contained. 
                   The previous search wrapper was more accurate for the overall style. Re-adding the previous search wrapper structure: */}
              </div>
              
              <div className="rdAvailVehStateSectionDtpg">
                <h4>States</h4>
                <div className="rdAvailVehStateCheckboxesDtpg">
                  {indianStates.map(state => (
                    <label key={state} className="rdAvailVehCheckboxLabelDtpg">
                      <input
                        type="checkbox"
                        checked={selectedStates.includes(state)}
                        onChange={() => handleStateChange(state)}
                        className="rdAvailVehCheckboxDtpg"
                      />
                      {state}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="rdAvailVehGridDtpg">
        {filteredOffers.map((offer, index) => (
          <OfferCard key={index} offer={offer} />
        ))}
      </div>
    </section>
  );
};

// ... (OfferCard component remains unchanged) ...
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
          {/* Dots - Set the active index as a CSS variable on the container */}
        <div 
          className="rdAvailVehCarouselDotsDtpg" 
          style={{ '--active-dot-index': currentImg }} // ADDED: CSS Variable
        >
          {offer.images.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentImg ? "active" : ""}`}
              onClick={() => goToSlide(i)}
              data-index={i} // ADDED: Data attribute for proximity calculation
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