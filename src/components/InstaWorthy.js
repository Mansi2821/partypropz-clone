// import React, { useRef, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// const instaProducts = [
//   { id: 1, name: 'Birthday/Anniversary Decoration Pack – 71 pcs', image: '/products/insta-1.jpg', salePrice: 569, origPrice: 999 },
//   { id: 2, name: 'Welcome Home Baby Decoration Kit – 47 pcs', image: '/products/insta-2.jpg', salePrice: 582, origPrice: 999 },
//   { id: 3, name: 'Electric Balloon Pump Machine', image: '/products/insta-3.jpg', salePrice: 1199, origPrice: 1299 },
//   { id: 4, name: 'Cat Theme Birthday Decorations – 77 pcs', image: '/products/insta-4.jpg', salePrice: 449, origPrice: 999 },
//   { id: 5, name: 'Party Bundle – 50 pcs', image: '/products/insta-5.jpg', salePrice: 699, origPrice: 1299 },
// ];

// // Tripled list for illusion of infinite scroll
// const loopedProducts = [...instaProducts, ...instaProducts, ...instaProducts];

// const InstaWorthy = () => {
//   const carouselRef = useRef(null);

//   // Scroll logic
//   const scroll = (offset) => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollBy({
//         left: offset,
//         behavior: 'smooth',
//       });
//     }
//   };

//   // Scroll reset logic for infinite effect
//   useEffect(() => {
//     const carousel = carouselRef.current;
//     if (!carousel) return;

//     const cardWidth = 340; // width of one card
//     const totalCards = loopedProducts.length;
//     const scrollToMiddle = cardWidth * (totalCards / 3);

//     // Start in middle clone
//     carousel.scrollLeft = scrollToMiddle;

//     const handleScroll = () => {
//       if (carousel.scrollLeft <= 0) {
//         // Scrolled to start, reset to middle
//         carousel.scrollLeft = scrollToMiddle;
//       } else if (
//         carousel.scrollLeft + carousel.offsetWidth >=
//         carousel.scrollWidth - 1
//       ) {
//         // Scrolled to end, reset to middle
//         carousel.scrollLeft = scrollToMiddle;
//       }
//     };

//     carousel.addEventListener('scroll', handleScroll);
//     return () => carousel.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <section className="px-6 sm:px-10 md:px-16 py-10 bg-[#fdf6ef] overflow-hidden">
//       <h3 className="text-center text-2xl md:text-3xl font-bold text-[#9c3587] mb-4">
//         ✨ Insta‑Worthy Vibes ✨
//       </h3>
//       <p className="text-center text-[#9c3587] text-base md:text-lg mb-6">
//         Browse our top picks loved by 30K+ party planners, parents, and party animals.
//       </p>

//       <div className="relative">
//         {/* Left Button */}
//         <button
//           onClick={() => scroll(-360)}
//           className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
//         >
//           <ChevronLeft className="text-[#9c3587]" />
//         </button>

//         {/* Scrollable Card List */}
//         <div
//           ref={carouselRef}
//           className="flex overflow-x-auto scroll-smooth gap-6 px-2 sm:px-4 md:px-6 lg:px-10 py-2 scrollbar-hide"
//         >
//           {loopedProducts.map((p, idx) => (
//             <div
//               key={`${p.id}-${idx}`}
//               className="flex-shrink-0 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer w-[280px] md:w-[340px] lg:w-[380px] animate-fade-in-up"
//               style={{ animationDelay: `${(idx % 5) * 0.1}s` }}
//             >
//               {/* Image */}
//               <div className="overflow-hidden rounded-t-xl h-[280px] lg:h-[300px]">
//                 <img
//                   src={p.image}
//                   alt={p.name}
//                   loading="lazy"
//                   className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
//                 />
//               </div>

//               {/* Text Container */}
//               <div className="bg-[#fdf6ef] p-4 text-center">
//                 <h4 className="text-[#9c3587] font-semibold text-base md:text-lg lg:text-xl mb-2 hover:underline underline-offset-4 decoration-[#9c3587] min-h-[52px]">
//                   {p.name}
//                 </h4>

//                 {/* Star Ratings */}
//                 <div className="flex justify-center items-center gap-1 mb-2">
//                   {Array(5).fill(0).map((_, i) => (
//                     <Star key={i} size={16} fill="#facc15" stroke="#facc15" />
//                   ))}
//                 </div>

