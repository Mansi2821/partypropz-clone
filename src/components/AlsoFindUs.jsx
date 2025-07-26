import React, { useEffect } from "react";

const logos = [
  { src: "/finduson/Amazon_logo.avif", alt: "Amazon" },
  { src: "/finduson/Blinkit_logo.avif", alt: "Blinkit" },
  { src: "/finduson/Flipkart_logo.avif", alt: "Flipkart" },
  { src: "/finduson/Zepto_logo.avif", alt: "Zepto" },
  { src: "/finduson/swiggy_logo.avif", alt: "Swiggy" },
  { src: "/finduson/firstcry_logo.avif", alt: "FirstCry" },
];

const AlsoFindUs = () => {
  useEffect(() => {
    const styles = document.createElement("style");
    styles.innerHTML = `
      .also-find-us-section {
        background-color: #fff7f2;
        padding: 3rem 1rem;
        text-align: center;
        overflow-x: auto;
      }

      .title {
        font-size: 2.2rem;
        font-weight: 600;
        color: #a1237b;
        margin-bottom: 2.5rem;
      }

      .logos-scroll {
        display: flex;
        justify-content: center;
        gap: 2.5rem;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        padding: 1rem 0;
      }
      /* Hide scrollbar for all browsers */
      .logos-scroll {
       -ms-overflow-style: none;  /* IE and Edge */
       scrollbar-width: none;     /* Firefox */
      }

       .logos-scroll::-webkit-scrollbar {
       display: none;             /* Chrome, Safari, Opera */
      }

      .logo-wrapper {
        width: 140px;
        height: 140px;
        flex: 0 0 auto;
        scroll-snap-align: center;
        filter: grayscale(100%) brightness(70%);
        transition: filter 0.5s ease, transform 0.3s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: logoHighlight 6s linear infinite;
      }

      .logo-img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }

      @keyframes logoHighlight {
        0%, 100% {
          filter: grayscale(100%) brightness(70%);
          transform: scale(1);
        }
        16.66% {
          filter: grayscale(0%) brightness(120%);
          transform: scale(1.1);
        }
        33.33% {
          filter: grayscale(100%) brightness(70%);
          transform: scale(1);
        }
      }

      .animate-delay-0 { animation-delay: 0s; }
      .animate-delay-1 { animation-delay: 1s; }
      .animate-delay-2 { animation-delay: 2s; }
      .animate-delay-3 { animation-delay: 3s; }
      .animate-delay-4 { animation-delay: 4s; }
      .animate-delay-5 { animation-delay: 5s; }

      @media (max-width: 768px) {
        .logo-wrapper {
          width: 100px;
          height: 100px;
        }
        .title {
          font-size: 1.6rem;
        }
      }
    `;
    document.head.appendChild(styles);
    return () => document.head.removeChild(styles);
  }, []);

  return (
    <section className="also-find-us-section">
      <div className="logo-container">
        <h2 className="title">Also find us on</h2>
        <div className="logos-scroll">
          {logos.map((logo, idx) => (
            <div className={`logo-wrapper animate-delay-${idx}`} key={idx}>
              <img src={logo.src} alt={logo.alt} className="logo-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlsoFindUs;
