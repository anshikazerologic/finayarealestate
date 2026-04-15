import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const logos = [
  { name: 'Logo 1', src: '/assets/cnlogo.png' },
  { name: 'Logo 2', src: '/assets/loqologo.png' },
  { name: 'Logo 3', src: '/assets/oooologo.png' },
  { name: 'Logo 4', src: '/assets/logoipsumlogo.png' },
  { name: 'Logo 5', src: '/assets/logoipsumlogo.png' },
  { name: 'Logo 6', src: '/assets/cnlogo.png' },
  { name: 'Logo 7', src: '/assets/loqologo.png' },
  { name: 'Logo 8', src: '/assets/oooologo.png' },
];

export default function TrustSection() {
  return (
    <section className="px-5 md:px-10 lg:px-24 py-11 bg-surface">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-20 items-center">
          
          <div>
            <h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-inter  font-medium text-gray-900 tracking-tight mb-12"
            >
              Find your dream home and indulge in a life of <span className="text-teal-700 font-inter tracking-tight font-medium">elegance, sophistication, and perfect living.</span>
            </h2>

            <div className="flex  flex-col items-start gap-4 mb-8">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-white border-surface object-cover"
                    src={`https://i.pravatar.cc/150?u=${i}`}
                    alt="User"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p className="text-xs text-gray-500 font-inter max-w-md  tracking-tight">
                The experience of buying a home was very immaculate and it took very little less documents to buy my dream home
              </p>
            </div>

            <button className="flex  items-center gap-2 px-8 py-3 rounded-full border border-gray-300 text-sm font-medium font-inter hover:bg-gray-100 transition-colors">
              Our Trusted Lenders
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          
          <div className="grid  gap-2  opacity-40 grayscale">
            {logos.map((logo, index) => (
             
               <div className={cn("  flex ",index % 2 === 0 ? "justify-start md:justify-center": "justify-end ")}>
                 <div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className=""
              >
                 <img src={logo.src} alt={logo.name} className="max-h-8 max-w-2xl grayscale" referrerPolicy="no-referrer" />
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
