import React from 'react';
import Link from 'next/link';

export default function MissionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-industrial-paper">
      {/* HEADER SECTION */}
      <section className="bg-industrial-slate text-white py-16 px-6 border-b-4 border-industrial-orange">
        <div className="max-w-5xl mx-auto">
          <p className="text-industrial-orange font-bold tracking-widest uppercase mb-4">
            Our Purpose
          </p>
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-wide">
            Mission & Values
          </h1>
        </div>
      </section>

      {/* CORE MISSION STATEMENT (Hero Style) */}
      <section className="py-24 px-6 w-full flex-grow flex items-center justify-center bg-industrial-paper">
        <div className="max-w-4xl mx-auto text-center">
          <svg className="w-12 h-12 text-industrial-orange mx-auto mb-8 opacity-50" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 21v-7.391c0-5.714-4.676-8.615-5.328-8.976l-2.671 4.297c1.393 1.066 3.982 3.167 3.982 4.679v7.391h4.017zm-14.017 3h24v-24h-24v24zm18.156-11.839c-.58-3.057-2.617-6.223-5.309-8.161l-2.072 3.328c1.905 1.545 3.313 3.696 3.737 5.798l3.644-.965z"/>
          </svg>
          
          <blockquote className="text-2xl md:text-4xl font-black text-industrial-slate leading-tight uppercase tracking-wide">
            "To provide unvarnished, independent technical authority in high-risk industrial environments. We bridge the gap between engineering theory and execution reality, ensuring heavy equipment repairs and rebuilds achieve maximum reliability, safety, and uptime."
          </blockquote>
          
          <div className="mt-12 w-24 h-1 bg-industrial-orange mx-auto"></div>
        </div>
      </section>

      {/* THE PILLARS */}
      <section className="bg-white py-20 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          
          <div className="border border-gray-200 p-8 shadow-sm hover:border-industrial-slate transition-colors">
            <h2 className="text-xl font-black text-industrial-slate mb-4 uppercase tracking-wide border-b-2 border-industrial-orange pb-2 inline-block">
              Unvarnished Truth
            </h2>
            <p className="text-industrial-charcoal leading-relaxed mt-4">
              We do not sugarcoat operational risks to save feelings or relationships. You hire us to find the root cause and identify failure points. We deliver facts, data, and straight answers.
            </p>
          </div>

          <div className="border border-gray-200 p-8 shadow-sm hover:border-industrial-slate transition-colors">
            <h2 className="text-xl font-black text-industrial-slate mb-4 uppercase tracking-wide border-b-2 border-industrial-orange pb-2 inline-block">
              Execution Reality
            </h2>
            <p className="text-industrial-charcoal leading-relaxed mt-4">
              Engineering theory is useless if it cannot be executed in the field. We specialize in ensuring that complex mechanical strategies translate flawlessly to boots-on-the-ground repair and maintenance.
            </p>
          </div>

          <div className="border border-gray-200 p-8 shadow-sm hover:border-industrial-slate transition-colors">
            <h2 className="text-xl font-black text-industrial-slate mb-4 uppercase tracking-wide border-b-2 border-industrial-orange pb-2 inline-block">
              Maximum Reliability
            </h2>
            <p className="text-industrial-charcoal leading-relaxed mt-4">
              Every recommendation we make is geared toward one metric: keeping your heavy equipment running safely and profitably. Downtime is the enemy; uncompromised reliability is the goal.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-industrial-charcoal text-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-300 mb-8">
            If your operation values truth and uptime over bureaucracy and lowest-bid contracting, we are ready to partner with you.
          </p>
          <Link href="/contact" className="inline-block bg-white text-industrial-slate hover:bg-industrial-orange hover:text-white font-bold py-4 px-10 uppercase tracking-wider transition-colors border-2 border-white hover:border-industrial-orange">
            Engage Our Authority
          </Link>
        </div>
      </section>
    </div>
  );
}