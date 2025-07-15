import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  { title: 'Birthday', image: 'CategorySlider/birthday.jpg' },
  { title: 'DIY', image: 'CategorySlider/DIY.jpg' },
  { title: 'Bachelorette', image: 'CategorySlider/bachelorette.jpg' },
  { title: 'Return Gifts', image: 'CategorySlider/ReturnGift.jpg' },
  { title: 'New', image: 'CategorySlider/New.jpg' },
  { title: 'Epic Themes', image: 'CategorySlider/epic.jpg' },
  { title: 'Desi Chic', image: 'CategorySlider/desichic.jpg' },
  { title: 'Party', image: 'CategorySlider/party.jpg' },
];

const CategorySlider = () => {
  const scrollRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const itemWidth = 160 + 16;
  const visibleItems = 2;
  const maxIndex = Math.ceil(categories.length - visibleItems);

  const handleScroll = (dir) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const newIndex = dir === 'left'
      ? Math.max(scrollIndex - 1, 0)
      : Math.min(scrollIndex + 1, maxIndex);
    container.scrollTo({ left: newIndex * itemWidth, behavior: 'smooth' });
    setScrollIndex(newIndex);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const handleScrollUpdate = () => {
      const index = Math.round(container.scrollLeft / itemWidth);
      setScrollIndex(index);
    };
    container.addEventListener('scroll', handleScrollUpdate);
    return () => container.removeEventListener('scroll', handleScrollUpdate);
  }, []);

  return (
    <div className="bg-[#fdf6ef] px-4 py-6">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-2xl font-bold text-[#9c3587] mb-4">
        Planning a Party? We've Got You Covered! 🎈
      </h2>
      <p className="text-center text-[#9c3587] text-md md:text-base mb-4">
        From baby bashes to bachelorettes — shop India’s most loved party decor in one click.
      </p>

      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-4 gap-4 justify-center items-center">
        {categories.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl w-[290.33px] h-[415px] bg-cover bg-center shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer relative flex items-end justify-center p-4"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="bg-black/40 text-white w-full text-center py-2 font-semibold text-lg rounded-md">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Horizontal Scroll */}
      <div className="relative md:hidden mt-6">
        <button
          onClick={() => handleScroll('left')}
          className="p-2 bg-white rounded-full shadow-md absolute left-0 top-[35%] z-10"
        >
          <ChevronLeft className="text-[#9c3587]" />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 px-8 scrollbar-hide scroll-smooth"
        >
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 rounded-2xl w-[160px] h-[120px] bg-cover bg-center shadow-md hover:scale-105 transition-transform duration-100 cursor-pointer flex items-center justify-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="bg-black/40 text-white px-2 py-1 rounded text-sm font-semibold">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => handleScroll('right')}
          className="p-2 bg-white rounded-full shadow-md absolute right-0 top-[35%] z-10"
        >
          <ChevronRight className="text-[#9c3587]" />
        </button>
      </div>

      {/* Dots for Mobile */}
      <div className="md:hidden flex justify-center mt-4 gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${index === scrollIndex ? 'bg-[#9c3587]' : 'bg-gray-300'}`}
          />
        ))}
      </div>

      {/* Marquee Line */}
      <div className="overflow-hidden mt-8 py-5 bg-[#fff0e1] relative">
        <div className="marquee hover:paused">
          <div className="marquee-content">
            <span className="text-[#9c3587]">Make every celebration magical 🎈</span>
            <span className="text-[#38b2ac]">Make every celebration magical 🎉</span>
            <span className="text-[#9c3587]">Make every celebration magical 🎈</span>
            <span className="text-[#38b2ac]">Make every celebration magical 🎉</span>
          </div>
        </div>
      </div>

      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          .marquee {
            overflow: hidden;
            position: relative;
            height: 3rem;
            font-size: 1.8rem;
            font-family: 'Apple Chancery', cursive;
            font-weight: bold;
            white-space: nowrap;
          }

          .marquee-content {
            display: inline-block;
            padding-left: 100%;
            animation: scroll-left 15s linear infinite;
            display: flex;
            gap: 4rem;
          }

          .marquee:hover .marquee-content {
            animation-play-state: paused;
          }

          @keyframes scroll-left {
            0% {
              transform: translateX(0%);
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





















