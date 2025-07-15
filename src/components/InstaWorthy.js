// import React, { useRef } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const instaProducts = [
//   { id: 1, name: 'Birthday/Anniversary Decoration Pack – 71 pcs', image: '/products/insta-1.jpg', salePrice: 569, origPrice: 999 },
//   { id: 2, name: 'Welcome Home Baby Decoration Kit – 47 pcs', image: '/products/insta-2.jpg', salePrice: 582, origPrice: 999 },
//   { id: 3, name: 'Electric Balloon Pump Machine', image: '/products/insta-3.jpg', salePrice: 1199, origPrice: 1299 },
//   { id: 4, name: 'Cat Theme Birthday Decorations – 77 pcs', image: '/products/insta-4.jpg', salePrice: 449, origPrice: 999 },
//   { id: 5, name: 'Party Bundle – 50 pcs', image: '/products/insta-5.jpg', salePrice: 699, origPrice: 1299 },
// ];

// const InstaWorthy = () => {
//   const carouselRef = useRef(null);

//   const scroll = (offset) => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
//     }
//   };

//   return (
//     <section className="px-4 sm:px-6 md:px-12 py-10 bg-[#fdf6ef] overflow-hidden">
//       <h3 className="text-center text-2xl md:text-3xl font-bold text-[#9c3587] mb-4">
//         ✨ Insta‑Worthy Vibes ✨
//       </h3>
//       <p className="text-center text-[#9c3587] text-lg md:text-base mb-6">
//         Browse our top picks loved by 30K+ party planners, parents, and party animals.
//       </p>

//       <div className="relative">
//         {/* Left Button */}
//         <button
//           onClick={() => scroll(-350)}
//           className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow"
//         >
//           <ChevronLeft className="text-[#9c3587]" />
//         </button>

//         {/* Product List */}
//         <div
//           ref={carouselRef}
//           className="flex overflow-x-auto scroll-smooth gap-6 px-2 sm:px-4 md:px-8 lg:px-10 py-2 scrollbar-hide"
//         >
//           {instaProducts.map((p, idx) => (
//             <div
//               key={idx}
//               className="flex-shrink-0 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer w-[260px] sm:w-[280px] md:w-[300px] animate-fade-in-up"
//               style={{ animationDelay: `${idx * 0.15}s` }}
//             >
//               <div className="overflow-hidden rounded-t-lg h-[250px]">
//                 <img
//                   src={p.image}
//                   alt={p.name}
//                   loading="lazy"
//                   className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
//                 />
//               </div>
//               <div className="p-4">
//                 <h4 className="text-[#9c3587] font-semibold text-sm md:text-base mb-2 line-clamp-2 min-h-[40px]">
//                   {p.name}
//                 </h4>
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <span className="text-[#9c3587] font-bold text-base">₹{p.salePrice}</span>
//                     <span className="text-gray-400 line-through text-sm ml-2">₹{p.origPrice}</span>
//                   </div>
//                   <button className="bg-[#9c3587] hover:bg-[#ff3366] text-white py-1 px-3 rounded text-sm transition-all duration-300">
//                     Add
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Right Button */}
//         <button
//           onClick={() => scroll(350)}
//           className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow"
//         >
//           <ChevronRight className="text-[#9c3587]" />
//         </button>
//       </div>

//       {/* Custom styles */}
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



// import React, { useRef } from 'react';
// import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// const instaProducts = [
//   { id: 1, name: 'Birthday/Anniversary Decoration Pack – 71 pcs', image: '/products/insta-1.jpg', salePrice: 569, origPrice: 999 },
//   { id: 2, name: 'Welcome Home Baby Decoration Kit – 47 pcs', image: '/products/insta-2.jpg', salePrice: 582, origPrice: 999 },
//   { id: 3, name: 'Electric Balloon Pump Machine', image: '/products/insta-3.jpg', salePrice: 1199, origPrice: 1299 },
//   { id: 4, name: 'Cat Theme Birthday Decorations – 77 pcs', image: '/products/insta-4.jpg', salePrice: 449, origPrice: 999 },
//   { id: 5, name: 'Party Bundle – 50 pcs', image: '/products/insta-5.jpg', salePrice: 699, origPrice: 1299 },
// ];

// const InstaWorthy = () => {
//   const carouselRef = useRef(null);

//   const scroll = (offset) => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
//     }
//   };

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
//           onClick={() => scroll(-400)}
//           className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow"
//         >
//           <ChevronLeft className="text-[#9c3587]" />
//         </button>

