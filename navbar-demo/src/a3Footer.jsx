// import React from 'react';
// import './a3Footer.css';

// function Footer({ navLinks }) {
//     return (
//         <div className='container-fluid RdFooterMain'>
//             <div className='container'>

//                 <div className='row'>
//                     {/* Column 1 - Company Info */}
//                     <div className='RdFooterContent1 col-md-4 col-sm-12 mb-4'>
//                         <div>
//                             <img src='/images/FooterAdinnLogo.png' className='FooterAdinnLogo' alt='Adinn Logo' />
//                         </div>
//                         <div className='FooterSocIcons'>
//                             <div><img src='/images/FootSocIcon1.png' className='FootSocIcon' alt='Social Icon 1' /></div>
//                             <div><img src='/images/FootSocIcon2.png' className='FootSocIcon' alt='Social Icon 2' /></div>
//                             <div><img src='/images/FootSocIcon3.png' className='FootSocIcon' alt='Social Icon 3' /></div>
//                             <div><img src='/images/FootSocIcon4.png' className='FootSocIcon' alt='Social Icon 4' /></div>
//                             <div><img src='/images/FootSocIcon5.png' className='FootSocIcon' alt='Social Icon 5' /></div>
//                         </div>
//                         <div className='RdFootContactContents'>
//                             <div className='RdFootContactContents RdFooterContactNumber'>
   
//                                 <div><a href='tel:7373785057' style={{textDecoration:'none', color:'#2B3333'}}>7373785057</a></div>
//                                 <div>&nbsp;|&nbsp;</div>
  
//                                 <div><a href='tel:9626987861' style={{textDecoration:'none', color:'#2B3333'}}>9626987861</a></div>
//                             </div>
  
//                             <div className='RdFootContactContents'><a href='mailto:ba@adinn.co.in' style={{textDecoration:'none', color:'#2B3333'}}>ba@adinn.co.in</a></div>
//                         </div>
//                         <div className='RdFootContactContents'>Get notified upon new Updates</div>
//                         <div className='RdFootContactContents'>
//                             <div className='RdFootContactContentsInputMain'>
//                                 <div> <input type='text' placeholder='Your Email-Id Here' className='RdFootContactContentsInput' /></div>
//                                 <div className='RdFootContactContentsInputSend'>
//                                     <img src='/images/RdFootContactContentsInputSend.png' className='RdFootContactContentsInputSendIcon'></img>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Column 2 - Services */}
//                     <div className='RdFooterContent2 col-md-4 col-sm-6 mb-4'>
//                         <div className='RdFootContactContentsTitle'>Services</div>
//                         <div>
//                             <div className='RdFootContactContents'>LED Screen Vehicle</div>
//                             <div className='RdFootContactContents'>L-Type LED Vehicle</div>
//                             <div className='RdFootContactContents'>3-Side LED Truck</div>
//                             <div className='RdFootContactContents'>Customize Fabrication Vehicle</div>
//                             <div className='RdFootContactContents'>Stage Vehicle (Hydraulic / Manual)</div>
//                             <div className='RdFootContactContents'>Canopy / Hood Setup</div>
//                             <div className='RdFootContactContents'>E-Vehicle / E-Rickshaw with LED</div>
//                             <div className='RdFootContactContents'>Inflatable / 3D Model Mounted Vehicle</div>
//                         </div>
//                     </div>

//                     {/* Column 3 - Navigation Links */}
//                     <div className='RdFooterContent2 col-md-4 col-sm-6 mb-4'>
//                         <div className='RdFootContactContentsTitle'>Navigation</div>
//                         <div>
//                             {navLinks.map((link, index) => (
//                                 <div key={index} className='RdFootContactContents'>
//                                     <a href={link.path}>{link.text}</a>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Column 4 - Address */}
//                     <div className='RdFooterContent3 col-md-4 col-sm-6 mb-4'>
//                         <div className='RdFootContactContentsTitle'>Address</div>
//                         <div >
//                             <div className='RdFootContactContents'>
//                                 29, 1st Cross Street, Vanamamalai Nagar, By-pass Road, <span className='RdFootContactContentsHighlight'> Madurai-625010. </span>
//                             </div>
//                             <div className='RdFootContactContents'>
//                                 Door No:3, 1st Floor, Vijayalakshmi Street, Mahalingapuram, Nungambakkam,
//                                 <span className='RdFootContactContentsHighlight'> Chennai – 600 034. </span>
//                             </div>
//                             <div className='RdFootContactContents'>
//                                 Old No:76, New No:976, 7th Cross, Basaveswara Badavane, Bagegowda Layout,
//                                 Rajarajeswari Nagar, <span className='RdFootContactContentsHighlight'> Bangalore – 560 039.</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Copyright Section */}
//                 <div className='row'>
//                     <div className='col-12 text-center'>
//                         <div className='RdFootContactContents'>
//                             Copyright © 2025 Adinn Digital. All Right Reserved
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// }

