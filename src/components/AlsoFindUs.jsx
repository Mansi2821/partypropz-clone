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
      }

      .title {
        font-size: 2rem;
        font-weight: 600;
        color: #a1237b;
        margin-bottom: 2rem;
      }

      .logos-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 2.5rem;
        justify-content: center;
      }

      .logo-wrapper {
        width: 120px;
        height: 120px;
        filter: grayscale(100%) brightness(70%);
        transition: filter 0.5s ease, transform 0.3s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: highlightLogo 20s ease-in-out infinite;
      }

      .logo-img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }

      @keyframes highlightLogo {
        0% {
          filter: grayscale(100%) brightness(70%);
          transform: scale(1);
        }
        12.5% {
          filter: grayscale(0%) brightness(120%);
          transform: scale(1.1);
        }
        25% {
          filter: grayscale(100%) brightness(70%);
          transform: scale(1);
        }
        100% {
          filter: grayscale(100%) brightness(70%);
          transform: scale(1);
        }
      }

      .animate-delay-0 { animation-delay: 0s; }
      .animate-delay-1 { animation-delay: 20s; }
      .animate-delay-2 { animation-delay: 30s; }
      .animate-delay-3 { animation-delay: 40s; }
      .animate-delay-4 { animation-delay: 50s; }
      .animate-delay-5 { animation-delay: 60s; }

      @media (max-width: 768px) {
        .logo-wrapper {
          width: 90px;
          height: 90px;
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
        <div className="logos-grid">
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












