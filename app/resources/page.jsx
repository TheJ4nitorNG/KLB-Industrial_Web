import React from 'react';

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-industrial-paper">
      {/* HEADER SECTION */}
      <section className="bg-industrial-slate text-white py-12 md:py-16 px-6 border-b-4 border-industrial-orange">
        <div className="max-w-5xl mx-auto">
          <p className="text-industrial-orange font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
            Technical Resources
          </p>
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-wide">
            Audits & Documentation
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            Review our methodology. Download sample audits, reliability operations frameworks, and technical documentation to see exactly how we evaluate high-risk industrial environments.
          </p>
        </div>
      </section>

      {/* RESOURCES GRID */}
      <section className="py-12 md:py-20 px-6 max-w-5xl mx-auto w-full flex-grow">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          
          {/* RESOURCE CARD 1 */}
          <div className="bg-white border border-gray-200 shadow-sm flex flex-col hover:border-industrial-slate transition-colors border-t-8 border-t-industrial-charcoal">
            <div className="p-6 md:p-8 flex-grow">
              <div className="bg-industrial-paper inline-block p-3 border border-gray-200 mb-6 text-industrial-orange">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-industrial-slate mb-4 uppercase tracking-wide">
                Equipment Reliability Operation Audit
              </h2>
              <p className="text-industrial-charcoal leading-relaxed text-sm md:text-base">
                A comprehensive framework detailing our criteria for evaluating operational envelopes, vendor repair processes, and maintenance intervals for heavy machinery.
              </p>
            </div>
            <div className="p-6 md:p-8 pt-0 mt-auto">
              <a 
                href="/Equipment-Reliability-Operation-Audit.pdf" 
                download
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center items-center gap-3 bg-industrial-slate hover:bg-industrial-orange text-white font-bold py-4 px-6 uppercase tracking-wider transition-colors border-2 border-industrial-slate hover:border-industrial-orange text-sm md:text-base"
              >
                Download PDF
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              </a>
            </div>
          </div>

          {/* RESOURCE CARD 2 */}
          <div className="bg-white border border-gray-200 shadow-sm flex flex-col hover:border-industrial-slate transition-colors border-t-8 border-t-industrial-orange">
            <div className="p-6 md:p-8 flex-grow">
              <div className="bg-industrial-paper inline-block p-3 border border-gray-200 mb-6 text-industrial-slate">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-industrial-slate mb-4 uppercase tracking-wide">
                Sample Completed Audit
              </h2>
              <p className="text-industrial-charcoal leading-relaxed text-sm md:text-base">
                An actual, redacted technical audit demonstrating our unvarnished reporting style, root cause analysis depth, and execution-focused recommendations.
              </p>
            </div>
            <div className="p-6 md:p-8 pt-0 mt-auto">
              <a 
                href="/Sample-Completed-Audit.pdf" 
                download
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center items-center gap-3 bg-industrial-slate hover:bg-industrial-orange text-white font-bold py-4 px-6 uppercase tracking-wider transition-colors border-2 border-industrial-slate hover:border-industrial-orange text-sm md:text-base"
              >
                Download PDF
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}