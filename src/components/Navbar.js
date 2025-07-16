import React, { useState } from 'react';
import {
  Menu, X, User, ShoppingCart, ChevronRight, ChevronDown, Instagram, Search,
} from 'lucide-react';

const categories = [
  {
    title: 'Birthday',
    sub: [
      {
        title: 'Birthday Decor',
        sub: ['For Boys', 'For Girls', 'For Adults'],
      },
      {
        title: 'Shop By Theme',
        sub: [
          'Unicorn Theme', 'Jungle Theme', 'Frozen Theme', 'Mermaid Theme',
          'Space Theme', 'Dinosaur Theme', 'Baby Shark Theme', 'Pastel & Butterfly Theme',
        ],
      },
      {
        title: 'Shop By Age',
        sub: [
          '1st Birthday', '5th Birthday', '6th Birthday & above', '13th Birthday',
          '18th Birthday', '25th Birthday', '50th Birthday',
        ],
      },
      {
        title: 'Shop By Color',
        sub: [
          'Blue', 'Black & Gold', 'Black & silver', 'Gold', 'Pink', 'Pastel', 'Purple', 'Multicolor',
        ],
      },
      {
        title: 'Return Gifts',
        sub: ['Return Gift Sets', 'Stationery', 'Back to school'],
      },
      'Balloons', 'Banners', 'Backdrops',
    ],
  },
  {
    title: 'Festive Decor',
    sub: [
      'Latkans & Hangings', 'Backdrop', 'Ganesh Chaturthi', 'Diwali',
      'Holi', 'Merry Christmas', 'Valentines', 'Lights', 'Rice & Naming Ceremony'
    ],
  },
  {
    title: 'Bachelorette',
    sub: ['Bride To Be', 'Groom To Be'],
  },
  {
    title: 'Custom',
    sub: ['Digital Invitation Card', 'Birthday Card', 'Bachelorette Party Card'],
  },
  {
    title: 'Others',
    sub: ['Decoration Tools', 'Anniversary', 'Baby Shower', 'Retirement', 'Props & Cutouts'],
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSubItem, setHoveredSubItem] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const [mobileSubDropdowns, setMobileSubDropdowns] = useState({});
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(2);

  const toggleMobileDropdown = (title) => {
    setMobileDropdowns((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const toggleMobileSubDropdown = (title) => {
    setMobileSubDropdowns((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <>
      {/* Marquee */}
      <div className="bg-[#9c3587] text-white text-sm py-2 overflow-hidden ">
        <div className="animate-marquee whitespace-nowrap px-4">
          🔔 5% OFF Above ₹499 | Code: PARTYPROPZ05 ➜
        </div>
      </div>

      {/* Sticky Container for Navbar + Yellow Strip */}
      <div className="sticky top-0 z-50">
        {/* Main Navbar */}
        <div className="bg-[#fdf6ef] px-4 py-2 border-b border-[#ffcc29] flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-[#9c3587]" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            <img src="logo.png" alt="logo" className="h-14" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 text-[#9c3587] text-sm font-semibold relative">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="relative group"
                onMouseEnter={() => setHoveredCategory(cat.title)}
                onMouseLeave={() => {
                  setHoveredCategory(null);
                  setHoveredSubItem(null);
                }}
              >
                <button className="flex items-center gap-1 hover:text-[#ff3366]">
                  {cat.title}
                  <ChevronDown size={14} />
                </button>

                {/* Dropdown Menu */}
                {hoveredCategory === cat.title && (
                  <div className="absolute left-0 top-full mt-1 bg-[#fdf6ef] shadow-lg border rounded-md z-50 flex">
                    <div className="w-64 p-4 border-r">
                      {cat.sub.map((item, idx) =>
                        typeof item === 'string' ? (
                          <div key={idx} className="py-1 text-sm hover:text-[#ff3366] cursor-pointer">
                            {item}
                          </div>
                        ) : (
                          <div key={idx}>
                            <div
                              className="py-1 flex justify-between items-center text-sm font-medium hover:text-[#ff3366] cursor-pointer"
                              onMouseEnter={() => setHoveredSubItem(item.title)}
                            >
                              {item.title}
                              <ChevronRight size={14} />
                            </div>
                          </div>
                        )
                      )}
                    </div>

                    {/* Sub Dropdown */}
                    {hoveredSubItem && (
                      <div className="w-64 p-4">
                        {cat.sub.map(
                          (item) =>
                            item.title === hoveredSubItem && (
                              <div key={item.title}>
                                {item.sub.map((subItem, i) => (
                                  <div key={i} className="py-1 text-sm hover:text-[#ff3366] cursor-pointer">
                                    {subItem}
                                  </div>
                                ))}
                              </div>
                            )
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Right icons */}
        <div className="flex gap-4 items-center text-[#9c3587]">
          <button onClick={() => setSearchOpen(true)}><Search size={24} /></button>
          <User />
          <div className="relative">
            <ShoppingCart />
            <span className="absolute -top-1 -right-2 bg-[#ff3366] text-white text-xs px-1 rounded-full">{cartCount}</span>
          </div>
        </div>
      </div>

        {/* Yellow Strip */}
        <div className="bg-[#ffcc29] py-1 flex justify-center items-center">
          <span className="text-black text-sm font-semibold">
            by <span className="font-bold ml-1">brnd.me</span>
          </span>
          <img src="logo2.png" alt="brand" className="h-6 ml-2" />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-[112px] left-0 right-0 bottom-0 bg-[#fdf6ef] w-full max-w-[320px] p-4 shadow-lg z-40 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <img src="logo.png" alt="logo" className="h-10" />
            <X onClick={() => setMenuOpen(false)} className="text-[#9c3587]" size={26} />
          </div>

          <button className="w-full border-2 border-[#9c3587] text-[#9c3587] py-2 rounded-full text-sm font-semibold mb-4 flex items-center justify-center gap-2">
            <User size={16} /> Log in
          </button>

          {categories.map((cat) => (
            <div key={cat.title} className="mb-2">
              <div className="flex justify-between items-center text-[#9c3587] font-bold text-sm uppercase cursor-pointer py-2"
                onClick={() => toggleMobileDropdown(cat.title)}>
                {cat.title}
                <ChevronDown size={16} className={`transition-transform ${mobileDropdowns[cat.title] ? 'rotate-180' : ''}`} />
              </div>

              {mobileDropdowns[cat.title] && (
                <div className="ml-3">
                  {cat.sub.map((item, j) =>
                    typeof item === 'string' ? (
                      <div key={j} className="text-sm text-gray-700 py-1">{item}</div>
                    ) : (
                      <div key={j}>
                        <div
                          className="text-sm font-medium text-[#ff3366] mt-2 flex justify-between items-center cursor-pointer"
                          onClick={() => toggleMobileSubDropdown(item.title)}
                        >
                          {item.title}
                          <ChevronDown size={12} className={`transition-transform ${mobileSubDropdowns[item.title] ? 'rotate-180' : ''}`} />
                        </div>
                        {mobileSubDropdowns[item.title] && (
                          <ul className="ml-3 mt-1 list-disc">
                            {item.sub.map((sub, k) => (
                              <li key={k} className="text-sm text-gray-700 py-1">{sub}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        {/* About Us and Contact Section */}
        <div className="mt-6 border-t border-[#ffcc29] pt-4">
          <button className="w-full border-2 border-[#9c3587] text-[#9c3587] py-2 rounded-full text-sm font-semibold mb-4">
            About Us
          </button>

          <div className="flex items-center gap-3 text-[#9c3587] mb-2">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Meta" className="h-5 w-5" />
            <Instagram size={20} />
            <span className="text-sm">Instagram</span>
          </div>

          <p className="text-xs text-[#000]">Need help? call us <span className="font-bold">+91 9686611821</span></p>
        </div>
      </div>
      )}

      {/* Marquee Animation CSS */}
      <style>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 15s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </>
  );
};

export default Navbar;
