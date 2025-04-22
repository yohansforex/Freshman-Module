import React from 'react';
import { FaGooglePlay } from 'react-icons/fa';
import './Css/CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <h2 className="cta-title">
        Boost Your 1st Year Grade with Freshman Module Plus
      </h2>
      <p className="cta-subtitle">
        Manage modules, track GPA, access notes, and plan your semester — all in one app built for Ethiopian university students.
      </p>
      <div className="cta-buttons">
        <a
          href="https://play.google.com/store/apps/details?id=com.freshmanmoduleplus"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn playstore"
        >
          <FaGooglePlay className="cta-icon" />
          Get it on Play Store
        </a>
        <a href="#features" className="cta-btn explore">
          Explore Features
        </a>
      </div>
    </section>
  );
};

export default CTA;
