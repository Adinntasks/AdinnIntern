// ==========================================================
// Navbar Component (Responsive – Renders Only One Version)
// ==========================================================
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./a1Navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);
  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Update on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add body padding for mobile bottom navbar
  useEffect(() => {
    if (isMobile) {
      document.body.classList.add('with-bottom-nav');
    } else {
      document.body.classList.remove('with-bottom-nav');
    }
    
    return () => {
      document.body.classList.remove('with-bottom-nav');
    };
  }, [isMobile]);

  const handleNavigate = (path) => {
    navigate(path);
  };

  // Check if current path matches
  const isActivePath = (path) => {
    return location.pathname === path || 
           (path === '/' && location.pathname === '/home') ||
           (path === '/vehicle-types' && location.pathname === '/vehicle-types') ||
           (path === '/packages' && location.pathname === '/packages');
  };

  const handleEmployeeLogin = () => console.log("Employee login clicked");
  const handleCustomerLogin = () => console.log("Customer login clicked");
  const handleLogout = () => console.log("Logout clicked");

  const user = null;
  const employeeUser = null;
  const isLoggedIn = user || employeeUser;

  const DropdownMenu = () => (
    <div className={`nav_user-content ${isOpen ? "open" : ""}`}>
      <div className="navUserMain">
        <img src="/images/NavUserImg1.png" className="navUserImg" alt="Bookings" />
        <div>My Bookings</div>
      </div>
      <div className="navUserMain">
        <img src="/images/NavUserImg2.png" className="navUserImg" alt="Profile" />
        <div>Profile & Settings</div>
      </div>
      <div className="navUserMain" onClick={handleEmployeeLogin}>
        <img src="/images/NavUserImg3.png" className="navUserImg" alt="Employee" />
        <div>Employee Log In</div>
      </div>
      <div className="navUserMain" onClick={handleCustomerLogin}>
        <img src="/images/NavUserImg4.png" className="navUserImg" alt="Login" />
        <div>Customer Log In</div>
      </div>
      {isLoggedIn && (
        <div
          className="navUserMain"
          onClick={handleLogout}
          style={{ color: "#ff4444", fontWeight: "bold" }}
        >
          <img src="/images/NavUserImg5.png" className="navUserImg" alt="Logout" />
          <div>Log Out</div>
        </div>
      )}
    </div>
  );

  // ==========================================================
  // CONDITIONAL RENDERING
  // ==========================================================
  if (isMobile) {
    // ✅ MOBILE NAVBAR with bottom navigation
    return (
      <div className="mobile-nav-wrapper">
        {/* Top mobile navbar with capsule */}
        <header className="mobile-navbar">
          <div className="mobile-navbar-left">
            <img
              src="/images/Adinn New Logo_Main.png"
              alt="Logo"
              className="NavRoadShowLogo glossy-logo"
              onClick={() => handleNavigate("/")}
            />
          </div>

          <div className="mobile-navbar-center">
            <div className="mobile-navbar-center-capsule">
              <div 
                onClick={() => handleNavigate("/vehicle-types")}
                className={isActivePath("/vehicle-types") ? "active" : ""}
              >Vehicles</div>
              <div 
                onClick={() => handleNavigate("/packages")}
                className={isActivePath("/packages") ? "active" : ""}
              >Packages</div>
              <div 
                onClick={() => handleNavigate("/offers")}
                className={isActivePath("/offers") ? "active" : ""}
              >Offers</div>
            </div>
          </div>

          <div className="mobile-navbar-right" ref={mobileDropdownRef}>
            <img
              src="./images/NavbarIcon4Hamburger.png"
              alt="Menu"
              className="NavbarIcon1"
              onClick={() => setIsOpen(!isOpen)}
            />
            <DropdownMenu />
          </div>
        </header>

        {/* Bottom navigation bar */}
        <nav className="mobile-bottom-nav">
          <div className="mobile-bottom-nav-items">
            <div 
              className={`mobile-bottom-nav-item ${isActivePath("/") ? "active" : ""}`} 
              onClick={() => handleNavigate("/")}
            >
              <img src="/images/NavbarIcon1.png" alt="Home" />
              <span>Home</span>
            </div>
            <div 
              className={`mobile-bottom-nav-item ${isActivePath("/projects") ? "active" : ""}`} 
              onClick={() => handleNavigate("/projects")}
            >
              <img src="/images/NavbarIcon3.png" alt="Projects" />
              <span>Projects</span>
            </div>
            <div 
              className={`mobile-bottom-nav-item ${isActivePath("/offers") ? "active" : ""}`} 
              onClick={() => handleNavigate("/offers")}
            >
              <img src="/images/NavbarIcon2.png" alt="Offers" />
              <span>Offers</span>
            </div>
            <div 
              className={`mobile-bottom-nav-item ${isActivePath("/about") ? "active" : ""}`} 
              onClick={() => handleNavigate("/about")}
            >
              <img src="/images/NavbarIcon4Hamburger.png" alt="About" />
              <span>About</span>
            </div>
          </div>
        </nav>
      </div>
    );
  }

  // ✅ DESKTOP NAVBAR
  return (
    <div className="desktop-navbar-container">
      <header className="rdshowNavMain">
        {/* Left: Logo */}
        <div className="NavRoadShowLogo glossy-logo" onClick={() => handleNavigate("/")}>
          <img src="/images/Adinn New Logo_Main.png" alt="Logo" />
        </div>

        {/* Center: Navigation Links */}
        <nav className="rdNavContentMain">
          <ul>
            <li 
              onClick={() => handleNavigate("/")} 
              className={isActivePath("/") ? "active" : ""}
            >
              <img src="./images/NavbarIcon1.png" className="NavbarIcon1" alt="Home" />
              <a>Home</a>
            </li>
            <li 
              onClick={() => handleNavigate("/about")} 
              className={isActivePath("/about") ? "active" : ""}
            >
              <img src="./images/NavbarIcon2.png" className="NavbarIcon1" alt="About Us" />
              <a>About Us</a>
            </li>
            <li 
              onClick={() => handleNavigate("/projects")} 
              className={isActivePath("/projects") ? "active" : ""}
            >
              <img src="./images/NavbarIcon3.png" className="NavbarIcon1" alt="Projects" />
              <a>Projects</a>
            </li>
          </ul>
        </nav>

        {/* Right: User Dropdown */}
        <div className="nav_container" ref={desktopDropdownRef}>
          <img
            src="./images/NavbarIcon4Hamburger.png"
            className="NavbarIcon1 hamburger-icon"
            alt="Menu"
            onClick={() => setIsOpen(!isOpen)}
          />
          <DropdownMenu />
        </div>
      </header>

      {/* Capsule Menu (desktop only) */}
      <div className="desktop-capsule-bar">
        <div className="capsule-inner">
          <div 
            onClick={() => handleNavigate("/vehicle-types")}
            className={isActivePath("/vehicle-types") ? "active" : ""}
          >Vehicle Types</div>
          <div 
            onClick={() => handleNavigate("/packages")}
            className={isActivePath("/packages") ? "active" : ""}
          >Packages</div>
          <div 
            onClick={() => handleNavigate("/offers")}
            className={isActivePath("/offers") ? "active" : ""}
          >Offers</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
