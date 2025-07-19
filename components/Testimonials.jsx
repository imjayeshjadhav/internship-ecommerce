"use client";
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Priya Sharma',
    text: 'Absolutely love the quality and service! My go-to store for fashion.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Rahul Verma',
    text: 'Fast delivery and amazing products. Highly recommended!',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Ayesha Khan',
    text: 'The best online shopping experience I have had so far.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Vikram Singh',
    text: 'Customer service is exceptional. Solved my issue within minutes!',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
  {
    name: 'Neha Patel',
    text: 'Great prices and frequent discounts. My shopping budget goes further here.',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
  },
  {
    name: 'Sanjay Kumar',
    text: 'Product quality exceeded my expectations. Will definitely shop again!',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
  },
];

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="w-full mx-auto py-12 px-4 sm:px-6 bg-gradient-to-b from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-700 bg-clip-text text-transparent mb-4">
            What Our Customers Say
          </h3>
          <p className="text-lg text-yellow-700 max-w-2xl mx-auto">
            Don't just take our word for it - hear from thousands of satisfied customers
          </p>
        </div>
        
        {/* Scrollable container for mobile/tablet */}
        {isMobile ? (
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide py-4">
              <div className="flex space-x-6 min-w-max">
                {testimonials.map((t, i) => (
                  <div 
                    key={i} 
                    className="flex flex-col items-center bg-white/90 backdrop-blur-md border border-yellow-100 rounded-2xl shadow-lg p-6 text-center min-w-[300px]"
                  >
                    <div className="relative mb-4">
                      <img 
                        src={t.avatar} 
                        alt={t.name} 
                        className="w-16 h-16 rounded-full border-4 border-yellow-200 object-cover mx-auto"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-yellow-900 italic mb-3">“{t.text}”</p>
                    <span className="font-bold text-yellow-700">{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Scroll indicators */}
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-orange-50 to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-orange-50 to-transparent pointer-events-none"></div>
          </div>
        ) : (
          // Grid layout for desktop
          <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center bg-white/90 backdrop-blur-md border border-yellow-100 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative mb-5">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-20 h-20 rounded-full border-4 border-yellow-200 object-cover mx-auto"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  </div>
                </div>
                <p className="text-yellow-900 italic mb-4 text-lg">“{t.text}”</p>
                <span className="font-bold text-yellow-700 text-lg">{t.name}</span>
                
                {/* Rating stars */}
                <div className="mt-4 flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/80 backdrop-blur-sm border border-yellow-100 rounded-xl p-4 shadow">
            <p className="text-3xl md:text-4xl font-bold text-yellow-700">2K+</p>
            <p className="text-yellow-800">Happy Customers</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-yellow-100 rounded-xl p-4 shadow">
            <p className="text-3xl md:text-4xl font-bold text-yellow-700">98%</p>
            <p className="text-yellow-800">Positive Reviews</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-yellow-100 rounded-xl p-4 shadow">
            <p className="text-3xl md:text-4xl font-bold text-yellow-700">24/7</p>
            <p className="text-yellow-800">Customer Support</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-yellow-100 rounded-xl p-4 shadow">
            <p className="text-3xl md:text-4xl font-bold text-yellow-700">10k+</p>
            <p className="text-yellow-800">Products Sold</p>
          </div>
        </div>
      </div>
    </section>
  );
}