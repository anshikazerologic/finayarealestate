import React from 'react';
import { Search, MapPin, CircleDollarSign } from 'lucide-react';


export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-175 flex items-center overflow-hidden">
     
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/heroSection_bgimg.png"
          alt="Luxury Home"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container-custom relative z-10 p-5 md:p-10 lg:p-20">
        <div className="max-w-3xl">
          <h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-7xl font-inter tracking-tight   text-white leading-[1.1] mb-6"
          >
            Buy Your Dream <br />
            Without <span className="italic font-medium font-inter tracking-tight ">Hassle.</span>
          </h1>
          
          <p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-2xl text-white tracking-tight font-inter font-normal max-w-lg mb-6"
          >
            Finaya takes care of finances while you are busy buying your dream home.
          </p>

          <div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className=" flex flex-col md:flex-row gap-4 items-end"
          >
            <div className="flex flex-col  w-full space-y-2">
              <label className="text-xs font-medium text-white  tracking-wider mb-3 ml-1">Location</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Enter city, address, ZIP code or MLS #"
                  className="w-full bg-white/10 border border-white/20 rounded-full  py-3.5 px-4 text-white placeholder:text-white/40   outline-2 outline-white  transition-all"
                />
              </div>
            </div>

            <div className="w-full md:w-75 space-y-2">
              <label className="text-xs font-medium text-white  tracking-wider  ml-1">Price or Monthly Budget</label>
              <div className="relative">
                <select className="w-full  bg-white/10 border border-white/20 rounded-full mt-2  py-3.5 px-4 text-white appearance-none outline-2 outline-white transition-all">
                  <option className="bg-brand-dark">$ 240K - 260K</option>
                  <option className="bg-brand-dark">$ 260K - 500K</option>
                  <option className="bg-brand-dark">$ 500K - 1M</option>
                  <option className="bg-brand-dark">$ 1M+</option>
                </select>
              </div>
            </div>

            <button className="w-full md:w-auto bg-white text-teal-700 font-medium  py-3.5 px-8 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors shadow-lg">
              <Search className="w-4 h-4" />
              Search
            </button>
          </div>
        

        </div>
      </div>
    </section>
  );
}
