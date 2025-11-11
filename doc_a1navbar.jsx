// ==========================================================
// a1Navbar.jsx — Annotated Diff Version
// OG → Updated
//
// Legend:
// 🔴 OLD       = Present in original file, replaced or deprecated now
// ⚪ RETAINED  = Unchanged between old and new
// 🟡 MODIFIED  = Existing logic updated or refactored
// 🟢 NEW       = Newly introduced feature, structure, or handler
// ==========================================================

// ⚪ RETAINED
import React, { useState, useEffect, useRef } from "react";
import "./a1Navbar.css";

// 🔴 OLD
// import { useNavigate } from "react-router-dom";
// import { useLogin } from "../Authentication/LoginContext";

// 🟢 NEW
// Stand-alone navigate placeholder (removed dependency)
const navigate = (path) => console.log(`Navigating to: ${path}`);

function Navbar() {
  // ⚪ RETAINED
  const [isOpen, setIsOpen] = useState(false);

  // 🔴 OLD
  // const [isMenuOpen, setMenuOpen] = useState(false);
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

  // ⚪ RETAINED
  const dropdownRef = useRef(null);

  // 🔴 OLD
  // const { openLogin, closeLogin, isLoginOpen, user, logoutUser, employeeUser, logoutEmployee } = useLogin();

  // ⚪ RETAINED: click-outside handler
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ⚪ RETAINED: scroll close logic
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // 🔴 OLD
  // const handleEmployeeLogin = async () => {
  //   closeLogin();
  //   openLogin();
  //   navigate("/employee");
  // };

  // 🟢 NEW
  const handleEmployeeLogin = () => console.log("Employee login clicked");
  const handleCustomerLogin = () => console.log("Customer login clicked");
  const handleLogout = () => console.log("Logout clicked");

  // 🟢 NEW
  const user = null;
  const employeeUser = null;
  const isLoggedIn = user || employeeUser;

  // ⚪ RETAINED: dropdown component pattern
  const DropdownMenu = () => (
    <div className={`nav_user-content ${isOpen ? "open" : ""}`}>
      {/* ⚪ RETAINED */}
      <div className="navUserMain">
        <img src="/images/NavUserImg1.png" className="navUserImg" alt="Bookings" />
        <div>My Bookings</div>
      </div>

      {/* ⚪ RETAINED */}
      <div className="navUserMain">
        <img src="/images/NavUserImg2.png" className="navUserImg" alt="Profile" />
        <div>Profile & Settings</div>
      </div>

      {/* 🔴 OLD
      {employeeUser && (
        <div className="navUserMain" onClick={() => navigate("/dashboard")}>
          <img src="/images/NavUserImg3.png" className="navUserImg" alt="Employee Dashboard" />
          <div>Employee Dashboard</div>
        </div>
      )}
      */}

      {/* 🟡 MODIFIED: simplified employee login */}
      <div className="navUserMain" onClick={handleEmployeeLogin}>
        <img src="/images/NavUserImg3.png" className="navUserImg" alt="Employee" />
        <div>Employee Log In</div>
      </div>

      {/* 🟡 MODIFIED: simplified customer login */}
      <div className="navUserMain" onClick={handleCustomerLogin}>
        <img src="/images/NavUserImg4.png" className="navUserImg" alt="Login" />
        <div>Customer Log In</div>
      </div>

      {/* ⚪ RETAINED: logout conditional */}
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
  // MAIN JSX
  // ==========================================================
  return (
    <>
      {/* ==========================================================
          Desktop Navbar (top section)
      ========================================================== */}

      {/* 🔴 OLD
      <div className="rdshowNavMain container"> */}
      {/* 🟡 MODIFIED */}
      <header className="rdshowNavMain">

        {/* ⚪ RETAINED: logo */}
        <div
          className="NavRoadShowLogo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <img
            src="/images/Adinn New Logo_Main.png"
            className="NavRoadShowLogo"
            alt="Logo"
          />
        </div>

        {/* ⚪ RETAINED: main nav links */}
        <nav className="rdNavContentMain">
          <ul>
            <li onClick={() => navigate("/")}>
              <img
                src="/images/NavbarIcon1.png"
                className="NavbarIcon1"
                alt="Home"
              />
              <a>Home</a>
            </li>

            <li onClick={() => navigate("/about")}>
              <img
                src="/images/NavbarIcon2.png"
                className="NavbarIcon1"
                alt="About"
              />
              <a>About Us</a>
            </li>

            <li onClick={() => navigate("/projects")}>
              <img
                src="/images/NavbarIcon3.png"
                className="NavbarIcon1"
                alt="Projects"
              />
              <a>Projects</a>
            </li>
          </ul>
        </nav>

        {/* ⚪ RETAINED: dropdown trigger */}
        <div className="nav_container" ref={dropdownRef}>
          <img
            src="/images/NavbarIcon4Hamburger.png"
            className="NavbarIcon1 hamburger-icon"
            alt="Menu"
            onClick={() => setIsOpen(!isOpen)}
          />
          <DropdownMenu />
        </div>
      </header>

      {/* ==========================================================
          Secondary Navbar (capsule)
      ========================================================== */}

      {/* 🔴 OLD
      <div className="rdshowNavMain1 container secondary-nav desktop-secondary"> */}
      {/* 🟡 MODIFIED */}
      <nav className="rdshowNavMain1">
        <div onClick={() => navigate("/vehicleTypes")}>Vehicle Types</div>
        <div onClick={() => navigate("/packages")}>Packages</div>
        <div onClick={() => navigate("/offers")}>Offers</div>
      </nav>

      {/* ==========================================================
          Mobile Navbar (new addition)
      ========================================================== */}

      {/* 🟢 NEW */}
      <header className="mobile-navbar">
        {/* 🟢 NEW: left logo */}
        <div className="mobile-navbar-left">
          <img
            src="/images/Adinn New Logo_Main.png"
            alt="Logo"
            className="NavRoadShowLogo"
            onClick={() => navigate("/")}
          />
        </div>

        {/* 🟢 NEW: capsule center links */}
        <div className="mobile-navbar-center">
          <div className="mobile-navbar-center-capsule">
            <div onClick={() => navigate("/vehicleTypes")}>Vehicles</div>
            <div onClick={() => navigate("/packages")}>Packages</div>
            <div onClick={() => navigate("/offers")}>Offers</div>
          </div>
        </div>

        {/* 🟢 NEW: right dropdown trigger */}
        <div className="mobile-navbar-right" ref={dropdownRef}>
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

// ⚪ RETAINED
export default Navbar;
