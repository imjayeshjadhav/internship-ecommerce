import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const defaultImages = [
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
];

const slidesContent = [
  {
    headline: "Modern Design Solutions",
    sub: "Transform your digital experience with our cutting-edge designs",
    cta: "Explore Portfolio",
    link: "#"
  },
  {
    headline: "Professional Development",
    sub: "Expert solutions tailored to your business needs",
    cta: "View Services",
    link: "#"
  },
  {
    headline: "Innovative Approach",
    sub: "Staying ahead with the latest technologies and design trends",
    cta: "Learn More",
    link: "#"
  }
];

export default function EnhancedCarousel() {
  return (
    <div className="w-full">
      <Carousel images={defaultImages} slidesContent={slidesContent} />
    </div>
  );
}

function Carousel({ images = defaultImages, slidesContent = [] }) {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const imgRef = useRef(null);
  const progressRef = useRef(null);
  const contentRef = useRef(null);
  const intervalRef = useRef(null);

  // Animation on slide change
  useEffect(() => {
    const img = imgRef.current;
    const content = contentRef.current;
    
    gsap.killTweensOf([img, content]);
    
    const tl = gsap.timeline();
    tl.to(img, { opacity: 0, scale: 1.02, duration: 0.3 })
      .to(content, { opacity: 0, y: 20, duration: 0.2 }, 0)
      .to(img, { opacity: 1, scale: 1, duration: 0.7, delay: 0.1, ease: 'power2.out' })
      .to(content, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4');
    
    return () => tl.kill();
  }, [current]);

  // Progress bar animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(progressRef.current, {
      width: '100%',
      duration: 3.5,
      ease: 'linear',
      onComplete: () => setProgress(0)
    });
    
    return () => tl.kill();
  }, [current]);

  // Auto slide interval
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setProgress(0);
    }, 3500);
    
    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  // Reset progress on manual slide change
  const resetProgress = () => {
    setProgress(0);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setProgress(0);
    }, 3500);
  };

  const goTo = (idx) => {
    setCurrent(idx);
    resetProgress();
  };
  
  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    resetProgress();
  };
  
  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    resetProgress();
  };

  const content = slidesContent[current % slidesContent.length] || {};

  return (
    <div className="w-full aspect-[16/8] sm:aspect-[16/7] md:aspect-[16/6] lg:aspect-[16/5] rounded-none md:rounded-3xl overflow-hidden shadow-2xl relative group min-h-[320px] sm:min-h-[420px] md:min-h-[420px] lg:min-h-[480px] max-h-[700px]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          ref={imgRef}
          src={images[current]}
          alt={`Carousel ${current + 1}`}
          className="object-cover w-full h-full"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/40 to-transparent"></div>
      </div>
      {/* Overlay content */}
      <div 
        ref={contentRef}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-2 sm:px-8 md:px-16"
      >
        <div className="max-w-3xl w-full">
          {content.headline && (
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-5 drop-shadow-lg">
              {content.headline}
            </h2>
          )}
          {content.sub && (
            <p className="text-base sm:text-lg md:text-2xl text-gray-100 mb-4 md:mb-8 max-w-2xl mx-auto">
              {content.sub}
            </p>
          )}
          {content.cta && (
            <a 
              href={content.link || '#'} 
              className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold px-8 py-3 md:px-12 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg md:text-2xl"
            >
              {content.cta}
            </a>
          )}
        </div>
      </div>
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-700/30">
        <div 
          ref={progressRef}
          className="h-full bg-gradient-to-r from-yellow-400 to-orange-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {/* Arrows */}
      <button 
        onClick={prev} 
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-full shadow-lg p-2 sm:p-3 md:p-4 hover:bg-gray-900 transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={next} 
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-full shadow-lg p-2 sm:p-3 md:p-4 hover:bg-gray-900 transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer transition-all duration-300 ${
              current === idx 
                ? 'bg-gradient-to-r from-yellow-400 to-orange-500 transform scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}