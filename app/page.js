"use client";
import TopNavBar from '../components/TopNavBar';
import CategoryBar from '../components/CategoryBar';
import HorizontalProductCarousel from '../components/HorizontalProductCarousel';
import Footer from '../components/Footer';
import PromoGrid from '../components/PromoGrid';
import RecommendationGrid from '../components/RecommendationGrid';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { laptops, promos, recBanner, recSections, smartphones } from '@/constants/constants';
import Carousel from '../components/Carousel';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';

export default function HomePage() {
  const mainRef = useRef(null);
  const carouselRef = useRef(null);
  const promoGridRef = useRef(null);
  const phoneCarouselRef = useRef(null);
  const laptopCarouselRef = useRef(null);
  const recGridRef = useRef(null);
  const featuresRef = useRef(null);
  const testimonialsRef = useRef(null);
  const newsletterRef = useRef(null);
  const trustRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const animateSection = (ref, delay = 0) => {
      if (ref.current) {
        gsap.fromTo(ref.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1, y: 0, duration: 0.8, delay,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    };
    animateSection(mainRef, 0);
    animateSection(carouselRef, 0.1);
    animateSection(featuresRef, 0.15);
    animateSection(promoGridRef, 0.2);
    animateSection(phoneCarouselRef, 0.25);
    animateSection(laptopCarouselRef, 0.3);
    animateSection(recGridRef, 0.35);
    animateSection(testimonialsRef, 0.4);
    animateSection(newsletterRef, 0.45);
    animateSection(trustRef, 0.5);
    animateSection(ctaRef, 0.55);
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-orange-50 to-yellow-100 overflow-x-hidden">
      <TopNavBar />
      <CategoryBar />
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200/40 rounded-full blur-3xl z-0" style={{filter:'blur(80px)',top:'-6rem',left:'-6rem'}} />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl z-0" style={{filter:'blur(100px)',bottom:'-8rem',right:'-8rem'}} />
      <main ref={mainRef} className="flex flex-col items-center gap-8 relative z-10">
        <div ref={carouselRef} className="w-full">
          <Carousel images={[
            'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/6e2e8defb1b2c951.jpg?q=20',
            'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/2b7e2e8defb1b2c951.jpg?q=20',
            'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/3c7e2e8defb1b2c951.jpg?q=20',
          ]} />
          <div className="w-full flex justify-center">
            <div className="w-full bg-white/70 backdrop-blur-md border-l-4 border-r-4 border-yellow-300 py-4 px-4 md:px-8 rounded-xl shadow text-center mx-0">
              <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-700 bg-clip-text text-transparent mb-2 font-montserrat tracking-tight">
                Welcome to ShopEase
              </h2>
              <p className="text-yellow-900 text-base md:text-lg font-medium leading-relaxed">
                Experience shopping redefined—where every deal is golden, every product is handpicked, and every delivery is fast and secure. Discover trending collections, exclusive offers, and a seamless journey from cart to doorstep. Shop smart. Shop premium. ShopEase.
              </p>
            </div>
          </div>
        </div>
        {/* Features Section */}
        <div ref={featuresRef} className="w-full">
          <Features />
        </div>
        <div ref={promoGridRef} className="w-full">
          <PromoGrid promos={promos} />
        </div>
        <div ref={phoneCarouselRef} className="w-full">
          <HorizontalProductCarousel title="Best Deals on Smartphones" products={smartphones} />
        </div>
        <div ref={laptopCarouselRef} className="w-full">
          <HorizontalProductCarousel title="Top Laptops" products={laptops} />
        </div>
        <div ref={recGridRef} className="w-full">
          <div className="w-full flex justify-center mt-2">
            <div className="w-full bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-100/80 backdrop-blur-md border-b-2 border-yellow-300 py-2 px-2 sm:px-4 rounded-none shadow-none text-sm md:text-base text-yellow-900 text-center font-medium tracking-tight flex flex-col items-center">
              <span className="inline-block w-8 h-1 rounded-full bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-500 mb-1"></span>
              <span className="text-lg md:text-xl font-extrabold bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-800 bg-clip-text text-transparent block mb-0.5 drop-shadow-sm">Personalized Recommendations</span>
              <span className="text-yellow-800 leading-snug">Handpicked just for you—explore trending collections and discover your next favorite product. Enjoy a shopping experience tailored to your style and needs.</span>
            </div>
          </div>
          <RecommendationGrid sections={recSections} banner={recBanner} />
        </div>
        {/* Testimonials Section */}
        <div ref={testimonialsRef} className="w-full">
          <Testimonials />
        </div>
        {/* Newsletter Signup Section (placeholder) */}
        <div ref={newsletterRef} className="w-full max-w-2xl mx-auto py-12 px-4 md:px-0">
          <div className="bg-white/80 backdrop-blur-md border border-yellow-100 rounded-2xl shadow-lg p-8 flex flex-col items-center gap-4">
            <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-700 bg-clip-text text-transparent mb-2 text-center">Stay Updated!</h3>
            <p className="text-yellow-900 mb-4 text-center">Subscribe to our newsletter for exclusive offers, new arrivals, and more.</p>
            <form className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
              <input type="email" placeholder="Enter your email" className="flex-1 rounded-full px-5 py-2 border border-yellow-200 bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base placeholder:text-yellow-400 shadow-sm" />
              <button type="submit" className="rounded-full px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold shadow hover:scale-105 transition">Subscribe</button>
            </form>
          </div>
        </div>
        {/* Trust Badges/Brand Logos Section (placeholder) */}
        <div ref={trustRef} className="w-full max-w-4xl mx-auto py-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-8 grayscale hover:grayscale-0 transition" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="h-8 grayscale hover:grayscale-0 transition" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/PayPal_Logo.png" alt="PayPal" className="h-8 grayscale hover:grayscale-0 transition" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/RuPay_Logo.png" alt="RuPay" className="h-8 grayscale hover:grayscale-0 transition" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Google_Pay_Logo.svg" alt="Google Pay" className="h-8 grayscale hover:grayscale-0 transition" />
          </div>
          <div className="flex gap-2 mt-2">
            <span className="inline-block bg-yellow-400/90 text-yellow-900 font-bold text-xs md:text-sm px-2 py-0.5 rounded shadow">100% Secure Payments</span>
            <span className="inline-block bg-yellow-400/90 text-yellow-900 font-bold text-xs md:text-sm px-2 py-0.5 rounded shadow">Trusted by 1M+ Customers</span>
          </div>
        </div>
        {/* Final Animated CTA Banner (placeholder) */}
        <div ref={ctaRef} className="w-full max-w-5xl mx-auto py-12 px-4 md:px-0 relative">
          <div className="absolute inset-0 -z-10">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24 md:h-32 lg:h-40">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current text-yellow-100" />
            </svg>
          </div>
          <div className="relative z-10 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 rounded-2xl shadow-lg p-8 flex flex-col items-center gap-4 border border-yellow-100">
            <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-700 bg-clip-text text-transparent mb-2 text-center">Ready to Shop the Best Deals?</h3>
            <p className="text-yellow-900 mb-4 text-center text-lg">Join ShopEase today and enjoy exclusive offers, fast delivery, and a premium shopping experience.</p>
            <a href="#" className="rounded-full px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold shadow hover:scale-105 transition text-lg">Start Shopping</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
