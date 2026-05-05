import "./globals.css";
// Swapped the @ alias for a direct relative path
import Navbar from "../components/Navbar";

export const metadata = {
  title: "KLB Industrial Corp",
  description: "Independent Technical Consulting for High-Consequence Industrial Operations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-industrial-orange selection:text-white">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}