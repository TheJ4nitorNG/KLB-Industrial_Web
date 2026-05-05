import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-industrial-slate text-white border-b-4 border-industrial-charcoal sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-black text-2xl tracking-tighter">
          KLB <span className="text-industrial-orange">INDUSTRIAL</span>
        </Link>
        
        <div className="hidden md:flex gap-8 font-bold uppercase text-sm tracking-widest">
          <Link href="/services" className="hover:text-industrial-orange transition-colors">Services</Link>
          <Link href="/about" className="hover:text-industrial-orange transition-colors">About</Link>
          <Link href="/mission" className="hover:text-industrial-orange transition-colors">Mission</Link>
          <Link href="/resources" className="hover:text-industrial-orange transition-colors">Resources</Link>
          <Link href="/contact" className="bg-industrial-orange text-white px-5 py-2 hover:bg-orange-700 transition-colors border border-industrial-orange">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}