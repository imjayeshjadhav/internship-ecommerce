import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const defaultPromos = [
  {
    subtitle: 'Limited Time',
    title: 'Up to 60% Off on Laptops',
    price: 'From ₹29,999',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    category: 'Electronics',
    discount: '60% OFF',
  },
  {
    subtitle: 'Best Seller',
    title: 'Smartphones Mega Sale',
    price: 'From ₹7,499',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
    category: 'Mobile',
    discount: '45% OFF',
  },
  {
    subtitle: 'New Arrival',
    title: 'Trendy Summer Fashion',
    price: 'Min 40% Off',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    category: 'Fashion',
    discount: '40% OFF',
  },
  {
    subtitle: 'Home Essentials',
    title: 'Kitchen & Dining Deals',
    price: 'From ₹299',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    category: 'Home',
    discount: '55% OFF',
  },
  {
    subtitle: 'Beauty Picks',
    title: 'Top Skincare & Makeup',
    price: 'From ₹199',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    category: 'Beauty',
    discount: '65% OFF',
  },
  {
    subtitle: 'Furniture Fest',
    title: 'Modern Sofas & Chairs',
    price: 'Up to 50% Off',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    category: 'Furniture',
    discount: '50% OFF',
  },
  {
    subtitle: 'Gaming Zone',
    title: 'Gaming Consoles & Accessories',
    price: 'From ₹14,999',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80',
    category: 'Gaming',
    discount: '35% OFF',
  },
  {
    subtitle: 'Fitness Deals',
    title: 'Yoga Mats & Fitness Gear',
    price: 'From ₹499',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80',
    category: 'Fitness',
    discount: '30% OFF',
  },
];

export default function PromoGrid({ promos = defaultPromos }) {
  const cardsRef = useRef([]);
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Handle swipe gestures for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      scroll(1);
    } else if (touchStart - touchEnd < -50) {
      // Swipe right
      scroll(-1);
    }
  };

  // Update arrow visibility based on scroll position
  useEffect(() => {
    const updateArrowVisibility = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    scrollRef.current?.addEventListener('scroll', updateArrowVisibility);
    updateArrowVisibility(); // Initial check
    
    return () => {
      scrollRef.current?.removeEventListener('scroll', updateArrowVisibility);
    };
  }, []);

  useEffect(() => {
    // Remove GSAP animation for cards
    // No animation logic here
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const cardWidth = cardsRef.current[0]?.offsetWidth || 200;
      const gap = 16; // gap-4 is 16px
      const scrollAmount = (cardWidth + gap) * dir;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="w-full bg-gradient-to-b from-white to-yellow-50 py-8 px-2 sm:px-4 md:px-6 relative"
      ref={containerRef}
    >
      {/* Header Section */}
      <div className="w-full text-center mb-8 px-2">
        <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-700 bg-clip-text text-transparent drop-shadow-sm mb-2">
          Exclusive Promos Just for You
        </h2>
        <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
          Discover amazing deals and limited-time offers tailored to your needs. Grab them before they’re gone!
        </p>
      </div>
      
      {/* Desktop Navigation Arrows */}
      <div className="hidden md:flex justify-between items-center absolute top-1/2 left-0 right-0 -translate-y-1/2 px-4 z-10 pointer-events-none">
        <button
          className={`bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg p-3 hover:bg-yellow-50 hover:border-yellow-300 transition-all group pointer-events-auto ${!showLeftArrow ? 'opacity-30 cursor-not-allowed' : ''}`}
          onClick={() => scroll(-1)}
          disabled={!showLeftArrow}
          aria-label="Scroll left"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-700 group-hover:text-yellow-700">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className={`bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg p-3 hover:bg-yellow-50 hover:border-yellow-300 transition-all group pointer-events-auto ${!showRightArrow ? 'opacity-30 cursor-not-allowed' : ''}`}
          onClick={() => scroll(1)}
          disabled={!showRightArrow}
          aria-label="Scroll right"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-700 group-hover:text-yellow-700">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation Arrows */}
      <div className="md:hidden flex justify-center gap-4 mb-4">
        <button
          className={`bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg p-2 hover:bg-yellow-50 hover:border-yellow-300 transition-all group ${!showLeftArrow ? 'opacity-30 cursor-not-allowed' : ''}`}
          onClick={() => scroll(-1)}
          disabled={!showLeftArrow}
          aria-label="Scroll left"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-700 group-hover:text-yellow-700">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className={`bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg p-2 hover:bg-yellow-50 hover:border-yellow-300 transition-all group ${!showRightArrow ? 'opacity-30 cursor-not-allowed' : ''}`}
          onClick={() => scroll(1)}
          disabled={!showRightArrow}
          aria-label="Scroll right"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-700 group-hover:text-yellow-700">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Promo Cards Grid/Carousel */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none hidden md:block"></div>
        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none hidden md:block"></div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto overflow-y-hidden px-4 py-2 snap-x snap-mandatory scrollbar-hide"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {promos.map((promo, i) => (
            <div
              key={i}
              ref={el => (cardsRef.current[i] = el)}
              className="min-w-[280px] max-w-[320px] flex-shrink-0 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100/80 backdrop-blur-md border border-yellow-200 rounded-2xl shadow-md p-5 flex flex-col justify-between opacity-0 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group"
            >
              {/* Category tag */}
              <div className="absolute top-3 left-3 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {promo.category}
              </div>
              
              {/* Discount badge */}
              {promo.discount && (
                <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  {promo.discount}
                </div>
              )}
              
              {/* Text Info */}
              <div className="mt-8">
                <div className="text-xs text-yellow-700 font-medium uppercase tracking-wide">{promo.subtitle}</div>
                <div className="text-xl font-extrabold text-gray-900 leading-tight mt-2 mb-3">
                  {promo.title}
                </div>
                <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold text-sm px-4 py-1.5 rounded-full shadow">
                  {promo.price}
                </span>
              </div>
              
              {/* Product Image */}
              <div className="flex justify-center mt-4">
                <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-yellow-100 via-orange-50 to-yellow-50 rounded-xl shadow-inner border border-yellow-100 p-1">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              
              {/* CTA Button */}
              <button className="mt-5 w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold text-sm py-2.5 rounded-xl shadow transition-all tracking-wide">
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile scroll indicator */}
      <div className="flex justify-center mt-6">
        <div className="flex gap-2">
          {promos.map((_, i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
          ))}
        </div>
      </div>
    </section>
  );
}
