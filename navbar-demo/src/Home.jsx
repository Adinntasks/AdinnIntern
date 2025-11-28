import React from 'react';
import './Home.css';

// Simple SVG Icons
const RocketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
);
const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);
const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
);

const Home = () => {
  return (
    <main className="home-content-wrapper">
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-text">
            <h1>Build Your Next Idea <span className="highlight">Faster</span></h1>
            <p>
              Create stunning websites with our intuitive platform. 
              Powerful, responsive, and easy to use. Join thousands of creators today.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary large">Start Free Trial</button>
              <button className="btn-outline large">Learn More</button>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Workspace setup" 
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Why Choose Us?</h2>
            <p>We provide everything you need to scale your business.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon-box"><RocketIcon /></div>
              <h3>Fast Performance</h3>
              <p>Optimized for speed to ensure your users have the best experience possible.</p>
            </div>
            <div className="feature-card">
              <div className="icon-box"><ShieldIcon /></div>
              <h3>Secure by Default</h3>
              <p>Enterprise-grade security features built-in to protect your data.</p>
            </div>
            <div className="feature-card">
              <div className="icon-box"><ZapIcon /></div>
              <h3>Instant Analytics</h3>
              <p>Real-time data insights to help you make informed decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to get started?</h2>
          <p>Join our community and transform your workflow today.</p>
          <button className="btn-white large">Create Account</button>
        </div>
      </section>

    </main>
  );
};

export default Home;