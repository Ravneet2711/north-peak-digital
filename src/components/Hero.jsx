import React from "react";
import heroImg from "../assets/pattern2.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center md:bg-right bg-no-repeat"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-950/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto min-h-screen px-6 flex items-center">
        <div className="max-w-2xl">
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
            Grow Your Business
            <span className="block text-indigo-400">With Smarter</span>
            Digital Solutions.
          </h1>
          <p className="mt-5 max-w-md text-sm sm:text-base md:text-lg leading-7 text-slate-300">
            We design high-performing websites, launch data-driven marketing
            campaigns, and optimize every customer journey to help your business
            grow faster.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:from-indigo-500 hover:to-indigo-400 hover:shadow-lg hover:shadow-indigo-500/30">
              <span>Get Started</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <button className="flex w-full sm:w-auto items-center justify-center rounded-xl border border-white/70 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-slate-900">
              View Services
            </button>
          </div>

          <div className="hidden md:flex mt-12 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-white">250+</h3>
              <p className="mt-1 text-sm text-slate-400">Projects Delivered</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">98%</h3>
              <p className="mt-1 text-sm text-slate-400">Client Satisfaction</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">5×</h3>
              <p className="mt-1 text-sm text-slate-400">Average ROI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
