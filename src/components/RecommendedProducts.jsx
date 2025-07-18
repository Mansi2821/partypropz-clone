import React, { useState } from 'react';

const products = [
  {
    id: 1,
    image: 'https://i.imgur.com/ZF6s192.png',
    title: 'Astronaut Space Theme Foil Mylar Balloon Set For…',
    price: '₹ 304',
    originalPrice: '₹ 997',
    position: { top: '70%', left: '16%' },
  },
  {
    id: 2,
    image: 'https://i.imgur.com/oL9ZcUf.png',
    title: 'Example Product 2',
    price: '₹ 450',
    originalPrice: '₹ 899',
    position: { top: '10%', left: '20%' },
  },
  {
    id: 3,
    image: 'https://i.imgur.com/WqEF3Y9.png',
    title: 'Example Product 3',
    price: '₹ 350',
    originalPrice: '₹ 750',
    position: { top: '22%', left: '80%' },
  },
  {
    id: 4,
    image: 'https://i.imgur.com/y2I9RkN.png',
    title: 'Example Product 4',
    price: '₹ 299',
    originalPrice: '₹ 600',
    position: { top: '60%', left: '70%' },
  },
];

const RecommendedProducts = () => {
  const [selected, setSelected] = useState(null);

  const toggleCard = (id) => {
    setSelected((prev) => (prev === id ? null : id));
  };

  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat min-h-[650px] px-2 md:px-6 py-10"
      style={{
        backgroundImage: 'url("bg-space.jpg")',
      }}
    >
      {/* Numbered Buttons */}
      {products.map((product) => (
        <button
          key={product.id}
          onClick={() => toggleCard(product.id)}
          className={`absolute z-20 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold text-lg bg-[#ef4c6c] hover:scale-110 transition-all duration-200 ${
            selected === product.id ? 'ring-4 ring-white' : ''
          }`}
          style={{ top: product.position.top, left: product.position.left }}
        >
          {product.id}
        </button>
      ))}

      {/* Product Card - Only shows when selected */}
      {selected && (
        <div
          key={selected} // triggers re-animation on change
          className="absolute z-30 bg-[#fff6eb] rounded-xl shadow-lg p-3 md:p-4 flex items-center gap-3 md:gap-4 animate-fade-in transition-all duration-300 w-[260px] md:w-[320px]"
          style={{
            top: `calc(${products[selected - 1].position.top} + 50px)`,
            left: products[selected - 1].position.left,
            transform: 'translateX(-50%)',
          }}
        >
          <img
            src={products[selected - 1].image}
            alt={products[selected - 1].title}
            className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-md"
          />
          <div className="flex flex-col">
            <h3 className="text-[#ad3c9f] text-sm md:text-base font-semibold hover:underline cursor-pointer transition-all duration-200">
              {products[selected - 1].title}
            </h3>
            <div className="text-[#8c1976] font-bold text-sm md:text-base">
              {products[selected - 1].price}
            </div>
            <div className="text-gray-400 line-through text-xs md:text-sm">
              {products[selected - 1].originalPrice}
            </div>
          </div>
          <button className="text-white bg-[#d0479c] p-2 rounded-full text-lg hover:bg-pink-700">
            🛒
          </button>
        </div>
      )}
    </div>
  );
};

export default RecommendedProducts;

