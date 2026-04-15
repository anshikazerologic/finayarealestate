import React from 'react';
import { cn } from '../../lib/utils';

const steps = [
  {
    title: "One Click Home Tours",
    description: "Voluptas rerum quam non. Qui voluptas eum sint nostrum quod. Voluptates voluptatum est voluptatem reiciendis ratione laudantium eius. Voluptas laboriosam dicta necessitatibus dolor vel modi fugiat.",
    image: "/assets/oneclickhometour.png",
    className: "md:col-span-1 md:row-span-2"
  },
  {
    title: "Make An Offer",
    description: "Sed ullam corporis amet. Aut voluptas laborum. Accusamus et impedit optio accusamus quia modi sed. Accusantium earum ut tenetur quis harum aut rerum et. Autem voluptatem aut cum dignissimos assumenda vel placeat illum. Voluptatem eos id ab dolorem at dolorem eveniet blanditiis.",
    image: "/assets/makeanoffer.png",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Get A Loan",
    description: "Rem repellendus ut et ea. Minus quaerat ut nesciunt. Neque cumque dolores vitae. Eos rerum nobis in officia. Non animi est magnam molestias non autem molestiae voluptas.",
    image: "/assets/getaloan.png",
    className: "md:col-span-1 md:row-span-2"
  },
  {
    title: "Close The Deal",
    description: "Nam modi sequi fuga facilis cupiditate cum. Corrupti veritatis vero. Consequatur magnam temporibus odit vitae nesciunt et ducimus fuga. Veritatis similique ut. Dignissimos magnam et optio et dolorem. Sunt accusantium consectetur odio.",
    image: "/assets/closethedeal.png",
    className: "md:col-span-1 md:row-span-1"
  }
];

export default function HowWeWork() {
  return (
    <section className="px-5 md:px-10 lg:px-24 pt-11 bg-white">
      <div className="container-custom">
        <div className="mb-5">
          <p className="text-xs font-medium font-inter text-zinc-900  tracking-tight mb-4">How We Work</p>
          <h2 className="text-4xl md:text-5xl font-medium font-inter tracking-tight text-zinc-900">
            Home Buying <span className=" text-teal-700 italic font-inter tracking-tight font-medium">Made Simple</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(step.className, "flex flex-col mb-4 ")}
            >
              <div className={cn(
                "group relative h-full flex flex-col",
                index % 2 !== 0 ? "md:flex-col-reverse" : "md:flex-col"
              )}>
                <div className={cn(
                  "relative overflow-hidden rounded-2xl  aspect-5/4 md:aspect-4/5",
                  index % 2 !== 0 ? "md:mt-3" : "md:mb-3"
                )}>
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover  transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-inter font-medium tracking-tight text-gray-900 my-1">{step.title}</h3>
                  <p className="text-sm font-inter font-normal tracking-tight text-gray-500 leading-relaxed line-clamp-2">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
