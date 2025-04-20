import React from 'react';
import { FaGooglePlay } from 'react-icons/fa';

const CTA = () => {
  return (
    <section className="w-full px-6 py-20 bg-white text-center rounded-2xl shadow-2xl mt-12">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-blue-600">
        Boost Your 1st Year Grade with Freshman Module Plus
      </h2>
      <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-gray-600">
        Manage modules, track GPA, access notes, and plan your semester — all in one app built for Ethiopian university students.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href="https://play.google.com/store/apps/details?id=com.freshmanmoduleplus"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 shadow-md hover:scale-105"
        >
          <FaGooglePlay className="text-xl" />
          Get it on Play Store
        </a>
        <a
          href="#features"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
        >
          Explore Features
        </a>
      </div>
    </section>
  );
};

export default CTA;
