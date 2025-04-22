"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import './Css/Hero.css';

const navigation = [
  { name: "Features", href: "#" },
  { name: "Descriptions", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Reviews", href: "#" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="hero-container">
      <div className="hero-content-wrapper">
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
        
        <div className="hero-main-content">
          <div className="hero-text-content">
            <h1 className="hero-title">Freshman Module Plus</h1>
            <p className="hero-description">
              The app includes updated freshman modules. It has an AI feature
              that will help you with your studies. Additionally, it offers
              advanced tools for scheduling, note-taking, and GPA tracking, all
              within a sleek and optimized interface.
            </p>
            <div className="hero-button-group">
              <a
                href="https://play.google.com/store/apps/details?id=com.freshmanmoduleplus&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="download-button play-store-button"
              >
                Download on Play Store
              </a>
              <a
                href="https://apkpure.com/freshman-module-plus/com.freshmanmoduleplus"
                target="_blank"
                rel="noopener noreferrer"
                className="download-button apkpure-button"
              >
                Download on APKPure
              </a>
              <a
                href="https://www.amazon.com/dp/B0F5MCKBQ7/ref=sr_1_1?crid=2R7I749YFN04X&dib=eyJ2IjoiMSJ9.HJfpHsHEPiCk2__Bqp5ktg.KDChO36Q_TyhJyUKQV_ApEW4mS6EXmXXW7ugdlRUj64&dib_tag=se&keywords=freshman+module+plus&qid=1745067366&sprefix=freshman+module+plus%2Caps%2C339&sr=8-1"
                target="_blank"
                rel="noopener noreferrer"
                className="download-button amazon-button"
              >
                Download on Amazon App Store
              </a>
            </div>
          </div>
          
          <div className="hero-phone-mockup">
            <svg
              role="img"
              viewBox="0 0 366 729"
              className="primary-mockup"
            >
              <title>App screenshot</title>
              <defs>
                <clipPath id="primary-phone-clip">
                  <rect rx={36} width={316} height={729} />
                </clipPath>
              </defs>
              <path
                d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                fill="#4B5563"
              />
              <path
                d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                fill="#343E4E"
              />
              <foreignObject
                width={316}
                height={729}
                clipPath="url(#primary-phone-clip)"
                transform="translate(24 24)"
              >
                <div className="phone-screen">
                  <img
                    alt="PDF Viewer Screenshot"
                    src="pdfview.jpg"
                    className="phone-screen-image"
                  />
                </div>
              </foreignObject>
            </svg>
            <svg
              role="img"
              viewBox="0 0 366 729"
              className="secondary-mockup"
            >
              <title>Secondary App screenshot</title>
              <defs>
                <clipPath id="secondary-phone-clip">
                  <rect rx={36} width={316} height={729} />
                </clipPath>
              </defs>
              <path
                d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                fill="#4B5563"
              />
              <path
                d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                fill="#343E4E"
              />
              <foreignObject
                width={316}
                height={729}
                clipPath="url(#secondary-phone-clip)"
                transform="translate(24 24)"
              >
                <div className="phone-screen">
                  <img
                    alt="Menu Screen Screenshot"
                    src="menu.jpg"
                    className="phone-screen-image"
                  />
                </div>
              </foreignObject>
            </svg>
          </div>
        </div>
      </div>

      <header className="hero-header">
        <nav className="hero-nav">
          <div className="nav-logo-container">
            <a href="#" className="nav-logo-link">
              <img alt="" src="logo.png" className="nav-logo" />
            </a>
          </div>
          <div className="mobile-menu-button-container">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="mobile-menu-button"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="menu-icon" />
            </button>
          </div>
          <div className="desktop-nav-menu">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-menu-item"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="nav-spacer"></div>
        </nav>
        
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="mobile-menu-dialog"
        >
          <div className="mobile-menu-overlay" />
          <DialogPanel className="mobile-menu-panel">
            <div className="mobile-menu-header">
              <a href="#" className="mobile-menu-logo-link">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="mobile-menu-logo"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-menu-close-button"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="close-icon" />
              </button>
            </div>
            <div className="mobile-menu-content">
              <div className="mobile-menu-links">
                <div className="mobile-menu-links-container">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="mobile-menu-link"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mobile-menu-footer"></div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}