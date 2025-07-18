import SectionHeading from './SectionHeading';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function HorizontalProductCarousel({ title, products }) {
  const scrollRef = useRef(null);
  const cardsRef = useRef([]);
  const containerRef = useRef(null);
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
      const gap = 8; // gap-2 is 8px
      const scrollAmount = (cardWidth + gap) * dir;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-4 sm:py-6 relative" ref={containerRef}>
      <div className="flex justify-between items-center mb-3 px-4">
        <SectionHeading title={title} />
        <div className="hidden sm:flex gap-2">
          <button
            className={`bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg p-2 hover:bg-yellow-50 hover:border-yellow-300 transition-all group ${!showLeftArrow ? 'opacity-30 cursor-not-allowed' : ''}`}
            onClick={() => scroll(-1)}
            disabled={!showLeftArrow}
            aria-label="Scroll left"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-gray-700 group-hover:text-yellow-700">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className={`bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg p-2 hover:bg-yellow-50 hover:border-yellow-300 transition-all group ${!showRightArrow ? 'opacity-30 cursor-not-allowed' : ''}`}
            onClick={() => scroll(1)}
            disabled={!showRightArrow}
            aria-label="Scroll right"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-gray-700 group-hover:text-yellow-700">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative">
        {/* Gradient overlays - always visible */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Mobile swipe arrows */}
        {showLeftArrow && (
          <button 
            className="sm:hidden absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg p-1.5 hover:bg-yellow-50 hover:border-yellow-300 transition-all z-20"
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-700">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        {showRightArrow && (
          <button 
            className="sm:hidden absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg p-1.5 hover:bg-yellow-50 hover:border-yellow-300 transition-all z-20"
            onClick={() => scroll(1)}
            aria-label="Scroll right"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-700">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto overflow-y-hidden px-4 py-1 snap-x snap-mandatory scrollbar-hide"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product, i) => (
            <div
              key={product.id}
              ref={el => (cardsRef.current[i] = el)}
              className="min-w-[160px] sm:min-w-[200px] md:min-w-[220px] flex-shrink-0 bg-white border border-gray-100 rounded-2xl shadow-sm p-4 flex flex-col items-center snap-center opacity-0 transition-all duration-300 hover:shadow-xl hover:border-yellow-300 group"
            >
              <div className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mb-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden p-2">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110" 
                />
                {product.isNew && (
                  <span className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm uppercase tracking-wide">NEW</span>
                )}
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                    {product.discount} OFF
                  </span>
                )}
              </div>
              <div className="font-bold text-gray-900 text-center truncate w-full text-sm sm:text-base mb-1">
                {product.name}
              </div>
              {product.description && (
                <p className="text-gray-500 text-xs text-center mb-2 line-clamp-2 h-10 leading-tight">
                  {product.description}
                </p>
              )}
              <div className="flex justify-center items-center gap-1 mb-2">
                {product.rating && (
                  <>
                    <div className="flex">
                      {[...Array(5)].map((_, idx) => (
                        <svg 
                          key={idx}
                          className={`w-4 h-4 ${idx < Math.floor(product.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-600 font-medium">({product.reviews})</span>
                  </>
                )}
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-bold text-gray-900 text-base">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-400 text-sm line-through">₹{product.originalPrice}</span>
                )}
              </div>
              <button className="mt-auto w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white font-semibold text-xs sm:text-sm py-2.5 rounded-xl shadow-md transition-all tracking-wide hover:shadow-lg flex items-center justify-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile scroll indicator */}
      <div className="sm:hidden flex justify-center mt-4">
        <div className="flex gap-1">
          {products.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-gray-300"></div>
          ))}
        </div>
      </div>
    </section>
  );
}

