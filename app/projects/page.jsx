import React from 'react';

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-industrial-paper">
      {/* HEADER SECTION */}
      <section className="bg-industrial-slate text-white py-12 md:py-16 px-6 border-b-4 border-industrial-orange">
        <div className="max-w-5xl mx-auto">
          <p className="text-industrial-orange font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
            Technical Case Studies
          </p>
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-wide leading-tight">
            Proven <br /> Operational Authority
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            Theoretical engineering meets execution reality. Review our portfolio of critical equipment replacement oversight, failure diagnosis, and reliability optimizations performed in high-consequence environments.
          </p>
        </div>
      </section>

      {/* PROJECTS FEED */}
      <section className="py-12 md:py-20 px-6 max-w-6xl mx-auto w-full flex-grow">
        
        {/* PROJECT CASE STUDY 1 */}
        <div className="bg-white border border-gray-200 shadow-xl mb-16 overflow-hidden">
          
          {/* VISUALS GRID (Before/After) */}
          <div className="grid md:grid-cols-2 border-b-4 border-industrial-charcoal">
            {/* BEFORE */}
            <div className="relative group overflow-hidden">
              {/* Added h-64 for mobile to prevent collapsing */}
              <img 
                src="/klb_before.png" 
                alt="Equipment status before replacement" 
                className="w-full h-64 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-0 left-0 bg-industrial-slate text-white font-bold uppercase tracking-widest text-xs px-4 py-2 border-b border-r border-slate-700">
                Before
              </div>
            </div>
            {/* AFTER */}
            <div className="relative group overflow-hidden border-t md:border-t-0 md:border-l border-gray-300">
              <img 
                src="/klb_after.png" 
                alt="Equipment status after replacement completion" 
                className="w-full h-64 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-0 right-0 bg-industrial-orange text-white font-bold uppercase tracking-widest text-xs px-4 py-2 border-b border-l border-orange-600">
                After
              </div>
            </div>
          </div>

          {/* TECHNICAL WRITEUP */}
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200">
              <h2 className="text-2xl md:text-3xl font-black text-industrial-slate uppercase tracking-wide leading-tight">
                Critical Equipment Replacement Oversight
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="text-xs font-bold uppercase tracking-widest bg-industrial-paper text-industrial-charcoal px-3 py-1.5 border border-gray-200">
                  Sector: Mining
                </span>
                <span className="text-xs font-bold uppercase tracking-widest bg-industrial-paper text-industrial-charcoal px-3 py-1.5 border border-gray-200">
                  Type: On-Site Oversight
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {/* THE CHALLENGE */}
              <div className="md:col-span-2 space-y-6 text-base md:text-lg text-industrial-charcoal leading-relaxed">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                  Technical Challenge & Scope
                </h3>
                <p>
                  The operation faced significant reliability issues with a primary piece of heavy machinery, leading to excessive downtime and high maintenance costs. KLB Industrial was engaged to provide an independent technical assessment of the existing equipment's operational envelope and failure modes.
                </p>
                <p>
                  Our analysis determined that a complete replacement was necessary. We defined the precise technical specifications for the new asset and established robust execution oversight protocols to ensure the installation met engineering intent and safety standards.
                </p>
              </div>

              {/* THE OUTCOME */}
              <div className="bg-industrial-paper border border-gray-200 p-6 md:p-8 space-y-4 border-l-4 border-l-industrial-orange">
                <h3 className="text-sm font-bold text-industrial-slate uppercase tracking-widest">
                  Execution Outcome
                </h3>
                <p className="text-sm md:text-base text-industrial-charcoal leading-relaxed">
                  KLB provided boots-on-the-ground technical authority throughout the removal and installation phases. We managed contractor performance, resolved real-time execution challenges, and validated that the new equipment was commissioned exactly to theoretical specifications. The asset achieved full operational capacity safely and ahead of schedule, significantly reducing site downtime.
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}