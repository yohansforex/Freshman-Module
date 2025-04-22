"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import './Css/Hero.css';

const navigation = [
  { name: "Features", href: "#features-section" },
  { name: "Descriptions", href: "#descriptions" },
  { name: "Contact", href: "#contacts" },
  { name: "Reviews", href: "#reviews" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section id="home">
    <div className="hero">
      <div className="hero-grid">
        <svg className="hero-grid-pattern" aria-hidden="true">
          <defs>
            <pattern id="grid-pattern" x="50%" y={-1} width={100} height={100} patternUnits="userSpaceOnUse">
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="pattern-overlay">
            <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth={0} />
          </svg>
          <rect fill="url(#grid-pattern)" width="100%" height="100%" strokeWidth={0} />
        </svg>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-headline">
              <span className="headline-gradient">Freshman Module Plus</span>
            </h1>
            <p className="hero-subtext">
              The app includes updated freshman modules. It has an AI feature
              that will help you with your studies. Additionally, it offers
              advanced tools for scheduling, note-taking, and GPA tracking, all
              within a sleek and optimized interface.
            </p>
            <div className="download-buttons">
              <a href="https://play.google.com/store/apps/details?id=com.freshmanmoduleplus&pli=1" target="_blank" rel="noopener noreferrer" className="download-btn playstore-btn">
                <span className="btn-icon">📲</span>
                <span>Play Store</span>
              </a>
              <a href="https://apkpure.com/freshman-module-plus/com.freshmanmoduleplus" target="_blank" rel="noopener noreferrer" className="download-btn apkpure-btn">
                <span className="btn-icon">⚡</span>
                <span>APKPure</span>
              </a>
              <a href="https://www.amazon.com/dp/B0F5MCKBQ7/ref=sr_1_1?crid=2R7I749YFN04X&dib=eyJ2IjoiMSJ9.HJfpHsHEPiCk2__Bqp5ktg.KDChO36Q_TyhJyUKQV_ApEW4mS6EXmXXW7ugdlRUj64&dib_tag=se&keywords=freshman+module+plus&qid=1745067366&sprefix=freshman+module+plus%2Caps%2C339&sr=8-1" target="_blank" rel="noopener noreferrer" className="download-btn amazon-btn">
                <span className="btn-icon">🛒</span>
                <span>Amazon</span>   
              </a>             
              <a href="https://www.amazon.com/dp/B0F5MCKBQ7/ref=sr_1_1?crid=2R7I749YFN04X&dib=eyJ2IjoiMSJ9.HJfpHsHEPiCk2__Bqp5ktg.KDChO36Q_TyhJyUKQV_ApEW4mS6EXmXXW7ugdlRUj64&dib_tag=se&keywords=freshman+module+plus&qid=1745067366&sprefix=freshman+module+plus%2Caps%2C339&sr=8-1" target="_blank" rel="noopener noreferrer" className="download-btn amazon-btn">
                <span className="btn-icon"></span>
                <span>UptoDown</span>   
              </a>
            </div>
          </div>
          
          <div className="phone-mockups">
            <div className="mockup-wrapper primary-mockup">
              <svg viewBox="0 0 366 729" className="phone-svg">
                <title>App screenshot</title>
                <defs>
                  <clipPath id="phone-clip">
                    <rect rx={36} width={316} height={729} />
                  </clipPath>
                </defs>
                <path d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z" fill="#4B5563" />
                <path d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z" fill="#343E4E" />
                <foreignObject width={316} height={729} clipPath="url(#phone-clip)" transform="translate(24 24)">
                  <div className="phone-screen">
                    <img alt="PDF Viewer Screenshot" src="pdfview.jpg" className="screen-image" />
                  </div>
                </foreignObject>
              </svg>
            </div>
            
            <div className="mockup-wrapper secondary-mockup">
              <svg viewBox="0 0 366 729" className="phone-svg">
                <title>Secondary App screenshot</title>
                <defs>
                  <clipPath id="secondary-clip">
                    <rect rx={36} width={316} height={729} />
                  </clipPath>
                </defs>
                <path d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z" fill="#4B5563" />
                <path d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z" fill="#343E4E" />
                <foreignObject width={316} height={729} clipPath="url(#secondary-clip)" transform="translate(24 24)">
                  <div className="phone-screen">
                    <img alt="Menu Screen Screenshot" src="menu.jpg" className="screen-image" />
                  </div>
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <header className="app-header">
        <nav className="nav-container">
          <div className="logo-wrapper">
            <a href="#home" className="logo-link">
              <img alt="App Logo" src="logo.png" className="logo-img" />
            </a>
          </div>
          
          <button onClick={() => setMobileMenuOpen(true)} className="mobile-menu-btn">
            <Bars3Icon className="menu-icon" />
          </button>
          
          <div className="desktop-nav">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="nav-link">
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="mobile-menu">
        <div className="menu-backdrop" />
        <DialogPanel className="menu-panel">
          <div className="menu-header">
            <a href="#" className="menu-logo-link">
              <img alt="App Logo" src="logo.png" className="menu-logo" />
            </a>
            <button onClick={() => setMobileMenuOpen(false)} className="close-menu-btn">
              <XMarkIcon className="close-icon" />
            </button>
          </div>
          <div className="menu-content">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="mobile-nav-link">
                {item.name}
              </a>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  </section>
  );
}