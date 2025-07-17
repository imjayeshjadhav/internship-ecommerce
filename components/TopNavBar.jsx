import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function TopNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const menuRef = useRef(null);
  const searchRef = useRef(null);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsSearchOpen(false); // Close search when opening menu
    }
  };

  // Toggle mobile search
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setIsMenuOpen(false); // Close menu when opening search
    }
  };

  // Animation for mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
        onStart: () => {
          menuRef.current.style.display = 'block';
        }
      });
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          menuRef.current.style.display = 'none';
        }
      });
    }
  }, [isMenuOpen]);

  // Animation for mobile search
  useEffect(() => {
    if (isSearchOpen) {
      gsap.to(searchRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
        onStart: () => {
          searchRef.current.style.display = 'block';
        }
      });
    } else {
      gsap.to(searchRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          searchRef.current.style.display = 'none';
        }
      });
    }
  }, [isSearchOpen]);

  return (
    <header className="w-full bg-white shadow-sm border-b border-yellow-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 gap-4">
        {/* Left side - Logo and Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-yellow-700"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-700 bg-clip-text text-transparent">
            ShopEase
          </Link>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-4">
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="w-full rounded-full px-5 py-2 border border-yellow-200 bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base placeholder:text-yellow-400 shadow-sm"
          />
        </div>

        {/* Right Side - Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/account" className="flex items-center gap-1 text-yellow-800 hover:text-orange-500 font-semibold transition-colors">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="8" r="4" strokeWidth="1.5"/>
              <path strokeWidth="1.5" d="M4 20c0-2.5 3.5-4 8-4s8 1.5 8 4"/>
            </svg>
            Account
          </Link>
          <Link href="/cart" className="relative flex items-center gap-1 text-yellow-800 hover:text-orange-500 font-semibold transition-colors">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007 17h10a1 1 0 00.95-.68L21 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7"/>
            </svg>
            Cart
            <span className="absolute -top-2 -right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs rounded-full px-1.5 py-0.5 font-bold">3</span>
          </Link>
          <Link href="/seller" className="flex items-center gap-1 text-yellow-800 hover:text-orange-500 font-semibold transition-colors">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeWidth="1.5" d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4" strokeWidth="1.5"/>
              <path strokeWidth="1.5" d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            </svg>
            Become a Seller
          </Link>
        </div>

        {/* Mobile Icons - Search and Cart */}
        <div className="flex md:hidden items-center gap-4">
          <button 
            onClick={toggleSearch}
            className="text-yellow-700"
            aria-label="Search"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          <Link href="/cart" className="relative text-yellow-700">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007 17h10a1 1 0 00.95-.68L21 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7"/>
            </svg>
            <span className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs rounded-full px-1.5 py-0.5 font-bold">3</span>
          </Link>
        </div>
      </div>

      {/* Mobile Search Bar - Animated */}
      <div 
        ref={searchRef}
        className="hidden overflow-hidden opacity-0"
        style={{ display: 'none', height: 0 }}
      >
        <div className="px-4 py-3 border-t border-yellow-100">
          <input
            type="text"
            placeholder="Search for Products, Brands..."
            className="w-full rounded-full px-5 py-2 border border-yellow-200 bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base placeholder:text-yellow-400 shadow-sm"
          />
        </div>
      </div>

      {/* Mobile Menu - Animated */}
      <div 
        ref={menuRef}
        className="hidden overflow-hidden opacity-0"
        style={{ display: 'none', height: 0 }}
      >
        <div className="px-4 py-4 border-t border-yellow-100 bg-white">
          <div className="flex flex-col gap-6 py-4">
            <Link 
              href="/account" 
              className="flex items-center gap-3 text-yellow-800 hover:text-orange-500 font-semibold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="8" r="4" strokeWidth="1.5"/>
                <path strokeWidth="1.5" d="M4 20c0-2.5 3.5-4 8-4s8 1.5 8 4"/>
              </svg>
              Account
            </Link>
            
            <Link 
              href="/seller" 
              className="flex items-center gap-3 text-yellow-800 hover:text-orange-500 font-semibold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeWidth="1.5" d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4" strokeWidth="1.5"/>
                <path strokeWidth="1.5" d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              </svg>
              Become a Seller
            </Link>
            
            <div className="pt-4 border-t border-yellow-100">
              <h3 className="text-xs uppercase text-gray-500 font-bold mb-2">Categories</h3>
              <ul className="flex flex-col gap-3">
                {['Electronics', 'Fashion', 'Home & Kitchen', 'Beauty', 'Books', 'Toys'].map((category) => (
                  <li key={category}>
                    <Link 
                      href={`/category/${category.toLowerCase()}`} 
                      className="text-yellow-800 hover:text-orange-500 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}