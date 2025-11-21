// ==========================================================
// ✅ Updated App.jsx
// Retained existing layout, fixed footer anchoring behavior
// ==========================================================
import "./App.css";
import Navbar from "./a1Navbar";
import Footer from "./a3Footer";
import Project from "./projects";
import ScrollHero from "./ScrollHero";


function App() {
  const navLinks = [
    {
      path: '/home',
      text: 'Home',
      icon: './images/homeicon.png',
    },
    {
      path: '/about',
      text: 'About Us',
      icon: './images/aboutusicon.png',
    },
    {
      path: '/projects',
      text: 'Projects',
      icon: './images/projectsicon.png',
    },
  ];

  return (
    <>
      {/* ✅ Unified white header block */}
      <div className="bg-white w-full shadow-md">
        <Navbar />
      </div>
      <div><ScrollHero /></div>
      {/* ✅ MAIN CONTENT AREA with gradient background */}
      <main className="bg-gradient-to-br from-[#e8f4f8] via-[#d1ecf1] to-[#b8e6f0] min-h-screen px-8 py-12">
        <Project />
      </main>

      {/* ✅ Footer stays at the bottom */}
      <Footer navLinks={navLinks} />
    </>
  );
}

export default App;
