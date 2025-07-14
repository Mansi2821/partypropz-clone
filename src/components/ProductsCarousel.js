import React from 'react';

const sampleProducts = [
  {
    title: 'Balloon Set',
    price: '₹299',
    img: 'https://www.partypropz.com/storage/products/31359/product_31359_image_0.webp',
  },
  {
    title: 'Birthday Banner',
    price: '₹199',
    img: 'https://www.partypropz.com/storage/products/31402/product_31402_image_0.webp',
  },
  {
    title: 'Cake Topper',
    price: '₹99',
    img: 'https://www.partypropz.com/storage/products/30740/product_30740_image_0.webp',
  },
];

const ProductsCarousel = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-8 px-4">
      <h2 className="text-xl font-bold mb-4">Trending Products</h2>
      <div className="flex overflow-x-auto gap-4">
        {sampleProducts.map((product, idx) => (
          <div key={idx} className="min-w-[200px] border rounded shadow p-2">
            <img
              src={product.img}
              alt={product.title}
              className="h-40 w-full object-cover"
            />
            <h3 className="text-sm mt-2">{product.title}</h3>
            <p className="text-brand font-semibold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCarousel;
