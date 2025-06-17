'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-sm border-b border-gray-100' 
        : 'bg-white border-b border-gray-100'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            JustPushIt
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/what-we-do" className="text-gray-600 hover:text-gray-900 transition-colors">
              What We Do
            </Link>
            <Link href="/find-us" className="text-gray-600 hover:text-gray-900 transition-colors">
              Find Us
            </Link>
            <a 
              href="https://discord.gg/h4WE4DyTqa" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-4 py-2 rounded-md bg-[#5865F2] text-white hover:bg-[#4752C4] transition-colors"
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Navbar />
        {children}
        <footer className="bg-white border-t border-gray-100 py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">JustPushIt</h3>
                <p className="text-gray-600">
                  A community of makers pushing their projects forward together.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/what-we-do" className="text-gray-600 hover:text-purple-600 transition-colors">What We Do</Link></li>
                  <li><Link href="/find-us" className="text-gray-600 hover:text-purple-600 transition-colors">Find Us</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-100 mt-8 pt-8 text-center text-gray-600">
              <p>&copy; {new Date().getFullYear()} JustPushIt. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
