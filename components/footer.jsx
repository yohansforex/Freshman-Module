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
    <footer className="footer">
      <div className="footer-wave"></div>
      
      <div className="footer-content">
        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for the latest academic resources and updates</p>
          
          {subscribed ? (
            <div className="subscription-success">
              <span>🎉</span> Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">
                <span>Subscribe</span>
                <span className="paper-plane">✈️</span>
              </button>
            </form>
          )}
        </div>

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
                <li><a href="#download">Download</a></li>
                <li><a href="#premium">Premium</a></li>
                <li><a href="#updates">What's New</a></li>
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

            <div className="link-column">
              <h4>Legal</h4>
              <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#cookies">Cookie Policy</a></li>
                <li><a href="#eula">EULA</a></li>
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
            <a href="#sitemap">Sitemap</a>
            <span className="divider">|</span>
            <a href="#accessibility">Accessibility</a>
            <span className="divider">|</span>
            <span className="version">v2.1.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;