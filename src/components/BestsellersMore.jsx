// import React, { useState } from 'react';

// const products = [
//   { id: 1, name: 'Electric Balloon Pump', image: '/products/pump.jpg', hoverImage: '/products/pump-hover.jpg', price: 1199 },
//   { id: 2, name: 'Unicorn Theme Balloon Set', image: '/products/unicorn.jpg', hoverImage: '/products/unicorn-hover.jpg', price: 799 },
//   { id: 3, name: 'Glow Stick Party Pack', image: '/products/glow.jpg', hoverImage: '/products/glow-hover.jpg', price: 499 },
//   { id: 4, name: 'Mermaid Party Kit', image: '/products/mermaid.jpg', hoverImage: '/products/mermaid-hover.jpg', price: 899 },
//   { id: 5, name: 'Pastel Balloon Garland', image: '/products/pastel-garland.jpg', hoverImage: '/products/pastel-garland-hover.jpg', price: 1299 },
//   { id: 6, name: 'Dinosaur Theme Banner Set', image: '/products/dinosaur.jpg', hoverImage: '/products/dinosaur-hover.jpg', price: 699 },
//   { id: 7, name: 'Space Party Balloons', image: '/products/space.jpg', hoverImage: '/products/space-hover.jpg', price: 849 },
//   { id: 8, name: 'Floral Balloon Bouquet', image: '/products/floral.jpg', hoverImage: '/products/floral-hover.jpg', price: 999 },
//   { id: 9, name: 'Rainbow Balloon Arch Kit', image: '/products/rainbow.jpg', hoverImage: '/products/rainbow-hover.jpg', price: 1399 },
//   { id: 10, name: 'Gold & Black Decor Kit', image: '/products/gold-black.jpg', hoverImage: '/products/gold-black-hover.jpg', price: 1099 },
// ];

// const categories = ['Best Sellers', 'New Arrivals', 'Top Rated'];

// const BestsellersMore = () => {
//   const [activeCat, setActiveCat] = useState('Best Sellers');

//   return (
//     <section className="px-4 md:px-12 py-10 bg-[#fff7f4]">
//       <div className="text-center mb-6">
//         <h3 className="text-2xl md:text-3xl font-bold text-[#9c3587] mb-1">
//           ✨ Bestsellers & More ✨
//         </h3>
//         <p className="text-base md:text-lg text-[#9c3587]">Our Most‑Loved, Just for You!</p>
//       </div>

//       {/* Category Buttons */}
//       <div className="flex justify-center gap-6 mb-8 flex-wrap">
//         {categories.map(cat => (
//           <button
//             key={cat}
//             onClick={() => setActiveCat(cat)}
//             className={`text-sm md:text-base font-medium px-5 py-2 rounded-full transition ${
//               activeCat === cat
//                 ? 'bg-[#9c3587] text-white'
//                 : 'bg-white text-[#9c3587] border border-[#9c3587]'
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((p) => (
//           <div key={p.id} className="group bg-[#fdf6ef] rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer">
//             {/* Image Container */}
//             <div className="relative h-64 overflow-hidden rounded-t-lg">
//               <img
//                 src={p.image}
//                 alt={p.name}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//               <img
//                 src={p.hoverImage}
//                 alt={`${p.name} hover`}
//                 className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//               />
//             </div>

//             {/* Info */}
//             <div className="p-4 flex flex-col">
//               <h4 className="text-[#9c3587] font-semibold text-base md:text-lg mb-2 line-clamp-2 group-hover:underline transition">
//                 {p.name}
//               </h4>
//               <div className="flex items-center justify-between mt-auto">
//                 <span className="text-[#9c3587] font-bold text-lg">₹{p.price}</span>
//                 <button className="bg-[#9c3587] hover:bg-[#ff3366] text-white font-semibold py-2 px-4 rounded-full transition-transform duration-300 hover:scale-105 text-sm">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="text-right mt-6">
//         <a href="/collections/all" className="text-[#9c3587] font-semibold hover:underline">
//           View all →
//         </a>
//       </div>
//     </section>
//   );
// };

// export default BestsellersMore;









import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Electric Balloon Pump', image: '/products/pump.jpg', hoverImage: '/products/pump-hover.jpg', price: 1199 },
  { id: 2, name: 'Unicorn Theme Balloon Set', image: '/products/unicorn.jpg', hoverImage: '/products/unicorn-hover.jpg', price: 799 },
  { id: 3, name: 'Glow Stick Party Pack', image: '/products/glow.jpg', hoverImage: '/products/glow-hover.jpg', price: 499 },
  { id: 4, name: 'Mermaid Party Kit', image: '/products/mermaid.jpg', hoverImage: '/products/mermaid-hover.jpg', price: 899 },
  { id: 5, name: 'Pastel Balloon Garland', image: '/products/pastel-garland.jpg', hoverImage: '/products/pastel-garland-hover.jpg', price: 1299 },
  { id: 6, name: 'Dinosaur Theme Banner Set', image: '/products/dinosaur.jpg', hoverImage: '/products/dinosaur-hover.jpg', price: 699 },
  { id: 7, name: 'Space Party Balloons', image: '/products/space.jpg', hoverImage: '/products/space-hover.jpg', price: 849 },
  { id: 8, name: 'Floral Balloon Bouquet', image: '/products/floral.jpg', hoverImage: '/products/floral-hover.jpg', price: 999 },
  { id: 9, name: 'Rainbow Balloon Arch Kit', image: '/products/rainbow.jpg', hoverImage: '/products/rainbow-hover.jpg', price: 1399 },
  { id: 10, name: 'Gold & Black Decor Kit', image: '/products/gold-black.jpg', hoverImage: '/products/gold-black-hover.jpg', price: 1099 },
];

const categories = ['Best Sellers', 'New Arrivals', 'Top Rated'];

const BestsellersMore = () => {
  const [activeCat, setActiveCat] = useState('Best Sellers');

  return (
    <section className="px-4 md:px-12 py-10 bg-[#fff7f4]">
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-[#9c3587] mb-1">
          ✨ Bestsellers & More ✨
        </h3>
        <p className="text-base md:text-lg text-[#9c3587]">Our Most‑Loved, Just for You!</p>
      </div>

      {/* Category Buttons */}
      <div className="flex justify-center gap-6 mb-8 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`text-sm md:text-base font-medium px-5 py-2 rounded-full transition ${
              activeCat === cat
                ? 'bg-[#9c3587] text-white'
                : 'bg-white text-[#9c3587] border border-[#9c3587]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="group bg-[#fdf6ef] rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden rounded-t-lg">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <img
                src={p.hoverImage}
                alt={`${p.name} hover`}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>

            {/* Info */}
            <div className="p-4 flex flex-col">
              <h4 className="text-[#9c3587] font-semibold text-base md:text-lg mb-2 line-clamp-2 group-hover:underline transition">
                {p.name}
              </h4>
              <span className="text-[#9c3587] font-bold text-lg mb-1">₹{p.price}</span>
              <button className="bg-[#9c3587] hover:opacity-70 text-white font-semibold py-2 px-4 rounded-full transition duration-300 text-sm">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-right mt-6">
        <a href="/collections/all" className="text-[#9c3587] font-semibold hover:underline">
          View all →
        </a>
      </div>
    </section>
  );
};

export default BestsellersMore;








