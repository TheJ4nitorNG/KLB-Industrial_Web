import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="bg-industrial-slate text-white py-24 px-6 border-b-8 border-industrial-orange">
        <div className="max-w-5xl mx-auto">
          
          {/* NEW HERO TEXT LOGO - CENTERED & INCREASED SIZE */}
          <img 
            src="/KLB-Industrial-Logo-text.png" 
            alt="KLB Industrial Corp" 
            className="block mx-auto h-16 md:h-20 w-auto mb-10 invert transition-all" 
          />

          <p className="text-industrial-orange font-bold tracking-widest uppercase mb-4">
            Uncompromising Technical Authority
          </p>
          <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            Protecting High-Consequence <br /> Industrial Operations.
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mb-10 leading-relaxed">
            We provide independent technical oversight, rapid failure diagnosis, and reliability reviews for heavy industry—ensuring your equipment operates safely and profitably. No bloated teams, just straight answers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-industrial-orange hover:bg-orange-700 text-white font-bold py-4 px-8 uppercase tracking-wider text-center transition-colors">
              Request a Review
            </Link>
            <Link href="/services" className="border-2 border-white hover:bg-white hover:text-industrial-slate text-white font-bold py-4 px-8 uppercase tracking-wider text-center transition-colors">
              View Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* PROBLEM STATEMENT & QUALIFICATION SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-black mb-6 uppercase tracking-wide border-l-4 border-industrial-orange pl-4">
            The Reality of Heavy Industry
          </h2>
          <p className="text-lg leading-relaxed text-industrial-charcoal mb-6">
            We help owners and operators catch problems early, diagnose failures fast, and make confident decisions - without bloated consultant teams.
          </p>
          <div className="bg-industrial-paper border border-gray-200 p-6">
            <h3 className="font-bold text-industrial-slate uppercase mb-2">Our Process:</h3>
            <ol className="list-decimal list-inside space-y-2 text-industrial-charcoal font-medium">
              <li>30-minute operational conversation.</li>
              <li>Surgical scope definition.</li>
              <li>Remote or on-site execution.</li>
              <li>Clear, unvarnished deliverables.</li>
            </ol>
          </div>
        </div>

        {/* TARGET AUDIENCE CALLOUT */}
        <div className="bg-industrial-charcoal p-10 text-white border-t-4 border-industrial-orange shadow-xl">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-industrial-orange uppercase tracking-wider">Who We Work With</h3>
            <ul className="space-y-3 font-medium">
              <li className="flex items-start gap-3">
                <span className="text-industrial-orange">■</span> High-downtime cost operations
              </li>
              <li className="flex items-start gap-3">
                <span className="text-industrial-orange">■</span> Remote and scaling operations
              </li>
              <li className="flex items-start gap-3">
                <span className="text-industrial-orange">■</span> Owners demanding straight answers
              </li>
            </ul>
          </div>
          
          <div className="pt-6 border-t border-slate-600">
            <h3 className="text-sm font-bold mb-3 text-gray-400 uppercase tracking-wider">Who We Don't Work With</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Lowest-bid work, hands-only contracting, or rubber-stamped engineering decisions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}