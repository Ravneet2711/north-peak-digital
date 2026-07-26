import React, { useState } from "react";
import { Mountain, Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 py-4 px-6 custom-nav z-100 ">
      <div className="max-w-7xl mx-auto flex  md:flex-row items-center justify-between gap-4 ">
        <div className="logo flex items-center gap-2 text-lg font-bold tracking-wide text-white">
          <div className="p-1.5 rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
            <Mountain size={20} />
          </div>
          <span>
            NorthPeak<span className="text-indigo-500">Digital</span>
          </span>
        </div>
        <div className="hidden md:flex nav-items">
          <ul className="nav-links flex gap-8 items-center md:gap-5 ">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#testimonials">Results</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <a
          href="#contact"
          className="group hidden md:flex items-center gap-2 px-5 py-2.5 border border-white/70 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-500 border border-indigo-400/30 transition-all duration-300 hover:from-indigo-500 hover:to-indigo-400  hover:shadow-lg hover:shadow-indigo-500/30 "
        >
          Start Your Project
        </a>
        <button
          className="mobile-menu md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <div className="nav-items flex flex-col">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="hover:text-white py-1"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="hover:text-white py-1"
          >
            Services
          </a>
          <a
            href="#testimonials"
            onClick={() => setIsOpen(false)}
            className="hover:text-white py-1"
          >
            Results
          </a>
          <a
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="hover:text-white py-1"
          >
            Pricing
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-white py-1"
          >
            Contact
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 rounded-lg mt-2"
          >
            Start Your Project{" "}
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
