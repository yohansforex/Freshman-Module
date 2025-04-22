"use client"

import React, { useState } from "react";
import './Css/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section id = "contacts">
      <footer className="footer">
        <div className="footer-wave"></div>
        
        <div className="footer-content">

          {/* Main Footer Links */}
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>Freshman Module Plus</h3>
              <p className="tagline">Your Academic Success Companion</p>
              <div className="company-info">
                <p>Developed by <strong>YoIT Solution</strong></p>
                <p>© {new Date().getFullYear()} All Rights Reserved</p>
              </div>
            </div>

            <div className="footer-links">
              <div className="link-column">
                <h4>Product</h4>
                <ul>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#descriptions">Descriptions</a></li>
                  <li><a href="#contacts">Contacts</a></li>
                  <li><a href="#updates">What's New?</a></li>
                </ul>
              </div>

              <div className="link-column">
                <h4>Support</h4>
                <ul>
                  <li><a href="#help">Help Center</a></li>
                  <li><a href="#contact">Contact Us</a></li>
                  <li><a href="#feedback">Feedback</a></li>
                  <li><a href="#faq">FAQs</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <div className="social-links">
              <a href="#facebook" aria-label="Facebook" className="social-icon">f</a>
              <a href="#twitter" aria-label="Twitter" className="social-icon">t</a>
              <a href="#instagram" aria-label="Instagram" className="social-icon">ig</a>
              <a href="#linkedin" aria-label="LinkedIn" className="social-icon">in</a>
            </div>
            
            <div className="footer-meta">
              <span className="version">v2.1.0</span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;