// export default Footer;


// ==========================================================
// a3Footer.jsx - Fixed Desktop Layout to Match Design
// ==========================================================
import React, { useState } from "react";
import "./a3Footer.css";

function Footer({ navLinks }) {
  const [isServicesOpen, setServicesOpen] = useState(false);
  const [isAddressOpen, setAddressOpen] = useState(false);



  const services = [
    "LED Screen Vehicle",
    "L-Type LED Vehicle", 
    "3-Side LED Truck",
    "Customize Fabrication Vehicle",
    "Stage Vehicle (Hydraulic / Manual)",
    "Canopy / Hood Setup",
    "E-Vehicle / E-Rickshaw with LED",
    "Inflatable / 3D Model Mounted Vehicle"
  ];

  return (
    <div className='container-fluid RdFooterMain'>
      <div className='container'>
        
        {/* Desktop Footer (≥ 1025px) */}
        <div className="footer-desktop show-on-desktop">
          <div className='row'>
            
            {/* Column 1 - Contact & Newsletter (Left) */}
            <div className='RdFooterContent1 col-md-4 col-sm-12'>
              <div>
                <img src='/images/FooterAdinnLogo.png' className='FooterAdinnLogo' alt='Adinn Logo' />
              </div>
              
              <div className='FooterSocIcons'>
                <div>
                  <a href="[YOUR-PINTEREST-URL]" target="_blank" rel="noopener noreferrer">
                    <img src='/images/FootSocIcon1.png' className='FootSocIcon' alt='Social Icon 1' />
                  </a>
                </div>
                <div>
                  <a href="[YOUR-INSTAGRAM-URL]" target="_blank" rel="noopener noreferrer">
                    <img src='/images/FootSocIcon2.png' className='FootSocIcon' alt='Social Icon 2' />
                  </a>
                </div>
                <div>
                  <a href="[YOUR-FACEBOOK-URL]" target="_blank" rel="noopener noreferrer">
                    <img src='/images/FootSocIcon3.png' className='FootSocIcon' alt='Social Icon 3' />
                  </a>
                </div>
                <div>
                  <a href="[YOUR-TWITTER-URL]" target="_blank" rel="noopener noreferrer">
                    <img src='/images/FootSocIcon4.png' className='FootSocIcon' alt='Social Icon 4' />
                  </a>
                </div>
                <div>
                  <a href="[YOUR-LINKEDIN-URL]" target="_blank" rel="noopener noreferrer">
                    <img src='/images/FootSocIcon5.png' className='FootSocIcon' alt='Social Icon 5' />
                  </a>
                </div>
              </div>
              
              <div className="contact-info">
                <div className='RdFooterContactNumber'>
                  <a href="tel:7373785057">7373785057</a>
                  <span>|</span>
                  <a href="tel:9626987861">9626987861</a>
                </div>
                <div className="contact-email">
                  <a href="mailto:ba@adinn.co.in">ba@adinn.co.in</a>
                </div>
              </div>
              
              <div className="newsletter-section">
                <h4>Get notified upon new Updates</h4>
                <div className="newsletter-input">
                  <input 
                    type="email" 
                    placeholder="Your Email-Id Here"
                    className="newsletter-field"
                  />
                  <button className="newsletter-btn">
                    <span>Send</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Column 2 - Services (Middle) */}
            <div className='RdFooterContent2 col-md-4 col-sm-6 services-column'>
              <div className='RdFootContactContentsTitle'>Services</div>
              <div>
                {services.map((service, index) => (
                  <div key={index} className='RdFootContactContents'>{service}</div>
                ))}
              </div>
            </div>

            {/* Column 3 - Address (Right) */}
            <div className='RdFooterContent3 col-md-4 col-sm-6 address-column'>
              <div className='RdFootContactContentsTitle'>Address</div>
              <div>
                <div className='RdFootContactContents'>
                  29, 1st Cross Street, Vanamamalai Nagar, By-pass Road,{" "}
                  <span className='RdFootContactContentsHighlight'>Madurai-625010.</span>
                </div>
                <div className='RdFootContactContents'>
                  Door No:3, 1st Floor, Vijayalakshmi Street, Mahalingapuram, Nungambakkam,{" "}
                  <span className='RdFootContactContentsHighlight'>Chennai – 600 034.</span>
                </div>
                <div className='RdFootContactContents'>
                  Old No:76, New No:976, 7th Cross, Basaveswara Badavane, Bagegowda Layout,
                  Rajarajeswari Nagar, <span className='RdFootContactContentsHighlight'>Bangalore – 560 039.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright for Desktop */}
          <div className="footer-bottom">
            Copyright © 2025 Adinn Digital. All Right Reserved
          </div>
        </div>

        {/* Tablet Footer (768px - 1024px) */}
        <div className="footer-tablet show-on-tablet">
            <div className="footer-tablet-columns">
                <div className="footer-tablet-col">
                    {/* Contact Section */}
                    <div className="footer-mobile-section">
                        <div>
                            <img src='/images/FooterAdinnLogo.png' className='FooterAdinnLogo' alt='Adinn Logo' />
                        </div>
                        <div className='FooterSocIcons'>
                            <div><img src='/images/FootSocIcon1.png' className='FootSocIcon' alt='Social Icon 1' /></div>
                            <div><img src='/images/FootSocIcon2.png' className='FootSocIcon' alt='Social Icon 2' /></div>
                            <div><img src='/images/FootSocIcon3.png' className='FootSocIcon' alt='Social Icon 3' /></div>
                            <div><img src='/images/FootSocIcon4.png' className='FootSocIcon' alt='Social Icon 4' /></div>
                            <div><img src='/images/FootSocIcon5.png' className='FootSocIcon' alt='Social Icon 5' /></div>
                        </div>
                        <div className="contact-info">
                            <div className='RdFooterContactNumber'>
                                <a href="tel:7373785057">7373785057</a>
                                <span>|</span>
                                <a href="tel:9626987861">9626987861</a>
                            </div>
                            <div className="contact-email">
                                <a href="mailto:ba@adinn.co.in">ba@adinn.co.in</a>
                            </div>
                        </div>
                        <div className="newsletter-section">
                            <h4>Get notified upon new Updates</h4>
                            <div className="newsletter-input">
                                <input type="email" placeholder="Your Email-Id Here" className="newsletter-field" />
                                <button className="newsletter-btn"><span>Send</span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-tablet-col">
                    {/* Services Dropdown */}
                    <div className="footer-mobile-section">
                        <div className="mobile-dropdown-header" onClick={() => setServicesOpen(!isServicesOpen)}>
                            <span className="dropdown-title">Services</span>
                            <span className={`dropdown-arrow ${isServicesOpen ? 'open' : ''}`}>▼</span>
                        </div>
                        <div className={`mobile-dropdown-content ${isServicesOpen ? 'open' : ''}`}>
                            <ul className="services-list-mobile">
                                {services.map((service, index) => (<li key={index}>{service}</li>))}
                            </ul>
                        </div>
                    </div>
                    {/* Address Dropdown */}
                    <div className="footer-mobile-section">
                        <div className="mobile-dropdown-header" onClick={() => setAddressOpen(!isAddressOpen)}>
                            <span className="dropdown-title">Address</span>
                            <span className={`dropdown-arrow ${isAddressOpen ? 'open' : ''}`}>▼</span>
                        </div>
                        <div className={`mobile-dropdown-content ${isAddressOpen ? 'open' : ''}`}>
                            <div className="address-content-mobile">
                                <p>29, 1st Cross Street, Vanamamalai Nagar, By-pass Road, <strong>Madurai-625010.</strong></p>
                                <p>Door No:3, 1st Floor, Vijayalakshmi Street, Mahalingapuram, Nungambakkam, <strong>Chennai – 600 034.</strong></p>
                                <p>Old No:76, New No:976, 7th Cross, Basaveswara Badavane, Bagegowda Layout, Rajarajeswari Nagar, <strong>Bangalore – 560 039.</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                Copyright © 2025 Adinn Digital. All Right Reserved
            </div>
        </div>

        {/* Mobile Footer (< 768px) */}
        <div className="footer-mobile show-on-mobile">
          {/* Contact Section - Always Visible */}
          <div className="footer-mobile-section">
            <div>
              <img src='/images/FooterAdinnLogo.png' className='FooterAdinnLogo' alt='Adinn Logo' />
            </div>
            
            <div className='FooterSocIcons'>
              <div><img src='/images/FootSocIcon1.png' className='FootSocIcon' alt='Social Icon 1' /></div>
              <div><img src='/images/FootSocIcon2.png' className='FootSocIcon' alt='Social Icon 2' /></div>
              <div><img src='/images/FootSocIcon3.png' className='FootSocIcon' alt='Social Icon 3' /></div>
              <div><img src='/images/FootSocIcon4.png' className='FootSocIcon' alt='Social Icon 4' /></div>
              <div><img src='/images/FootSocIcon5.png' className='FootSocIcon' alt='Social Icon 5' /></div>
            </div>
            
            <div className="contact-info">
              <div className='RdFooterContactNumber'>
                <a href="tel:7373785057">7373785057</a>
                <span>|</span>
                <a href="tel:9626987861">9626987861</a>
              </div>
              <div className="contact-email">
                <a href="mailto:ba@adinn.co.in">ba@adinn.co.in</a>
              </div>
            </div>
            
            <div className="newsletter-section">
              <h4>Get notified upon new Updates</h4>
              <div className="newsletter-input">
                <input 
                  type="email" 
                  placeholder="Your Email-Id Here"
                  className="newsletter-field"
                />
                <button className="newsletter-btn">
                  <span>Send</span>
                </button>
              </div>
            </div>
          </div>

          {/* Services Dropdown for Mobile */}
          <div className="footer-mobile-section">
            <div
              className="mobile-dropdown-header"
              onClick={() => {
                console.log('Services dropdown clicked, current isServicesOpen:', isServicesOpen);
                setServicesOpen(!isServicesOpen);
              }}
            >
              <span className="dropdown-title">Services</span>
              <span className={`dropdown-arrow ${isServicesOpen ? 'open' : ''}`}>▼</span>
            </div>
            <div className={`mobile-dropdown-content ${isServicesOpen ? 'open' : ''}`}>
              <ul className="services-list-mobile">
                {services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Address Dropdown for Mobile */}
          <div className="footer-mobile-section">
            <div
              className="mobile-dropdown-header"
              onClick={() => setAddressOpen(!isAddressOpen)}
            >
              <span className="dropdown-title">Address</span>
              <span className={`dropdown-arrow ${isAddressOpen ? 'open' : ''}`}>▼</span>
            </div>
            <div className={`mobile-dropdown-content ${isAddressOpen ? 'open' : ''}`}>
              <div className="address-content-mobile">
                <p>
                  29, 1st Cross Street, Vanamamalai Nagar, By-pass Road,{" "}
                  <strong>Madurai-625010.</strong>
                </p>
                <p>
                  Door No:3, 1st Floor, Vijayalakshmi Street, Mahalingapuram, Nungambakkam,{" "}
                  <strong>Chennai – 600 034.</strong>
                </p>
                <p>
                  Old No:76, New No:976, 7th Cross, Basaveswara Badavane, Bagegowda Layout,
                  Rajarajeswari Nagar, <strong>Bangalore – 560 039.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Copyright for Mobile */}
          <div className="footer-bottom-mobile">
            Copyright © 2025 Adinn Digital. All Right Reserved
          </div>
        </div>
      </div>

      {/* Mobile Navbar - Fixed at Bottom */}
      <div className="footer-mobile-navbar show-on-mobile">
        <div
          className="footer-mobile-item"
          onClick={() => (window.location.href = "/")}
        >
          <img
            src="/images/NavbarIcon1.png"
            alt="Home"
            className="footer-mobile-icon"
          />
          <span>Home</span>
        </div>
        <div
          className="footer-mobile-item"
          onClick={() => (window.location.href = "/services")}
        >
          <img
            src="/images/NavbarIcon2.png"
            alt="Services"
            className="footer-mobile-icon"
          />
          <span>Services</span>
        </div>
        <div
          className="footer-mobile-item"
          onClick={() => (window.location.href = "/about")}
        >
          <img
            src="/images/NavbarIcon3.png"
            alt="About"
            className="footer-mobile-icon"
          />
          <span>About</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;