//         {/* Product List */}
//         <div
//           ref={carouselRef}
//           className="flex overflow-x-auto scroll-smooth gap-6 px-2 sm:px-4 md:px-6 lg:px-10 py-2 scrollbar-hide"
//         >
//           {instaProducts.map((p, idx) => (
//             <div
//               key={idx}
//               className="flex-shrink-0 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer w-[230px] sm:w-[270px] md:w-[320px] lg:w-[340px] animate-fade-in-up"
//               style={{ animationDelay: `${idx * 0.15}s` }}
//             >
//               <div className="overflow-hidden rounded-t-lg h-[230px] md:h-[260px] lg:h-[280px]">
//                 <img
//                   src={p.image}
//                   alt={p.name}
//                   loading="lazy"
//                   className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
//                 />
//               </div>

//               <div className="bg-[#fdf6ef] p-4">
//                 <h4 className="text-[#9c3587] font-semibold text-sm md:text-base lg:text-lg mb-2 line-clamp-2 min-h-[48px]">
//                   {p.name}
//                 </h4>

//                 {/* Star Ratings */}
//                 <div className="flex items-center gap-1 mb-2">
//                   {Array(5).fill(0).map((_, i) => (
//                     <Star key={i} size={16} fill="#facc15" stroke="#facc15" />
//                   ))}
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <div>
//                     <span className="text-[#9c3587] font-bold text-base lg:text-lg">₹{p.salePrice}</span>
//                     <span className="text-gray-400 line-through text-sm ml-2">₹{p.origPrice}</span>
//                   </div>
//                   <button className="bg-[#9c3587] hover:bg-[#ff3366] text-white py-1.5 px-4 rounded text-sm transition-all duration-300 hover:scale-105">
//                     Add
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Right Button */}
//         <button
//           onClick={() => scroll(400)}
//           className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow"
//         >
//           <ChevronRight className="text-[#9c3587]" />
//         </button>
//       </div>

//       {/* Custom styles */}
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




import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const instaProducts = [
  { id: 1, name: 'Birthday/Anniversary Decoration Pack – 71 pcs', image: '/products/insta-1.jpg', salePrice: 569, origPrice: 999 },
  { id: 2, name: 'Welcome Home Baby Decoration Kit – 47 pcs', image: '/products/insta-2.jpg', salePrice: 582, origPrice: 999 },
  { id: 3, name: 'Electric Balloon Pump Machine', image: '/products/insta-3.jpg', salePrice: 1199, origPrice: 1299 },
  { id: 4, name: 'Cat Theme Birthday Decorations – 77 pcs', image: '/products/insta-4.jpg', salePrice: 449, origPrice: 999 },
  { id: 5, name: 'Party Bundle – 50 pcs', image: '/products/insta-5.jpg', salePrice: 699, origPrice: 1299 },
];

const InstaWorthy = () => {
  const carouselRef = useRef(null);

  const scroll = (offset) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="px-6 sm:px-10 md:px-16 py-10 bg-[#fdf6ef] overflow-hidden">
      <h3 className="text-center text-2xl md:text-3xl font-bold text-[#9c3587] mb-4">
        ✨ Insta‑Worthy Vibes ✨
      </h3>
      <p className="text-center text-[#9c3587] text-base md:text-lg mb-6">
        Browse our top picks loved by 30K+ party planners, parents, and party animals.
      </p>

      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll(-360)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
        >
          <ChevronLeft className="text-[#9c3587]" />
        </button>

        {/* Scrollable Card List */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto scroll-smooth gap-6 px-2 sm:px-4 md:px-6 lg:px-10 py-2 scrollbar-hide"
        >
          {instaProducts.map((p, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer w-[260px] md:w-[300px] lg:w-[325px] animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-t-lg h-[240px] lg:h-[260px]">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover hover:animate-zoom"
                />
              </div>

              {/* Text Container */}
              <div className="bg-[#fdf6ef] p-4">
                <h4 className="text-[#9c3587] font-semibold text-sm md:text-base lg:text-lg mb-2 line-clamp-2 min-h-[48px]">
                  {p.name}
                </h4>

                {/* Star Ratings */}
                <div className="flex items-center gap-1 mb-2">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} size={16} fill="#facc15" stroke="#facc15" />
                  ))}
                </div>

                {/* Pricing & Add Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[#9c3587] font-bold text-base lg:text-lg">₹{p.salePrice}</span>
                    <span className="text-gray-400 line-through text-sm ml-2">₹{p.origPrice}</span>
                  </div>
                  <button className="bg-[#9c3587] hover:bg-[#ff3366] text-white py-1.5 px-4 rounded text-sm transition-all duration-300 hover:scale-105">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll(360)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
        >
          <ChevronRight className="text-[#9c3587]" />
        </button>
      </div>

      {/* Styles */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease forwards;
        }

        @keyframes zoomImage {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
        .hover\\:animate-zoom:hover {
          animation: zoomImage 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default InstaWorthy;
