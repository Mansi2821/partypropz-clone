import React from "react";
import {
  Smile,
  BarChart2,
  Award,
  ShoppingBag,
  Mail,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#fdf6ef] text-[#a3206f] text-sm font-[Poppins] mt-8">
      <div className="flex flex-wrap justify-center items-center gap-14 px-4 sm:px-8 py-8 text-center">

        {[
          { Icon: Smile, label: "50+Lakh Customers" },
          { Icon: BarChart2, label: "Market Leader" },
          { Icon: Award, label: "Premium Quality" },
          { Icon: ShoppingBag, label: "Wide Variety" },
        ].map((item, i) => (
          <div
            key={i}
            className="transition-transform duration-300 hover:scale-110"
          >
            <item.Icon className="mx-auto mb-2 text-[#a3206f]" size={28} />
            <p className="font-semibold text-sm md:text-base">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Brnd.me Repeating Yellow Strip */}
      <div className="bg-[#ffcc29] text-black font-semibold text-center text-xs py-2 tracking-widest uppercase overflow-hidden">
        <div className="animate-marquee whitespace-nowrap inline-flex items-center gap-6">
          {Array(20).fill(0).map((_, idx) => (
            <span key={idx} className="inline-flex items-center gap-2 font-bold italic mx-3">
              by brnd.me
              <img src="/logo2.png" alt="brnd logo" className="h-6 w-auto" />
            </span>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 sm:px-6 py-8 border-t border-gray-200 text-[#a3206f]">
        {/* Top Categories */}
        <div>
          <h3 className="font-bold uppercase mb-4 text-base">Top Categories</h3>
          <ul className="space-y-2 text-lg">
            <li>Best Sellers</li>
            <li>New Launches</li>
            <li>Return Gifts</li>
            <li>Back to school</li>
            <li>Epic Theme</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="font-bold uppercase mb-4 text-base">Information</h3>
          <ul className="space-y-1 text-lg">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
            <li>Terms of Service</li>
            <li>Track your order</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-2">
          <h3 className="font-bold uppercase mb-3 text-base">Get In Touch</h3>
          <div className="space-y-2 text-lg">
            <p className="flex items-center gap-2">
              <Mail size={16} /> support@partypropz.in
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> +91 9686611821
            </p>
            <p>
              <strong>Bracheium Brand Technologies Pvt. Ltd.,</strong>
              <br />
              Corporate office: Vaishnavi Properties, #30/1, Silicon Terraces,<br />
              2nd & 3rd Floor, Adugodi, Hosur Main Road, Koramangala, Bengaluru – 560095
              <br />
              Registered: Inno House, Plot No. 9 (4 Bay), Sector 32, Gurgaon, Haryana, India, 122001
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="text-sm text-center border-t border-gray-200 py-4 px-4 text-[#a3206f]">
        <p>© 2025. PartyPropz Powered by Shopify</p>
        <div className="mt-2 flex flex-wrap justify-center gap-3 text-sm">
          <a href="#" className="hover:underline">Refund policy</a>|
          <a href="#" className="hover:underline">Privacy policy</a>|
          <a href="#" className="hover:underline">Terms of service</a>|
          <a href="#" className="hover:underline">Shipping policy</a>|
          <a href="#" className="hover:underline">Contact information</a>
        </div>
      </div>

      {/* Marquee Animation */}
      <style>{`
        .animate-marquee {
          display: inline-block;
          animation: slow-scroll 50s linear infinite;
        }

        @keyframes slow-scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
