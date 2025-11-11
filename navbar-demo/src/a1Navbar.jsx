// ==========================================================
// Navbar Component (Responsive – Renders Only One Version)
// ==========================================================
import React, { useState, useEffect, useRef } from "react";
import "./a1Navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);
  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  // Update on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigate = (path) => console.log(`Navigating to: ${path}`);

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
    // ✅ MOBILE NAVBAR
    return (
      <header className="mobile-navbar">
        <div className="mobile-navbar-left">
          <img
            src="/images/Adinn New Logo_Main.png"
            alt="Logo"
            className="NavRoadShowLogo"
            onClick={() => navigate("/")}
          />
        </div>

        <div className="mobile-navbar-center">
          <div className="mobile-navbar-center-capsule">
            <div onClick={() => console.log("Vehicles clicked")}>Vehicles</div>
            <div onClick={() => console.log("Packages clicked")}>Packages</div>
            <div onClick={() => console.log("Offers clicked")}>Offers</div>
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
    );
  }

  // ✅ DESKTOP NAVBAR
  return (
    <div className="desktop-navbar-container">
      <header className="rdshowNavMain">
        {/* Left: Logo */}
        <div className="NavRoadShowLogo" onClick={() => navigate("/")}>
          <img src="/images/Adinn New Logo_Main.png" alt="Logo" />
        </div>

        {/* Center: Navigation Links */}
        <nav className="rdNavContentMain">
          <ul>
            <li onClick={() => navigate("/")}>
              <img src="./images/NavbarIcon1.png" className="NavbarIcon1" alt="Home" />
              <a>Home</a>
            </li>
            <li onClick={() => navigate("/about")}>
              <img src="./images/NavbarIcon2.png" className="NavbarIcon1" alt="About Us" />
              <a>About Us</a>
            </li>
            <li onClick={() => navigate("/projects")}>
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
          <div onClick={() => console.log("Vehicle Types clicked")}>Vehicle Types</div>
          <div onClick={() => console.log("Packages clicked")}>Packages</div>
          <div onClick={() => console.log("Offers clicked")}>Offers</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
