import "./globals.css";
// Direct relative path for robustness
import Navbar from "../components/Navbar";

export const metadata = {
  title: "KLB Industrial Corp | Uncompromising Technical Authority",
  description: "Independent Technical Consulting for High-Consequence Industrial Operations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-industrial-orange selection:text-white min-h-screen flex flex-col bg-industrial-paper text-industrial-slate">
        
        {/* UPDATED NAVBAR WITH ONLY LOGO IMAGE */}
        <nav className="bg-industrial-slate text-white border-b-4 border-industrial-charcoal sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
            {/* LOGO LINK */}
            <a href="/" className="flex items-center hover:opacity-90 transition-opacity">
              <img 
                src="/KLB-Industrial-Logo-nobg.png" 
                alt="KLB Industrial Corp Logo" 
                className="h-16 w-auto" // Robust height to stand out
              />
            </a>
            
            {/* NAVIGATION LINKS */}
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
          </div>
        </nav>

        {/* MAIN CONTENT AREA */}
        <main className="flex-grow">
          {children}
        </main>

        {/* BASIC FOOTER */}
        <footer className="bg-industrial-charcoal text-gray-400 py-12 px-6 border-t-8 border-industrial-slate">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} KLB Industrial Corp. All rights reserved. 
              <br />
              Independent Technical Authority.
            </p>
            <div className="text-sm md:text-right space-y-1">
              <p>Box 1235, Grimshaw, AB T0H 1W0</p>
              <p>780-668-5975 | <a href="mailto:info@klbindustrial.com" className="hover:text-industrial-orange">info@klbindustrial.com</a></p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}