//                 {/* Pricing & Add Button */}
//                 <div className="flex flex-col items-center gap-2">
//                   <div>
//                     <span className="text-[#9c3587] font-bold text-base lg:text-lg">₹{p.salePrice}</span>
//                     <span className="text-gray-400 line-through text-sm ml-2">₹{p.origPrice}</span>
//                   </div>
//                   <button className="bg-[#9c3587] hover:bg-[#9c3587]/50 text-white py-2 px-8 rounded-md text-sm font-medium transition-all duration-300">
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Right Button */}
//         <button
//           onClick={() => scroll(360)}
//           className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
//         >
//           <ChevronRight className="text-[#9c3587]" />
//         </button>
//       </div>

//       {/* Styles */}
//       <style>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in-up {
//           animation: fadeInUp 0.6s ease forwards;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default InstaWorthy;









import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const instaProducts = [
  { id: 1, name: 'Birthday/Anniversary Decoration Pack – 71 pcs', image: '/products/insta-1.jpg', salePrice: 569, origPrice: 999 },
  { id: 2, name: 'Welcome Home Baby Decoration Kit – 47 pcs', image: '/products/insta-2.jpg', salePrice: 582, origPrice: 999 },
  { id: 3, name: 'Electric Balloon Pump Machine', image: '/products/insta-3.jpg', salePrice: 1199, origPrice: 1299 },
  { id: 4, name: 'Cat Theme Birthday Decorations – 77 pcs', image: '/products/insta-4.jpg', salePrice: 449, origPrice: 999 },
  { id: 5, name: 'Party Bundle – 50 pcs', image: '/products/insta-5.jpg', salePrice: 699, origPrice: 1299 },
];

// Tripled list for infinite illusion
const loopedProducts = [...instaProducts, ...instaProducts, ...instaProducts];

const InstaWorthy = () => {
  const carouselRef = useRef(null);

  const scroll = (offset) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cardWidth = 320;
    const totalCards = loopedProducts.length;
    const scrollToMiddle = cardWidth * (totalCards / 3);
    carousel.scrollLeft = scrollToMiddle;

    const handleScroll = () => {
      if (carousel.scrollLeft <= 0 || carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth - 1) {
        carousel.scrollLeft = scrollToMiddle;
      }
    };

    carousel.addEventListener('scroll', handleScroll);
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="px-4 sm:px-10 md:px-16 py-10 bg-[#fdf6ef] overflow-hidden">
      <h3 className="text-center text-2xl md:text-3xl font-bold text-[#9c3587] mb-4">
        ✨ Insta‑Worthy Vibes ✨
      </h3>
      <p className="text-center text-[#9c3587] text-base md:text-lg mb-6">
        Browse our top picks loved by 30K+ party planners, parents, and party animals.
      </p>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll(-340)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
        >
          <ChevronLeft className="text-[#9c3587]" />
        </button>

        {/* Card Carousel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto scroll-smooth gap-5 px-4 py-2 scrollbar-hide"
        >
          {loopedProducts.map((p, idx) => (
            <div
              key={`${p.id}-${idx}`}
              className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] h-[440px] bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${(idx % 5) * 0.1}s` }}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-t-xl h-[220px]">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="bg-[#fdf6ef] p-4 flex flex-col justify-between h-[220px] text-center">
                <h4 className="text-[#9c3587] font-semibold text-base md:text-lg mb-2 hover:underline underline-offset-4 min-h-[52px]">
                  {p.name}
                </h4>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-2">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} size={16} fill="#facc15" stroke="#facc15" />
                  ))}
                </div>

                {/* Price + Button */}
                <div className="flex flex-col items-center gap-2 mt-auto">
                  <div>
                    <span className="text-[#9c3587] font-bold text-lg">₹{p.salePrice}</span>
                    <span className="text-gray-400 line-through text-sm ml-2">₹{p.origPrice}</span>
                  </div>
                  <button className="bg-[#9c3587] hover:bg-[#9c3587]/50 text-white py-2 px-6 rounded-md text-sm font-medium transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll(340)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
        >
          <ChevronRight className="text-[#9c3587]" />
        </button>
      </div>

      {/* Hide scrollbar & animations */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default InstaWorthy;






