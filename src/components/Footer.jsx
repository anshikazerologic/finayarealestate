import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Products: [
      { name: 'Buy', href: '#' },
      { name: 'Sell', href: '#' },
      { name: 'Insure', href: '#' },
      { name: 'Get Loan', href: '#' },
    ],
    Partners: [
      { name: 'Blog', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms & Conditions', href: '#' },
      { name: 'Other Doc', href: '#' },
    ],
    Company: [
      { name: 'Instagram', href: '#' },
      { name: 'Facebook', href: '#' },
      { name: 'Twitter', href: '#' },
      { name: 'Linkedin', href: '#' },
    ]
  };

  return (
    <footer className="bg-[#002B26] text-white overflow-hidden">
      
      <div className="container-custom px-5 md:px-10 lg:px-24 py-12">
        
        
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-16 mb-12">
          
          
          <div className="max-w-md">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter mb-8 leading-tight">
              Get Personal Buying or Selling Assistant
            </h2>

            <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black font-normal text-sm hover:bg-gray-100 transition-colors">
              Book Call
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="mt-10 text-white/50 text-sm">
              contact@finaya.com
            </div>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-sm font-bold tracking-widest mb-6">
                  {category}
                </h3>

                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm font-medium text-white/40 hover:text-white transition-colors flex items-center gap-1 group"
                      >
                        {link.name}
                        <ArrowUpRight className="w-3 h-3 opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-6 border-t border-white/10 gap-4">
          <p className="text-xs text-white/30">
            All copyrights by Finaya @ 2025
          </p>
          <p className="text-xs text-white/30">
            Design and developed by zerologic
          </p>
        </div>
      </div>

      
      <div className="relative h-75 w-full flex items-center justify-center">
        
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/footerSection_bgimg.png"
            alt="Footer Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#002B26] via-[#002B26]/20 to-transparent" />
        </div>

        <h1 className="relative z-10 text-[30vw]  md:text-[25vw] font-inter font-bold text-white/20 leading-none select-none">
          finaya
        </h1>
      </div>
    </footer>
  );
}