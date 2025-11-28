// ==========================================================
// ✅ Updated App.jsx with React Router Navigation
// ==========================================================
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./a1Navbar";
import Footer from "./a3Footer";
import ProjectsSection from "./projects";
import ScrollHero from "./ScrollHero";
import Offers from "./Offers";
import Offersbanner from "./Offersbanner";
import Home from "./Home";

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

  // Home Page Component
  const HomePage = () => (
    <>      
      {/* ✅ MAIN CONTENT AREA with gradient background */}
      <main id="main-content" className="bg-gradient-to-br from-[#e8f4f8] via-[#d1ecf1] to-[#b8e6f0] min-h-screen px-8 py-3 relative z-10">
        <Home />
      </main>
    </>
  );

  // Offers Page Component
  const OffersPage = () => (
    <main id="main-content" className="bg-gradient-to-br from-[#e8f4f8] via-[#d1ecf1] to-[#b8e6f0] min-h-screen px-8 py-3 relative z-10">
      <Offersbanner />
      <Offers />
    </main>
  );

  // Projects Page Component
  const ProjectsPage = () => (
    <main id="main-content" className="bg-gradient-to-br from-[#e8f4f8] via-[#d1ecf1] to-[#b8e6f0] min-h-screen px-8 py-3 relative z-10">
      <ProjectsSection />
    </main>
  );

  // About Page Component
  const AboutPage = () => (
    <main id="main-content" className="bg-gradient-to-br from-[#e8f4f8] via-[#d1ecf1] to-[#b8e6f0] min-h-screen px-8 py-3 relative z-10">
      <div className="p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">About Us</h1>
        <p className="text-lg text-gray-600 mb-6">
          Welcome to Adinn, your premier roadshow vehicle service provider. We specialize in creating memorable brand experiences 
          through our innovative LED roadshow vehicles and promotional setups.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          With years of experience in the industry, we understand what it takes to make your brand stand out. Our fleet of 
          customizable vehicles and interactive setups help you connect with your audience in meaningful ways.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">To create impactful brand experiences that connect businesses with their target audiences through innovative roadshow solutions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">To be the leading provider of mobile promotional solutions, transforming the way brands engage with their customers.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            <p className="text-gray-600">Innovation, reliability, and customer satisfaction are at the core of everything we do.</p>
          </div>
        </div>
      </div>
    </main>
  );

  // Vehicle Types Page Component
  const VehicleTypesPage = () => (
    <main id="main-content" className="bg-gradient-to-br from-[#e8f4f8] via-[#d1ecf1] to-[#b8e6f0] min-h-screen px-8 py-3 relative z-10">
      <div className="p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Vehicle Types</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">LED Trucks</h3>
            <p className="text-gray-600 mb-4">Large format LED trucks perfect for major events and product launches. High visibility screens with comprehensive branding opportunities.</p>
            <ul className="text-sm text-gray-500">
              <li>• 32ft - 40ft LED screens</li>
              <li>• Weather resistant</li>
              <li>• Sound system included</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Promotional Vans</h3>
            <p className="text-gray-600 mb-4">Compact promotional vans ideal for street marketing and local events. Easy to navigate urban environments.</p>
            <ul className="text-sm text-gray-500">
              <li>• 16ft - 24ft displays</li>
              <li>• Fuel efficient</li>
              <li>• Quick setup</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Mobile Stages</h3>
            <p className="text-gray-600 mb-4">Complete stage setups on wheels for concerts, festivals, and corporate events. Professional sound and lighting included.</p>
            <ul className="text-sm text-gray-500">
              <li>• Modular stage design</li>
              <li>• Professional sound</li>
              <li>• Lighting packages</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Exhibit Vehicles</h3>
            <p className="text-gray-600 mb-4">Custom-built exhibition vehicles with interactive displays and product demonstration areas.</p>
            <ul className="text-sm text-gray-500">
              <li>• Interactive displays</li>
              <li>• Product showcase areas</li>
              <li>• Climate controlled</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Catering Trucks</h3>
            <p className="text-gray-600 mb-4">Mobile food service vehicles equipped with professional kitchens and serving areas.</p>
            <ul className="text-sm text-gray-500">
              <li>• Full commercial kitchen</li>
              <li>• Serving counters</li>
              <li>•Generator powered</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Security Vehicles</h3>
            <p className="text-gray-600 mb-4">Surveillance and security vehicles for events and construction sites with monitoring equipment.</p>
            <ul className="text-sm text-gray-500">
              <li>• 360° camera systems</li>
              <li>• Command center setup</li>
              <li>• Communication equipment</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );

  // Packages Page Component
  const PackagesPage = () => (
    <main id="main-content" className="bg-gradient-to-br from-[#e8f4f8] via-[#d1ecf1] to-[#b8e6f0] min-h-screen px-8 py-3 relative z-10">
      <div className="p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Packages</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-green-600">Starter Package</h3>
            <p className="text-2xl font-bold text-gray-800 mb-4">₹15,000 <span className="text-sm text-gray-500">/day</span></p>
            <p className="text-gray-600 mb-4">Perfect for small events and local promotions.</p>
            <ul className="text-sm text-gray-500 mb-6">
              <li>• 1 Promotional Van</li>
              <li>• Basic branding setup</li>
              <li>• 8-hour service</li>
              <li>• Driver included</li>
            </ul>
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Book Now
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-500">
            <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
              POPULAR
            </div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Professional Package</h3>
            <p className="text-2xl font-bold text-gray-800 mb-4">₹35,000 <span className="text-sm text-gray-500">/day</span></p>
            <p className="text-gray-600 mb-4">Ideal for corporate events and product launches.</p>
            <ul className="text-sm text-gray-500 mb-6">
              <li>• 1 LED Truck + 1 Van</li>
              <li>• Full LED screen setup</li>
              <li>• Sound system included</li>
              <li>• 12-hour service</li>
              <li>• Technical support</li>
            </ul>
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Book Now
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-purple-600">Premium Package</h3>
            <p className="text-2xl font-bold text-gray-800 mb-4">₹65,000 <span className="text-sm text-gray-500">/day</span></p>
            <p className="text-gray-600 mb-4">Complete solution for major events and festivals.</p>
            <ul className="text-sm text-gray-500 mb-6">
              <li>• 2 LED Trucks + 1 Mobile Stage</li>
              <li>• Professional lighting</li>
              <li>• Full sound system</li>
              <li>• 24-hour service</li>
              <li>• Dedicated team</li>
              <li>• Custom content creation</li>
            </ul>
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Book Now
            </button>
          </div>
        </div>
        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">What's Included in Every Package</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🚛</span>
              </div>
              <h3 className="font-semibold mb-2">Professional Vehicles</h3>
              <p className="text-sm text-gray-600">Well-maintained, branded vehicles</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">👨‍💼</span>
              </div>
              <h3 className="font-semibold mb-2">Expert Team</h3>
              <p className="text-sm text-gray-600">Trained professionals and operators</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">🛡️</span>
              </div>
              <h3 className="font-semibold mb-2">Insurance Coverage</h3>
              <p className="text-sm text-gray-600">Full liability and vehicle insurance</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">📞</span>
              </div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-600">Round-the-clock customer support</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );



  return (
    <Router>
      <div className="app-container">
        {/* ✅ Unified white header block */}
        <div className="bg-white w-full shadow-md">
          <Navbar />
        </div>
        
        {/* ✅ Route Configuration */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/vehicle-types" element={<VehicleTypesPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

        {/* ✅ Footer stays at the bottom */}
        <Footer navLinks={navLinks} />
      </div>
    </Router>
  );
}

export default App;
