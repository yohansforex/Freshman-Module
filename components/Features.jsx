import React from 'react';
import './Css/Features.css';

const screenshots = [
  "askAi.jpg",
  "pdfview.jpg",
  "menu.jpg",
  "notepad.jpg",
  "pdf.jpg",
  "timetable.jpg",
  "gpa.jpg",
];

const Features = () => {
  return (
    <section id='features'>
    <section className="features-section">
      <svg className="hero-bg-pattern" aria-hidden="true">
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="hero-pattern"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="hero-pattern-overflow">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#hero-pattern)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>

      <h2 className="features-title">App Features</h2>

      <div className="video-container"> 
        <div className="video-wrapper">
          <video className="feature-video" controls>
            <source src="features.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <h1 className="screenshots-title">Screenshots</h1>
      <div className="screenshots-container">
        {screenshots.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Screenshot ${index + 1}`}
            className="screenshot-image"
          />
        ))}
      </div>
    </section>
    </section>
  );
};

export default Features;
