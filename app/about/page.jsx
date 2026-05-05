import React from 'react';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-industrial-paper">
      {/* HEADER SECTION */}
      <section className="bg-industrial-slate text-white py-16 px-6 border-b-4 border-industrial-orange">
        <div className="max-w-5xl mx-auto">
          <p className="text-industrial-orange font-bold tracking-widest uppercase mb-4">
            Trusted Where Mistakes Are Expensive.
          </p>
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-wide">
            About KLB Industrial
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            We are intentionally small and fiercely independent. Our background is forged in high-risk, high-consequence operations where engineering theory must meet execution reality.
          </p>
        </div>
      </section>

      {/* LEADERSHIP PROFILE SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* PHOTO INTEGRATION */}
          <div className="w-full md:w-1/3 shrink-0">
            <img 
              src="/nolan-photo.jpg" 
              alt="Nolan Campbell" 
              className="w-full h-auto object-cover border-b-8 border-industrial-orange grayscale hover:grayscale-0 transition-all duration-500 shadow-sm"
            />
          </div>

          {/* BIO */}
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-black text-industrial-slate mb-2 uppercase tracking-wide">
              Nolan Campbell
            </h2>
            <p className="text-industrial-orange font-bold uppercase tracking-widest mb-8 text-sm">
              Principal Technical Authority
            </p>
            
            <div className="space-y-6 text-lg text-industrial-charcoal leading-relaxed mb-10">
              <p>
                With extensive experience across heavy industry—specifically in the mining and forestry sectors—Nolan has built a career on diagnosing complex mechanical failures and overseeing critical equipment rebuilds.
              </p>
              <p>
                He founded KLB Industrial Corp. to address a clear gap in the market: operators needed independent, unvarnished technical advice without the vendor bias or bloated overhead of massive engineering firms. 
              </p>
              <p>
                When machinery goes down in remote or high-downtime environments, standard operational procedures often fall short. Nolan provides the decisive technical oversight required to get operations back online safely and reliably.
              </p>
            </div>

            {/* LINKEDIN CTA */}
            <a 
              href="https://www.linkedin.com/in/nolan-campbell" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border-2 border-industrial-slate hover:bg-industrial-slate hover:text-white text-industrial-slate font-bold py-3 px-6 uppercase tracking-wider transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* WHY US / TRUST FACTORS */}
      <section className="bg-white py-20 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-center text-industrial-slate mb-16 uppercase tracking-wide">
            Why Partner With KLB?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="p-8 bg-industrial-paper border border-gray-200 border-t-4 border-t-industrial-slate">
              <h3 className="text-xl font-bold text-industrial-slate mb-4 uppercase tracking-wide">
                Forged in High-Risk Ops
              </h3>
              <p className="text-industrial-charcoal leading-relaxed">
                Our expertise isn't purely theoretical. We have deep, hands-on experience navigating the brutal realities of the mining and forestry sectors. We know what it takes to keep heavy iron running in unforgiving environments.
              </p>
            </div>

            <div className="p-8 bg-industrial-paper border border-gray-200 border-t-4 border-t-industrial-orange">
              <h3 className="text-xl font-bold text-industrial-slate mb-4 uppercase tracking-wide">
                Fiercely Independent
              </h3>
              <p className="text-industrial-charcoal leading-relaxed">
                We carry zero vendor bias. We do not sell parts, and we do not represent OEMs. Our sole allegiance is to the reliability of your operation and the profitability of your site.
              </p>
            </div>

            <div className="p-8 bg-industrial-paper border border-gray-200 border-t-4 border-t-industrial-charcoal">
              <h3 className="text-xl font-bold text-industrial-slate mb-4 uppercase tracking-wide">
                Intentionally Small
              </h3>
              <p className="text-industrial-charcoal leading-relaxed">
                You hire an expert, you get the expert. We eliminate the layers of project managers and junior engineers found in large firms to deliver straight answers and rapid execution.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}