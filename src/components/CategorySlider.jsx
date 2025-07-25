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
  const itemWidth = 180;
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
      <h2 className="text-center text-xl sm:text-2xl font-bold text-[#9c3587] mb-2">
        Planning a Party? We've Got You Covered! 🎈
      </h2>
      <p className="text-center text-[#9c3587] text-sm sm:text-base mb-4">
        From baby bashes to bachelorettes — shop India’s most loved party decor in one click.
      </p>

      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
        {categories.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl w-full h-[300px] sm:h-[350px] lg:h-[415px] bg-cover bg-center shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer relative flex items-end justify-center p-4"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="bg-black/40 text-white w-full text-center py-2 font-semibold text-lg rounded-md">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
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
              className="flex-shrink-0 rounded-2xl w-[160px] h-[120px] sm:w-[180px] sm:h-[140px] bg-cover bg-center shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer flex items-center justify-center"
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

      {/* Dots */}
      <div className="md:hidden flex justify-center mt-4 gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === scrollIndex ? 'bg-[#9c3587]' : 'bg-gray-300'}`}
          />
        ))}
      </div>

      {/* Marquee */}
      <div className="overflow-hidden mt-8 py-4 bg-[#fff0e1] relative">
        <div className="marquee hover:paused">
          <div className="marquee-content">
            {[...Array(2)].map((_, loop) => (
              <div key={loop} className="flex gap-12">
                {Array(10).fill(null).map((_, i) => (
                  <span
                    key={`${loop}-${i}`}
                    className={`whitespace-nowrap ${i % 2 === 0 ? 'text-[#9c3587]' : 'text-[#38b2ac]'}`}
                  >
                    Make every celebration magical {i % 2 === 0 ? '🎈' : '🎉'}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .marquee {
          width: 100%;
          overflow: hidden;
          font-size: 1.8rem;
          font-family: 'Apple Chancery', cursive;
          font-weight: bold;
        }

        .marquee-content {
          display: flex;
          width: max-content;
          animation: scroll-left 80s linear infinite;
        }

        .marquee:hover .marquee-content {
          animation-play-state: paused;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default CategorySlider;



















