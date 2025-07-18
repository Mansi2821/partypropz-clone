import React, { useRef } from "react";

const insights = [
  {
    title: "Hosting 101: Tips & Ideas for the Perfect Party",
    desc: "Hosting a party can be both exciting and overwhelming. Whether it’s a birthday, holiday gathering,...",
    img: "/images/hosting101.jpg",
  },
  {
    title: "Trending Decor Themes",
    desc: "1. Bow & Croquette Elegance 🎀🏑 Inspired by classic preppy aesthetics, this theme combines chic...",
    img: "/images/trending_decor.jpg",
  },
  {
    title: "The Ultimate Party Planning Checklist",
    desc: "Planning a party can be both exciting and overwhelming. Whether you're hosting a birthday bash.....",
    img: "/images/checklist.jpg",
  },
  {
    title: "DIY Party Hacks",
    desc: "Planning a party doesn’t have to be stressful or expensive! With a little creativity and...",
    img: "/images/diy_hacks.jpg",
  },
  {
    title: "Fun Party Game Ideas",
    desc: "No party is complete without some fun games to keep guests entertained! Whether you're hosting...",
    img: "/images/game_ideas.jpg",
  },
];

const InspirationInsights = () => {
  const carousel = useRef(null);

  const scroll = (direction) => {
    if (carousel.current) {
      const cardWidth = carousel.current.firstChild.offsetWidth + 16;
      const scrollAmount = direction === "left" ? -cardWidth * 2 : cardWidth * 2;
      carousel.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-[#fff7f2]">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-semibold text-[#9c3587] mb-2">Inspiration and Insights</h2>
        <p className="text-[#9c3587] mb-6">Discover party tricks & tips</p>
        <button className="mb-12 px-8 py-2 border-2 border-[#9c3587] text-[#9c3587] font-medium rounded hover:bg-[#9c3587] hover:text-white transition">
          View All
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Cards Carousel */}
        <div ref={carousel} className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide pb-2">
          {insights.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[300px] w-[300px] bg-[#fdf6ef] rounded-lg overflow-hidden flex-shrink-0 shadow-md transition-transform"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-48 w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#9c3587] hover:underline cursor-pointer mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#9c3587]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Centered Arrow Navigation */}
        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 text-[#9c3587] rounded-full shadow hover:bg-[#9c3587] hover:text-white transition text-2xl font-bold flex items-center justify-center"
          >
            &lt;
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 text-[#9c3587] rounded-full shadow hover:bg-[#9c3587] hover:text-white transition text-2xl font-bold flex items-center justify-center"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default InspirationInsights;
