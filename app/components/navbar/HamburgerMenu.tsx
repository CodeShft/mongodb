"use client";

import { useState } from "react";
import Link from "next/link";

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    document.body.style.overflow = newMenuState ? "hidden" : "auto";
  };

  return (
    <>
      <div className="relative">
        <button
          className={`hamburger-menu relative flex flex-col justify-center items-center w-8 h-8 z-50 ${
            isMenuOpen ? "active" : ""
          } transition-all duration-300 ease-in-out`}
          aria-label="Toggle menu"
          onClick={handleMenuToggle}
        >
          <span
            className={`hamburger-line transition-all duration-300 absolute block w-6 h-0.5 bg-white rounded-full ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-2"
            }`}
          ></span>
          <span
            className={`hamburger-line transition-all duration-300 absolute block w-6 h-0.5 bg-white rounded-full ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`hamburger-line transition-all duration-300 absolute block w-6 h-0.5 bg-white rounded-full ${
              isMenuOpen ? "-rotate-45 translate-y-1.5" : "translate-y-2"
            }`}
          ></span>
        </button>

        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{ zIndex: 40 }}
          onClick={handleMenuToggle}
        />

        <div
          className={`fixed top-16 right-0 h-auto w-[220px] bg-gradient-to-r from-[#ff6600] to-[#ff3300] text-white p-4 transform transition-transform duration-500 ease-in-out shadow-lg ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ zIndex: 45 }}
        >
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-4 border-b border-white/30 pb-2 text-center">
              <h2 className="text-lg font-bold w-full">Categories</h2>
            </div>

            <nav>
              <ul className="space-y-3">
                {[
                  ["Stilettos", "/stilettos"],
                  ["Wedge Heels", "/wedgeheels"],
                  ["Block Heels", "/blockheels"],
                  ["Cowboy Heels", "/cowboyheels"],
                  ["Booties", "/booties"],
                ].map(([title, url]) => (
                  <li key={url}>
                    <Link
                      href={url}
                      onClick={() => {
                        setIsMenuOpen(false);
                        document.body.style.overflow = "auto";
                      }}
                      className="block py-3 px-4 text-sm font-medium text-center bg-orange-700 border border-white/10 hover:border-white/50 transition-all duration-300 hover:bg-orange-400 hover:text-white rounded-md focus:bg-orange-500 focus:border-orange-300 active:bg-orange-600 shadow-sm"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
