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
    <footer className="bg-[#fdf6ef] text-[#a3206f] text-sm mt-8">
      {/* Top Icons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 py-8 text-center">
        <div>
          <Smile className="mx-auto mb-2" />
          <p className="font-semibold">50+Lakh Customers</p>
        </div>
        <div>
          <BarChart2 className="mx-auto mb-2" />
          <p className="font-semibold">Market Leader</p>
        </div>
        <div>
          <Award className="mx-auto mb-2" />
          <p className="font-semibold">Premium Quality</p>
        </div>
        <div>
          <ShoppingBag className="mx-auto mb-2" />
          <p className="font-semibold">Wide Variety</p>
        </div>
      </div>

      {/* Brnd.me Repeating Yellow Strip */}
      <div className="bg-[#ffcc29] text-black font-semibold text-center text-xs py-2 tracking-widest uppercase">
        <div className="animate-marquee whitespace-nowrap">
          {Array(20)
            .fill("by brnd.me")
            .map((item, idx) => (
              <span key={idx} className="inline-block mx-4 font-bold italic">
                {item}
              </span>
            ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-8 border-t border-gray-200 text-[#a3206f]">
        {/* Top Categories */}
        <div>
          <h3 className="font-bold uppercase mb-3">Top Categories</h3>
          <ul className="space-y-2">
            <li>Best Sellers</li>
            <li>New Launches</li>
            <li>Return Gifts</li>
            <li>Back to school</li>
            <li>Epic Theme</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="font-bold uppercase mb-3">Information</h3>
          <ul className="space-y-2">
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
          <h3 className="font-bold uppercase mb-3">Get In Touch</h3>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <Mail size={16} /> support@partypropz.in
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> +91 9686611821
            </p>
            <p>
              <strong>Bracheium Brand Technologies Pvt. Ltd.,</strong>
              <br />
              Corporate office address: Vaishnavi Properties, #30/1,
              <br />
              Silicon Terraces, 2nd and 3rd Floor, Adugodi, Hosur Main Road,
              Koramangala, Bengaluru – 560095
              <br />
              Registered address: Inno House, 2nd Floor, Plot No. 9 (4 Bay),
              Sector 32, Gurgaon, Gurgaon, Sadar Bazar, Haryana, India, 122001
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="text-xs text-center border-t border-gray-200 py-4 px-4 text-[#a3206f]">
        <p>
          © 2025. PartyPropz Powered by Shopify
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <a href="#" className="hover:underline">Refund policy</a>|
          <a href="#" className="hover:underline">Privacy policy</a>|
          <a href="#" className="hover:underline">Terms of service</a>|
          <a href="#" className="hover:underline">Shipping policy</a>|
          <a href="#" className="hover:underline">Contact information</a>
        </div>
      </div>

      <style>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

