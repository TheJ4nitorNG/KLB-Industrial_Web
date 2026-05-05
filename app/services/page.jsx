import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-industrial-paper">
      {/* HEADER SECTION */}
      <section className="bg-industrial-slate text-white py-16 px-6 border-b-4 border-industrial-orange">
        <div className="max-w-5xl mx-auto">
          <p className="text-industrial-orange font-bold tracking-widest uppercase mb-4">
            Core Capabilities
          </p>
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-wide">
            Technical Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Bridging the gap between engineering theory and execution reality. We provide the oversight necessary to ensure your heavy equipment repairs and rebuilds achieve maximum reliability, safety, and uptime.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 px-6 max-w-5xl mx-auto w-full flex-grow">
        <div className="space-y-12">
          
          {/* SERVICE 1 */}
          <div className="bg-white border border-gray-200 shadow-sm p-8 md:p-12 border-l-8 border-l-industrial-charcoal">
            <h2 className="text-2xl md:text-3xl font-black text-industrial-slate mb-4 uppercase tracking-wide">
              1. Independent Equipment Reliability & Operating Envelope Review
            </h2>
            <p className="text-lg text-industrial-charcoal leading-relaxed mb-6">
              Vendor-agnostic assessments of your heavy machinery. We identify operational risks, evaluate current equipment envelopes, and provide actionable recommendations to extend asset lifecycle without bias.
            </p>
            <ul className="space-y-3 text-industrial-slate font-medium">
              <li className="flex items-start gap-3">
                <span className="text-industrial-orange mt-1">■</span> Failure mode analysis and mitigation
              </li>
              <li className="flex items-start gap-3">
                <span className="text-industrial-orange mt-1">■</span> Unbiased vendor and OEM repair audits
              </li>
              <li className="flex items-start gap-3">
                <span className="text-industrial-orange mt-1">■</span> Maintenance interval optimization
              </li>
            </ul>
          </div>

          {/* SERVICE 2 */}
          <div className="bg-white border border-gray-200 shadow-sm p-8 md:p-12 border-l-8 border-l-industrial-orange">
            <h2 className="text-2xl md:text-3xl font-black text-industrial-slate mb-4 uppercase tracking-wide">
              2. On-Call Technical Authority
            </h2>
            <p className="text-lg text-industrial-charcoal leading-relaxed mb-6">
              Direct access to senior technical expertise when critical decisions need to be made fast. Get straight answers to complex mechanical and operational challenges without the overhead of a full-time engineering team.
            </p>
            <ul className="space-y-3 text-industrial-slate font-medium">
              <li className="flex items-start gap-3">
                <span className="text-industrial-orange mt-1">■</span> Rapid failure diagnosis and troubleshooting
              </li>
              <li className="flex items-start gap-3">
                <span className="text-industrial-orange mt-1">■</span> Secondary reviews of proposed engineering solutions
              </li>
              <li className="flex items-start gap-3">
                <span className="text-industrial-orange mt-1">■</span> Urgent operational risk assessments
              </li>
            </ul>
          </div>

          {/* SERVICE 3 */}
          <div className="bg-white border border-gray-200 shadow-sm p-8 md:p-12 border-l-8 border-l-industrial-slate">
            <h2 className="text-2xl md:text-3xl font-black text-industrial-slate mb-4 uppercase tracking-wide">
              3. On-Site Technical Authority & Execution Oversight
            </h2>
            <p className="text-lg text-industrial-charcoal leading-relaxed mb-6">
              Boots-on-the-ground leadership for your most critical rebuilds and repairs. We ensure that the work executed matches the engineering theory, maintaining strict quality control and safety standards.
            </p>
            <ul className="space-y-3 text-industrial-slate font-medium">
              <li className="flex items-start gap-3">
                <span className="text-industrial-orange mt-1">■</span> Contractor and vendor performance management
              </li>
              <li className="flex items-start gap-3">
                <span className="text-industrial-orange mt-1">■</span> Real-time execution problem-solving
              </li>
              <li className="flex items-start gap-3">
                <span className="text-industrial-orange mt-1">■</span> Turnaround and major outage technical leadership
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-industrial-charcoal text-white py-20 px-6 text-center border-t-4 border-industrial-orange">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 tracking-wide">Require Immediate Oversight?</h2>
          <p className="text-gray-300 mb-10 text-lg leading-relaxed">
            Let's discuss your operational challenges. No commitment, just a straightforward conversation about the realities of your site and how we can secure your uptime.
          </p>
          <Link href="/contact" className="inline-block bg-industrial-orange hover:bg-orange-700 text-white font-bold py-4 px-10 uppercase tracking-wider transition-colors border border-industrial-orange">
            Schedule a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}