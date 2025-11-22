// ==========================================================
// ✅ Updated App.jsx
// Retained existing layout, fixed footer anchoring behavior
// ==========================================================
import "./App.css";
import Navbar from "./a1Navbar";
import Footer from "./a3Footer";
import Project from "./projects";
import ScrollHero from "./ScrollHero";
import Offers from "./Offers"
import Offersbanner from "./Offersbanner"


function App() {
  const navLinks = [
    {
      path: '/home',
      text: 'Home',
      icon: '/images/NavbarIcon1.png',
    },
    {
      path: '/about',
      text: 'About Us',
      icon: '/images/NavbarIcon2.png',
    },
    {
      path: '/projects',
      text: 'Projects',
      icon: '/images/NavbarIcon3.png',
    },
  ];

  return (
    <>
      {/* ✅ Unified white header block */}
      <div className="bg-white w-full shadow-md">
        <Navbar />
      </div>
      
      {/* ✅ ScrollHero with proper positioning context */}
      <div className="scroll-hero-container">
        <ScrollHero/>
      </div>
      
      {/* ✅ MAIN CONTENT AREA with gradient background */}
      <main className="bg-gradient-to-br from-[#e8f4f8] via-[#d1ecf1] to-[#b8e6f0] min-h-screen px-8 py-3 relative z-10">
        <Offers />
      </main>

      {/* ✅ Footer stays at the bottom */}
      <Footer navLinks={navLinks} />
    </>
  );
}

export default App;
