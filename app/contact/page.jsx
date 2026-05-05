import React from 'react';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-industrial-paper">
      {/* HEADER SECTION */}
      <section className="bg-industrial-slate text-white py-16 px-6 border-b-4 border-industrial-orange">
        <div className="max-w-6xl mx-auto">
          <p className="text-industrial-orange font-bold tracking-widest uppercase mb-4">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-wide">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            Reach out for a 30-minute operational conversation. We define the scope quickly, assess the risks, and give you straight answers.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-20 px-6 max-w-6xl mx-auto w-full flex-grow grid md:grid-cols-2 gap-16">
        
        {/* DIRECT CONTACT INFO */}
        <div>
          <h2 className="text-2xl font-black text-industrial-slate mb-8 uppercase tracking-wide border-l-4 border-industrial-orange pl-4">
            Direct Contact
          </h2>
          
          <div className="space-y-8 text-industrial-charcoal font-medium text-lg">
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Phone</p>
              <a href="tel:780-668-5975" className="hover:text-industrial-orange transition-colors">
                780-668-5975
              </a>
            </div>
            
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Email</p>
              <a href="mailto:info@klbindustrial.com" className="hover:text-industrial-orange transition-colors">
                info@klbindustrial.com
              </a>
            </div>
            
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Headquarters</p>
              <address className="not-italic">
                Box 1235<br />
                Grimshaw, AB<br />
                T0H 1W0
              </address>
            </div>
          </div>

          {/* SERVICE AREA NOTE */}
          <div className="mt-12 p-6 bg-white border border-gray-200 border-l-8 border-industrial-charcoal shadow-sm">
            <h3 className="font-bold text-industrial-slate uppercase mb-2">Service Area</h3>
            <p className="text-sm leading-relaxed text-industrial-charcoal">
              We provide remote technical authority globally, and on-site execution oversight across Western Canada and remote high-consequence operational zones.
            </p>
          </div>
        </div>

        {/* SECURE CONTACT FORM */}
        <div className="bg-white p-8 md:p-10 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-black text-industrial-slate mb-6 uppercase tracking-wide">
            Request an Assessment
          </h2>
          
          <form className="space-y-6" action="#" method="POST">
            {/* SPAM HONEYPOT (Hidden from users, catches bots) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="bot-field">Do not fill this out if you are human</label>
              <input type="text" id="bot-field" name="bot-field" tabIndex="-1" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-bold text-industrial-slate uppercase tracking-wider mb-2">First Name *</label>
                <input type="text" id="firstName" name="firstName" required className="w-full p-3 border border-gray-300 focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange outline-none transition-all bg-industrial-paper" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-bold text-industrial-slate uppercase tracking-wider mb-2">Last Name *</label>
                <input type="text" id="lastName" name="lastName" required className="w-full p-3 border border-gray-300 focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange outline-none transition-all bg-industrial-paper" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-industrial-slate uppercase tracking-wider mb-2">Work Email *</label>
              <input type="email" id="email" name="email" required className="w-full p-3 border border-gray-300 focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange outline-none transition-all bg-industrial-paper" />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-bold text-industrial-slate uppercase tracking-wider mb-2">Company / Operation</label>
              <input type="text" id="company" name="company" className="w-full p-3 border border-gray-300 focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange outline-none transition-all bg-industrial-paper" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-industrial-slate uppercase tracking-wider mb-2">Operational Challenge *</label>
              <textarea id="message" name="message" rows="5" required className="w-full p-3 border border-gray-300 focus:border-industrial-orange focus:ring-1 focus:ring-industrial-orange outline-none transition-all bg-industrial-paper resize-none"></textarea>
            </div>

            <button type="submit" className="w-full bg-industrial-slate hover:bg-industrial-charcoal text-white font-bold py-4 px-8 uppercase tracking-wider transition-colors border border-industrial-slate border-b-4 border-b-industrial-orange">
              Submit Inquiry
            </button>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              Your information is securely processed. We do not engage with third-party lead generation.
            </p>
          </form>
        </div>
        
      </section>
    </div>
  );
}