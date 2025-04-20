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
    <section className="w-full px-6 py-20 bg-white text-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 text-blue-600">
        App Features
      </h2>

      {/* Local Demo Video */}
      <div className="max-w-3xl mx-auto mb-12 w-full px-4"> 
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            controls
          >
            <source src="features.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Horizontal Scroll Screenshots */}
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Screenshots</h1>
      <div className="overflow-x-auto whitespace-nowrap flex gap-4 px-4">
        {screenshots.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Screenshot ${index + 1}`}
            className="w-[180px] h-[300px] object-cover rounded-xl shadow-md inline-block hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>

    </section>
  );
};

export default Features;