import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';


const articles = [
  {
    title: "Smart Homes: Transforming Modern Living with Technology",
    date: "Jan 1, 2025",
    image: "/assets/smarthome.png",
  },
  {
    title: "Luxury Living Trends: What Homebuyers Want in 2025",
    date: "Jan 13, 2025",
    image: "/assets/luxuryliving.png",
  },
  {
    title: "The Future of Urban Living: Answer to Overpopulation?",
    date: "Jan 10, 2025",
    image: "/assets/thefutureofurbanliving.png",
  }
];

export default function BlogSection() {
  return (
    <section className="px-5 md:px-10 lg:px-24 py-11 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs font-medium font-inter text-zinc-900  tracking-[0.2em] mb-4">Blog and Article</p>
            <h2 className="text-4xl md:text-5xl font-medium  text-zinc-900">
              Real Estate <span className=" text-teal-700 font-inter itatic font-medium">Handbooks</span>
            </h2>
          </div>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-16/10 mb-6">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-inter font-medium text-gray-900 group-hover:text-brand transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-neutral-500 font-mormal">{article.date}</span>
                  <a href="#" className="flex items-center gap-1 text-sm font-normal text-gray-900 group-hover:text-brand transition-colors">
                    Read more
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-5'>
             <button className="flex items-center gap-2 px-8 py-3 rounded-full border border-zinc-900 text-sm font-medium hover:bg-gray-100 transition-colors w-fit">
            Check Other Articles
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
