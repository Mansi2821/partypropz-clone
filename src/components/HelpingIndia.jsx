import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Tandon",
    location: "Delhi",
    rating: 5,
    text: "This is a very good product. This is a real value of money. The all colours are brilliant. And the the last i will say that you can purchase this one time. Thanks",
  },
  {
    name: "Pooja",
    location: "GJ",
    rating: 4,
    text: "We enjoyed using this for my infant at his 6 months birthday. The good were as per the description and good qty. Value for money spend.",
  },
  {
    name: "Bachina",
    location: "Andhra Pradesh",
    rating: 5,
    text: "Party Propz decoration items are so good for parties. Foil balloons are too good as attraction. Thank u so much party propz. This is the second time buying your products.",
  },
  {
    name: "Manjula",
    location: "Karnataka",
    rating: 4,
    text: "Works like magic, very happy with the product. Loud noise though, may be could work on it in the next version.",
  },
  {
    name: "Sneha",
    location: "Bangalore",
    rating: 5,
    text: "Loved the whole experience with Party Propz! Excellent quality and super fast delivery. Definitely recommend!",
  },
  {
    name: "Amit",
    location: "Mumbai",
    rating: 5,
    text: "Perfect for birthday parties. Colors are vibrant and materials are sturdy. Great value for the price!",
  },
  {
    name: "Riya",
    location: "Chandigarh",
    rating: 5,
    text: "Product quality exceeded my expectations. It made our celebration memorable. Thank you!",
  },
  {
    name: "Deepak",
    location: "Pune",
    rating: 4,
    text: "Affordable and festive! Got so many compliments from guests. Will order again.",
  },
];

const HelpingIndiaCelebrate = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let scrollTop = 0;

    const step = () => {
      if (!container) return;
      scrollTop += 0.5;
      if (scrollTop >= container.scrollHeight / 2) scrollTop = 0;
      container.scrollTo({ top: scrollTop });
      requestAnimationFrame(step);
    };

    const frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="bg-[#fdf6ef] py-12 px-4 sm:px-6 md:px-12 lg:px-20">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#9c3587] mb-2">
        ✨ Helping India Celebrate Better Since 2016 ✨
      </h2>
      <p className="text-center text-[#9c3587] mb-8 text-base md:text-lg">
        Trusted by 3,00,000+ happy customers. Delivered to over 900+ cities 🎉
      </p>

      <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
        {/* Left Image */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src="/images/helping-india.png"
            alt="Thank you for all the love"
            className="w-full max-w-md md:max-w-[400px] lg:max-w-[500px] object-contain"
          />
        </div>

        {/* Right Testimonials */}
        <div className="lg:w-1/2 w-full">
          <div
            ref={scrollRef}
            className="h-[420px] overflow-hidden space-y-6 px-1 bg-[#fdf6ef]"
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-2xl shadow-md transition-transform group border border-[#f0d9eb] w-full"
              >
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      fill={idx < t.rating ? '#facc15' : 'none'}
                      color={idx < t.rating ? '#facc15' : '#e5e7eb'}
                      className="w-4 h-4"
                    />
                  ))}
                </div>
                <p className="text-[#9c3587] italic text-sm mb-3 leading-snug group-hover:opacity-85">
                  {t.text}
                </p>
                <p className="font-semibold text-[#9c3587] text-sm">
                  {t.name}, {t.location} <span className="text-green-600">✔️</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpingIndiaCelebrate;
