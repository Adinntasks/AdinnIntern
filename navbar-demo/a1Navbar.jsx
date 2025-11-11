// ==========================================================
// Navbar Component (Desktop + Mobile Responsive Curved Capsule)
// ==========================================================
import React, { useState, useEffect, useRef } from "react";
import "./a1Navbar.css";

function Navbar() {
  // In a real app, you'd use useNavigate from react-router-dom
  const navigate = (path) => console.log(`Navigating to: ${path}`);

  const [isOpen, setIsOpen] = useState(false);
  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (desktopDropdownRef.current && desktopDropdownRef.current.contains(event.target)) {
        return;
      }
      if (mobileDropdownRef.current && mobileDropdownRef.current.contains(event.target)) {
        return;
      }
      setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // --- Dummy Handlers & Data ---
  const handleEmployeeLogin = () => console.log("Employee login clicked");
  const handleCustomerLogin = () => console.log("Customer login clicked");
  const handleLogout = () => console.log("Logout clicked");
  const user = null;
  const employeeUser = null;
  const isLoggedIn = user || employeeUser;
  // --------------------------------

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
        <div className="navUserMain" onClick={handleLogout} style={{ color: "#ff4444", fontWeight: "bold" }}>
          <img src="/images/NavUserImg5.png" className="navUserImg" alt="Logout" />
          <div>Log Out</div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* ==========================================================
          DESKTOP NAVBAR (≥ 768px)
      ========================================================== */}
      <header className="rdshowNavMain">
        {/* Left: Logo */}
        <div className="NavRoadShowLogo" onClick={() => navigate("/")}>
          <img src="/images/Adinn New Logo_Main.png" alt="Logo" />
        </div>

        {/* Center: Navigation Links */}
        <nav className="rdNavContentMain">
          <ul>
            <li onClick={() => navigate("/")}>
              <img src="/images/NavbarIcon1.png" className="NavbarIcon1" alt="Home" />
              <a>Home</a>
            </li>
            <li onClick={() => navigate("/about")}>
              <img src="/images/NavbarIcon2.png" className="NavbarIcon1" alt="About Us" />
              <a>About Us</a>
            </li>
            <li onClick={() => navigate("/projects")}>
              <img src="/images/NavbarIcon3.png" className="NavbarIcon1" alt="Projects" />
              <a>Projects</a>
            </li>
          </ul>
        </nav>

        {/* Right: User / Dropdown */}
        <div className="nav_container" ref={desktopDropdownRef}>
          <img
            src="/images/NavbarIcon4Hamburger.png"
            className="NavbarIcon1 hamburger-icon"
            alt="Menu"
            onClick={() => setIsOpen(!isOpen)}
          />
          <DropdownMenu />
        </div>
      </header>

      {/* Secondary Capsule Navbar (Desktop) */}
      <nav className="rdshowNavMain1">
        <div onClick={() => navigate("/vehicleTypes")}>Vehicle Types</div>
        <div onClick={() => navigate("/packages")}>Packages</div>
        <div onClick={() => navigate("/offers")}>Offers</div>
      </nav>

      {/* ==========================================================
          MOBILE NAVBAR (< 767px)
      ========================================================== */}
      <header className="mobile-navbar">
        {/* Left: Logo */}
        <div className="mobile-navbar-left">
          <img
            src="/images/Adinn New Logo_Main.png"
            alt="Logo"
            className="NavRoadShowLogo"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Center: Capsule Links */}
        <div className="mobile-navbar-center">
            <div className="mobile-navbar-center-capsule">
                <div onClick={() => navigate("/vehicleTypes")}>Vehicles</div>
                <div onClick={() => navigate("/packages")}>Packages</div>
                <div onClick={() => navigate("/offers")}>Offers</div>
            </div>
        </div>

        {/* Right: Hamburger & Dropdown */}
        <div className="mobile-navbar-right" ref={mobileDropdownRef}>
          <img
            src="/images/NavbarIcon4Hamburger.png"
            alt="Menu"
            className="NavbarIcon1"
            onClick={() => setIsOpen(!isOpen)}
          />
          <DropdownMenu />
        </div>
      </header>
    </>
  );
}

export default Navbar;