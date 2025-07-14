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

  // Auto-slide every 4 seconds
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

  return (
    <div className="relative w-full px-4 py-4 bg-[#fdf6ef]">
      <div className="relative w-full h-[240px] md:h-[440px] rounded-3xl overflow-hidden shadow-md">
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner.image}
            alt={banner.alt}
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ease-in-out rounded-3xl ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}

        <a
          href={banners[currentIndex].link}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-[#fff0e1] text-[#9c3587] font-bold py-2 px-6 rounded-full shadow-lg hover:bg-[#ffd8b1] transition"
        >
          {banners[currentIndex].buttonText}
        </a>

        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#9c3587] p-2 rounded-full shadow-md"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#9c3587] p-2 rounded-full shadow-md"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Banner;
