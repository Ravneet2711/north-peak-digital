import React from "react";
import { Mountain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] border-t border-slate-800/80 py-4 px-3 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-base font-bold text-white">
          <div className="p-1.5 rounded-md bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
            <Mountain size={18} />
          </div>
          <span>
            NorthPeak<span className="text-indigo-500">Digital</span>
          </span>
        </div>

        <div className="flex flex-col">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} NorthPeak Digital. All rights reserved.
          </p>
          <p className="text-xs text-slate-300 text-center">
            Built for{" "}
            <a
              href="https://digitalheroesco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 hover:underline"
            >
              Digital Heroes Training Task
            </a>
          </p>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <a
            href="mailto:contact@northpeakdigital.com"
            className="hover:text-white transition-colors p-1"
            aria-label="Mail"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M1.5 4.5h21a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 18V6a1.5 1.5 0 0 1 1.5-1.5zm0 1.5v.75l10.5 6.562L22.5 6.75V6H1.5zm0 3.75V18h21V9.75l-10.5 6.563L1.5 9.75z" />
            </svg>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors p-1"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
            </svg>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors p-1"
            aria-label="GitHub"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
            </svg>
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors p-1"
            aria-label="X"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M18.901 1.153h3.68L14.54 10.34 24 22.846h-7.406l-5.8-7.584-6.62 7.584H.49l8.6-9.857L0 1.154h7.594l5.243 6.932L18.9 1.153Zm-1.29 19.49h2.04L6.486 3.248H4.298L17.61 20.643Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
