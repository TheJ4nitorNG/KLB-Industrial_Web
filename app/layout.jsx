import "./globals.css";
// Direct relative path to our new client component
import Navbar from "../components/Navbar";

export const metadata = {
  title: "KLB Industrial Corp | Uncompromising Technical Authority",
  description: "Independent Technical Consulting for High-Consequence Industrial Operations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-industrial-orange selection:text-white min-h-screen flex flex-col bg-industrial-paper text-industrial-slate">
        
        {/* IMPORTED NAVBAR COMPONENT */}
        <Navbar />

        {/* MAIN CONTENT AREA */}
        <main className="flex-grow">
          {children}
        </main>

        {/* BASIC FOOTER */}
        <footer className="bg-industrial-charcoal text-gray-400 py-12 px-6 border-t-8 border-industrial-slate mt-auto">
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