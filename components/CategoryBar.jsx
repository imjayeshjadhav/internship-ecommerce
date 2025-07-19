const categories = [
  { icon: (<svg className="w-6 h-6 md:w-7 md:h-7 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20" /></svg>), label: 'Top Offers' },
  { icon: (<svg className="w-6 h-6 md:w-7 md:h-7 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="2" /><circle cx="12" cy="18" r="1.5" /></svg>), label: 'Mobiles & Tablets' },
  { icon: (<svg className="w-6 h-6 md:w-7 md:h-7 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><rect x="7" y="3" width="10" height="4" rx="1" /></svg>), label: 'TVs & Appliances' },
  { icon: (<svg className="w-6 h-6 md:w-7 md:h-7 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="2" /><path d="M8 20h8" /></svg>), label: 'Electronics' },
  { icon: (<svg className="w-6 h-6 md:w-7 md:h-7 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 21v-2a4 4 0 0 1 8 0v2" /><circle cx="9" cy="7" r="4" /></svg>), label: 'Fashion' },
  { icon: (<svg className="w-6 h-6 md:w-7 md:h-7 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 21v-2a4 4 0 0 1 8 0v2" /><circle cx="8" cy="7" r="4" /></svg>), label: 'Beauty, Food..' },
  { icon: (<svg className="w-6 h-6 md:w-7 md:h-7 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="10" width="18" height="10" rx="2" /><path d="M7 10V6a5 5 0 0 1 10 0v4" /></svg>), label: 'Home & Kitchen' },
  { icon: (<svg className="w-6 h-6 md:w-7 md:h-7 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="12" width="20" height="8" rx="2" /><path d="M6 12V6a6 6 0 0 1 12 0v6" /></svg>), label: 'Furniture' },
  { icon: (<svg className="w-6 h-6 md:w-7 md:h-7 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M2 16l10-8 10 8" /><rect x="2" y="16" width="20" height="6" rx="2" /></svg>), label: 'Flight Bookings' },
  { icon: (<svg className="w-6 h-6 md:w-7 md:h-7 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /><path d="M8 12h8" /></svg>), label: 'Grocery' },
];

import { useState, useEffect } from 'react';

export default function CategoryBar() {
  return (
    <nav className="w-full bg-white/90 backdrop-blur-md border-b border-yellow-200 shadow-sm sticky top-0 z-30">
      {/* Scrollable container for all screen sizes */}
      <div className="relative">
        <div className="overflow-x-auto scrollbar-hide py-3">
          {/* Grid container that expands to fit content */}
          <div className="grid grid-cols-10 min-w-max w-full px-2 sm:px-6 gap-4">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center group cursor-pointer transition-all hover:scale-105"
              >
                <div className="bg-yellow-100 group-hover:bg-yellow-200 p-2 rounded-full shadow-sm transition-colors duration-300">
                  {cat.icon}
                </div>
                <span className="mt-1 text-xs sm:text-sm font-medium text-yellow-800 group-hover:text-yellow-700 text-center whitespace-nowrap transition-colors duration-300">
                  {cat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Fade effect for scrollable edges */}
        <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-white/90 to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-white/90 to-transparent pointer-events-none"></div>
      </div>
    </nav>
  );
}