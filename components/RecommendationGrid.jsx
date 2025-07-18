import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function RecommendationGrid({ sections, banner }) {
  const cardsRef = useRef([]);
  const bannerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Remove GSAP animation for cards and banner
    // No animation logic here
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  let cardIdx = 0;
  return (
    <section ref={sectionRef} className="w-full bg-gradient-to-b from-gray-50 to-white py-8 px-4">
      <div className="w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 max-w-8xl mx-auto">
        {/* Left product grids - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-gray-100 shadow-sm p-3 flex flex-col transition-all hover:shadow-md">
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <h3 className="text-base font-bold text-gray-900 truncate">{section.title}</h3>
                </div>
                <button className="text-blue-600 hover:text-blue-800 transition-colors">
                  <span className="text-xs font-medium mr-1">View all</span>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-2.5">
                {section.products.map((product, i) => (
                  <div
                    key={i}
                    ref={el => (cardsRef.current[cardIdx++] = el)}
                    className="bg-white rounded-lg border border-gray-100 p-2.5 flex flex-col items-center opacity-0 transition-all duration-300 hover:border-blue-200 hover:shadow-lg"
                  >
                    <div className="relative mb-2">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-16 h-16 md:w-18 md:h-18 object-contain transition-transform duration-300 hover:scale-105" 
                      />
                      {product.isNew && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[0.6rem] font-bold px-1.5 py-0.5 rounded-full">
                          NEW
                        </span>
                      )}
                    </div>
                    <div className="font-medium text-gray-900 text-center text-xs mb-1.5 line-clamp-2 h-8 leading-tight">
                      {product.name}
                    </div>
                    <span className="inline-block bg-gradient-to-r from-green-50 to-emerald-50 text-emerald-700 font-bold text-[0.7rem] px-2 py-1 rounded-full w-full text-center truncate border border-emerald-100">
                      {product.offer}
                    </span>
                    {product.rating && (
                      <div className="flex items-center mt-1.5">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-3 h-3 ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                          </svg>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Right banner with enhanced design */}
        <div 
          ref={bannerRef}
          className="relative rounded-xl overflow-hidden flex flex-col items-center justify-center p-5 text-center min-h-[300px] opacity-0"
          style={{
            background: 'linear-gradient(135deg, #f9f7f0 0%, #f1e9d9 100%)',
            boxShadow: '0 4px 20px rgba(122, 90, 47, 0.08)',
            border: '1px solid rgba(122, 90, 47, 0.1)'
          }}
        >
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'radial-gradient(#7a5a2f 1px, transparent 1px)',
            backgroundSize: '12px 12px'
          }}></div>
          
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-[#7a5a2f] mb-2">{banner.title}</h3>
            <p className="text-gray-600 mb-3 text-sm max-w-md mx-auto">{banner.subtitle}</p>
            
            <div className="flex justify-center gap-3 mb-4">
              {banner.images && banner.images.map((img, i) => (
                <div key={i} className="bg-white p-1.5 rounded-lg shadow-sm transform rotate-3 transition-transform duration-300 hover:rotate-0">
                  <img 
                    src={img} 
                    alt="furniture" 
                    className="w-14 h-14 object-contain rounded"
                  />
                </div>
              ))}
            </div>
            
            <div className="mb-4 flex justify-center">
              <div className="flex items-center bg-white px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 shadow-sm">
                <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                30-day satisfaction guarantee
              </div>
            </div>
            
            <a 
              href={banner.buttonLink} 
              className="inline-block relative z-10 bg-gradient(to bottom, #f7e1b5, #e6c993) text-[#7a5a2f] font-bold px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] text-sm"
              style={{
                boxShadow: '0 4px 12px rgba(122, 90, 47, 0.2)'
              }}
            >
              {banner.buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}