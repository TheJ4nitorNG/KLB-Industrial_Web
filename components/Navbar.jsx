"use client";
import React, { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-industrial-slate text-white border-b-4 border-industrial-charcoal sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* LOGO BADGE */}
        <a href="/" className="flex items-center hover:opacity-90 transition-opacity">
          <img 
            src="/KLB-Industrial-Logo-navbadge.png" 
            alt="KLB Industrial Corp Badge" 
            className="h-20 w-auto invert transition-all" 
          />
        </a>
        
        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex gap-8 font-bold uppercase text-sm tracking-widest items-center">
          <a href="/projects" className="hover:text-industrial-orange transition-colors">Projects</a>
          <a href="/services" className="hover:text-industrial-orange transition-colors">Services</a>
          <a href="/about" className="hover:text-industrial-orange transition-colors">About</a>
          <a href="/mission" className="hover:text-industrial-orange transition-colors">Mission</a>
          <a href="/resources" className="hover:text-industrial-orange transition-colors">Resources</a>
          <a href="/contact" className="bg-industrial-orange text-white px-5 py-2.5 hover:bg-orange-700 transition-colors border border-industrial-orange">
            Contact
          </a>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-8 h-8 hover:text-industrial-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-industrial-charcoal border-t border-slate-700 shadow-xl absolute w-full z-50">
          <div className="flex flex-col px-6 py-6 space-y-6 font-bold uppercase text-sm tracking-widest">
            <a href="/projects" className="block hover:text-industrial-orange">Projects</a>
            <a href="/services" className="block hover:text-industrial-orange">Services</a>
            <a href="/about" className="block hover:text-industrial-orange">About</a>
            <a href="/mission" className="block hover:text-industrial-orange">Mission</a>
            <a href="/resources" className="block hover:text-industrial-orange">Resources</a>
            <a href="/contact" className="block text-industrial-orange">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}