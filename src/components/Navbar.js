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
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(2);

  const toggleMobileDropdown = (title) => {
    setMobileDropdowns((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching:', searchQuery);
  };

  return (
    <>
      <div className="bg-[#9c3587] text-white text-sm py-1 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap px-4">
          🔔 5% OFF Above ₹499 | Code: PARTYPROPZ05 ➜
        </div>
      </div>

      <div className="bg-[#fdf6ef] px-4 py-2 border-b border-[#ffcc29] flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button className="md:hidden text-[#9c3587]" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <img src="logo.png" alt="logo" className="h-10" />
        </div>

        <div className="hidden md:flex gap-6 text-[#9c3587] text-sm font-medium">
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
              {hoveredCategory === cat.title && (
                <div className="absolute left-0 top-full bg-[#fdf6ef] shadow-lg border z-50 flex">
                  <div className="w-64 p-4 border-r">
                    {cat.sub.map((item, idx) => (
                      typeof item === 'string' ? (
                        <div key={idx} className="py-1 hover:text-[#ff3366] cursor-pointer">{item}</div>
                      ) : (
                        <div key={idx}>
                          <div
                            className="py-1 flex justify-between items-center hover:text-[#ff3366] cursor-pointer"
                            onMouseEnter={() => setHoveredSubItem(item.title)}
                          >
                            {item.title}
                            <ChevronRight size={14} />
                          </div>
                        </div>
                      )
                    ))}
                  </div>
                  {hoveredSubItem && (
                    <div className="w-64 p-4">
                      {cat.sub.map(
                        (item) => item.title === hoveredSubItem && (
                          <div key={item.title}>
                            {item.sub.map((subItem, i) => (
                              <div key={i} className="py-1 hover:text-[#ff3366] cursor-pointer">{subItem}</div>
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

        <div className="flex gap-4 items-center text-[#9c3587]">
          <button onClick={() => setSearchOpen(true)}><Search size={20} /></button>
          <User />
          <div className="relative">
            <ShoppingCart />
            <span className="absolute -top-1 -right-2 bg-[#ff3366] text-white text-xs px-1 rounded-full">{cartCount}</span>
          </div>
        </div>
      </div>

      <div className="bg-[#ffcc29] text-black text-sm font-semibold px-4 py-1 flex justify-start">
        by <span className="font-bold ml-1">brnd.me</span>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-[#fdf6ef] w-72 p-4 shadow-lg z-50 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <img src="https://www.partypropz.com/frontend/img/logo.png" alt="logo" className="h-10" />
            <X onClick={() => setMenuOpen(false)} />
          </div>
          {categories.map((cat) => (
            <div key={cat.title} className="mb-2">
              <div className="flex justify-between items-center font-bold text-[#9c3587] cursor-pointer" onClick={() => toggleMobileDropdown(cat.title)}>
                {cat.title.toUpperCase()}
                <ChevronDown size={14} className={`${mobileDropdowns[cat.title] ? 'rotate-180' : ''}`} />
              </div>
              {mobileDropdowns[cat.title] && (
                <div className="ml-4 mt-1">
                  {cat.sub.map((item, j) => (
                    typeof item === 'string' ? (
                      <div key={j} className="text-sm text-gray-700 py-1">{item}</div>
                    ) : (
                      <div key={j}>
                        <div className="text-sm font-medium text-[#ff3366] mt-2">{item.title}</div>
                        <ul className="ml-3 list-disc">
                          {item.sub.map((sub, k) => (
                            <li key={k} className="text-sm py-1">{sub}</li>
                          ))}
                        </ul>
                      </div>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-6 border-t pt-4">
            <button className="w-full border border-[#9c3587] text-[#9c3587] py-2 rounded-full mb-4">About Us</button>
            <div className="flex items-center gap-2 text-[#9c3587]">
              <Instagram size={20} /> <span className="text-sm">Instagram</span>
            </div>
            <p className="text-xs mt-2">Need help? call us <span className="font-bold">+91 9686611821</span></p>
          </div>
        </div>
      )}

      {searchOpen && (
        <div className="fixed inset-0 bg-[#9c3587]/90 flex justify-center items-start pt-20 z-50">
          <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 rounded-xl p-6 shadow-lg">
            <div className="flex items-center border border-[#9c3587] rounded-full px-4 py-2">
              <Search size={20} className="text-[#9c3587] mr-2" />
              <input
                type="text"
                placeholder="What are you looking for?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full focus:outline-none"
              />
              <button onClick={() => setSearchOpen(false)}><X className="text-[#9c3587]" /></button>
            </div>
            <div className="mt-4">
              <p className="text-sm text-[#9c3587] font-semibold mb-2">Popular searches</p>
              <div className="flex flex-wrap gap-3 text-sm text-[#9c3587]">
                <span className="font-bold cursor-pointer">Birthday</span>
                <span className="font-bold cursor-pointer">Festive Decor</span>
                <span className="font-bold cursor-pointer">Bachelorette</span>
                <span className="cursor-pointer">Anniversary</span>
                <span className="cursor-pointer">Baby Shower</span>
              </div>
            </div>
          </div>
        </div>
      )}

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
