import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  {
    title: 'Birthday',
    image: 'https://cdn.shopify.com/s/files/1/0612/8603/9670/files/Birthday_1_1.png?v=1718192644',
  },
  {
    title: 'DIY',
    image: 'https://cdn.shopify.com/s/files/1/0612/8603/9670/files/DIY.png?v=1718192644',
  },
  {
    title: 'Bachelorette',
    image: 'https://cdn.shopify.com/s/files/1/0612/8603/9670/files/Bachelorette.png?v=1718192644',
  },
  {
    title: 'Return Gifts',
    image: 'https://cdn.shopify.com/s/files/1/0612/8603/9670/files/Return_Gifts.png?v=1718192644',
  },
  {
    title: 'New',
    image: 'https://cdn.shopify.com/s/files/1/0612/8603/9670/files/New.png?v=1718192644',
  },
  {
    title: 'Epic Themes',
    image: 'https://cdn.shopify.com/s/files/1/0612/8603/9670/files/Epic_Themes.png?v=1718192644',
  },
  {
    title: 'Desi Chic',
    image: 'https://cdn.shopify.com/s/files/1/0612/8603/9670/files/Desi_Chic.png?v=1718192644',
  },
  {
    title: 'Party',
    image: 'https://cdn.shopify.com/s/files/1/0612/8603/9670/files/Party.png?v=1718192644',
  },
];

const CategorySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const start = currentIndex * itemsPerPage;
  const visibleCategories = categories.slice(start, start + itemsPerPage);

  return (
    <div className="bg-[#fdf6ef] px-4 py-6">
      <h2 className="text-center text-xl md:text-2xl font-bold text-[#9c3587] mb-4">
        Planning a Party? We've Got You Covered! 🎈
      </h2>
      <p className="text-center text-[#9c3587] text-sm md:text-base mb-4">
        From baby bashes to bachelorettes — shop India’s most loved party decor in one click.
      </p>

      <div className="relative flex items-center justify-center gap-2">
        <button onClick={handlePrev} className="p-2 bg-white rounded-full shadow-md absolute left-0 z-10">
          <ChevronLeft className="text-[#9c3587]" />
        </button>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 overflow-hidden">
          {visibleCategories.map((item, index) => (
            <div key={index} className="rounded-2xl overflow-hidden relative">
              <img src={item.image} alt={item.title} className="rounded-2xl w-full object-cover" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-white font-bold text-lg">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        <button onClick={handleNext} className="p-2 bg-white rounded-full shadow-md absolute right-0 z-10">
          <ChevronRight className="text-[#9c3587]" />
        </button>
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-[#9c3587]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Marquee Line */}
      <div className="overflow-hidden mt-6 py-3 bg-[#fff0e1]">
        <div className="whitespace-nowrap animate-marquee font-bold text-lg text-[#9c3587] flex items-center gap-6">
          <span className="font-[Dancing Script] text-[#9c3587]">Make every celebration magical 🎈</span>
          <span className="font-[Dancing Script] text-[#38b2ac]">Make every celebration magical 🎉</span>
          <span className="font-[Dancing Script] text-[#9c3587]">Make every celebration magical 🎈</span>
          <span className="font-[Dancing Script] text-[#38b2ac]">Make every celebration magical 🎉</span>
        </div>
      </div>

      <style>
        {`
        .animate-marquee {
          display: inline-block;
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        `}
      </style>
    </div>
  );
};

export default CategorySlider;
