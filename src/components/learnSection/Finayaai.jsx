import React from 'react';
import { MessageSquare, Sparkles, ShieldAlert, Mic, Image as ImageIcon, Send } from 'lucide-react';


export default function Finayaai() {
  const categoryegories = [
    {
      title: "Examples",
      icon: <MessageSquare className="w-6 h-6" />,
      items: [
        "What is floating mortgage rate?",
        "Got any creative ideas for a 10year old's birthday?",
        "How do I determine the right price for my home?"
      ]
    },
    {
      title: "Capabilities",
      icon: <Sparkles className="w-6 h-6" />,
      items: [
        "Find me 3 bedroom houses in Tacoma with a yard and a good school district.",
        "Find me the best home in Bellevue within my budget",
        "Find me the best 4 bedroom house in Kirkland that will appreciate higher than average"
      ]
    },
    {
      title: "Legal",
      icon: <ShieldAlert className="w-6 h-6" />,
      items: [
        "Why are inspections and appraisals important?",
        "What are the differences between pre-approval and pre-qualificategoryion?",
        "What are the legal consequences of defaulting on a loan?"
      ]
    }
  ];

  return (
    <div>
         <div className="min-h-screen bg-[#007668] flex flex-col items-center justify-center py-20  px-4">
      
      <div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-2 mb-16"
      >
        <img
        src='/assets/finayaai_bgimg.png'
        className='w-65 h-20'
        />
       
      </div>

     
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {categoryegories.map((category, idx) => (
          <div 
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="text-white mb-4">
              {category.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-6  tracking-wider">{category.title}</h3>
            <div className="space-y-3 w-full">
              {category.items.map((item, i) => (
                <button 
                  key={i}
                  className="w-full bg-white/10 hover:bg-white/20 transition-colors text-white/90 text-sm p-2 rounded-xl text-left leading-relaxed border border-white/5"
                >
                  "{item}"
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

     
      
    </div>
    
    <div className="bg-[#e0eeed] py-4 px-3 sm:px-6 rounded-b-2xl">
  <div className="max-w-4xl mx-auto w-full">
    
    <div className="bg-white/90 backdrop-blur-md rounded-2xl px-2 py-2 flex items-center gap-2 sm:gap-3 shadow-2xl">
      
      
      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-black shrink-0">
        <Mic className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

    
      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-black shrink-0">
        <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      
      <input 
        type="text" 
        placeholder="Type message" 
        className="flex-1 min-w-0 bg-transparent border-none focus:ring-0 text-gray-800 placeholder:text-gray-400 px-2 py-2 text-sm sm:text-base"
      />

      <button className="p-2 sm:px-3 sm:py-2 bg-brand/10 text-brand hover:bg-brand hover:text-white rounded-xl transition-all shrink-0">
        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

    </div>

  </div>
</div>
    
    </div>
   
  );
}
