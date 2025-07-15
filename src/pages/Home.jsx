import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CategorySlider from "../components/CategorySlider";
import InstaWorthy from "../components/InstaWorthy";


const images = [
  {
    url: "https://www.partypropz.com/frontend/images/slider/1.jpg",
    title: "A Little Thank You Goes a Long Way!",
    subtitle: "Thoughtful Return Gifts for All",
    button: "Explore Now",
    link: "/collections/return-gifts",
  },
  {
    url: "https://www.partypropz.com/frontend/images/slider/2.jpg",
    title: "Celebrate Every Moment",
    subtitle: "Party Decorations for All Occasions",
    button: "Shop Now",
    link: "/collections/decor",
  },
  {
    url: "https://www.partypropz.com/frontend/images/slider/3.jpg",
    title: "Personalized Gifts",
    subtitle: "Make Your Gift Extra Special",
    button: "Customize Now",
    link: "/collections/custom-gifts",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#fdf6ef] text-[#9c3587]">
      {/* Hero Banner Slider */}
      <div className="relative w-full h-[300px] md:h-[500px] px-2 py-4">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            } flex justify-center items-center`}
          >
            <div
              className="w-full h-full bg-pink-300 rounded-3xl flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-20 py-10 gap-8 overflow-hidden"
              style={{
                backgroundImage: `url(${img.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="bg-pink-300/70 p-4 rounded-3xl max-w-lg">
                <h2 className="text-white text-2xl md:text-4xl font-bold mb-2 leading-snug">
                  {img.title}
                </h2>
                <p className="text-white text-sm md:text-base mb-4">{img.subtitle}</p>
                <a
                  href={img.link}
                  className="inline-block bg-[#fdf6ef] text-[#9c3587] font-semibold px-6 py-2 rounded-full hover:bg-white transition"
                >
                  {img.button}
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-4 bg-[#fdf6ef]/80 hover:bg-white p-2 rounded-full"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-4 bg-[#fdf6ef]/80 hover:bg-white p-2 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Category Card Slider (like original site) */}
      <CategorySlider /> {/* ⭐ This is the new section */}
      {/* Insta-Worthy Section */}
      <InstaWorthy />

      {/* Shop By Category */}
      <section className="px-4 py-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Shop By Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white shadow p-4 text-center rounded">Birthday</div>
          <div className="bg-white shadow p-4 text-center rounded">Festive</div>
          <div className="bg-white shadow p-4 text-center rounded">Bachelorette</div>
          <div className="bg-white shadow p-4 text-center rounded">Custom</div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-4 py-8 bg-white">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className="bg-[#fdf6ef] shadow-md rounded p-4 text-center">
              <div className="h-32 bg-gray-200 mb-2 rounded" />
              <p className="text-sm font-medium">Product {id}</p>
              <p className="text-xs text-gray-600">₹ 299</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#9c3587] text-white px-4 py-8 text-center">
        <h2 className="text-xl font-bold mb-2">Stay Updated!</h2>
        <p className="text-sm mb-4">Subscribe to our newsletter to get exciting deals.</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded text-black w-64 max-w-full"
        />
      </section>
    </main>
  );
};

export default Home;

