import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  {
    image: 'banner1.jpg',
    alt: 'Thank You Gifts Banner',
    buttonText: 'Explore Now',
    link: '/collections/return-gifts',
  },
  {
    image: 'banner2.jpg',
    alt: 'Birthday Gifts',
    buttonText: 'Shop Birthday',
    link: '/collections/birthday',
  },
  {
    image: 'banner3.jpg',
    alt: 'Return Gifts',
    buttonText: 'Browse Gifts',
    link: '/collections/return-gifts',
  }
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-[#fdf6ef] py-6">
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[680px] rounded-2xl overflow-hidden shadow-md">
          {/* Slide Images */}
          {banners.map((banner, index) => (
            <img
              key={index}
              src={banner.image}
              alt={banner.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'
              }`}
            />
          ))}

          {/* Overlay Content (Buttons, Arrows) */}
          <div className="absolute inset-0 z-10 flex flex-col justify-between">
            {/* CTA Button */}
            <a
              href={banners[currentIndex].link}
              className="mx-auto mt-auto mb-6 bg-[#fff0e1] text-[#9c3587] font-bold text-sm sm:text-base py-2 px-4 sm:px-6 rounded-full shadow-lg hover:bg-[#ffd8b1] transition"
            >
              {banners[currentIndex].buttonText}
            </a>

            {/* Arrows */}
            <div className="absolute inset-y-0 w-full flex justify-between items-center px-4">
              <button
                onClick={handlePrev}
                className="bg-white/80 hover:bg-white text-[#9c3587] p-2 rounded-full shadow-md transition z-20"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="bg-white/80 hover:bg-white text-[#9c3587] p-2 rounded-full shadow-md transition z-20"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center items-center mt-4 gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 transform ring-1 ring-[#9c3587] ${
                index === currentIndex
                  ? 'bg-[#9c3587] scale-125'
                  : 'bg-transparent hover:bg-[#9c3587]/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;

