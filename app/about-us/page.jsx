"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Footer from '@/components/Footer';
gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const mainRef = useRef(null);
  const sectionsRef = useRef([]);

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
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    };

    animateSection(mainRef, 0);
    sectionsRef.current.forEach((section, index) => {
      animateSection(section, 0.1 * (index + 1));
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO & Founder',
      bio: 'E-commerce visionary with 15+ years of industry experience',
      avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Technology Officer',
      bio: 'Tech innovator specializing in scalable e-commerce solutions',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    {
      name: 'Arjun Patel',
      role: 'Marketing Director',
      bio: 'Digital marketing expert with a passion for brand storytelling',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    },
    {
      name: 'Ananya Reddy',
      role: 'Customer Experience Lead',
      bio: 'Dedicated to creating exceptional shopping journeys',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  ];

  const milestones = [
    { year: '2015', event: 'Founded with a vision to revolutionize e-commerce' },
    { year: '2017', event: 'Reached 1 million registered users' },
    { year: '2019', event: 'Expanded operations to 5 countries across Asia' },
    { year: '2020', event: 'Launched award-winning mobile app' },
    { year: '2022', event: 'Achieved $500M in annual sales' },
    { year: '2023', event: 'Recognized as "India\'s Most Innovative E-commerce Platform"' },
  ];

  return (
    <>
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-100 via-orange-50 to-yellow-100 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200/40 rounded-full blur-3xl z-0" style={{filter:'blur(80px)',top:'-6rem',left:'-6rem'}} />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl z-0" style={{filter:'blur(100px)',bottom:'-8rem',right:'-8rem'}} />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl z-0" style={{filter:'blur(90px)'}} />
      
      {/* Header */}
      <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-yellow-200 shadow-sm top-0">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-xl font-extrabold bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-700 bg-clip-text text-transparent">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              ShopEase
            </Link>
            <div className="flex space-x-4">
              <Link href="/" className="text-yellow-700 hover:text-yellow-900 font-medium">Home</Link>
              <Link href="/products" className="text-yellow-700 hover:text-yellow-900 font-medium">Products</Link>
              <Link href="/contact" className="text-yellow-700 hover:text-yellow-900 font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main ref={mainRef} className="relative z-10 max-w-7xl mx-auto px-4 pt-28 pb-16 flex-1">
        {/* Hero Section */}
        <section ref={addToRefs} className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-800 bg-clip-text text-transparent mb-6">
            Our Story, Values, and Vision
          </h1>
          <p className="text-lg lg:text-xl text-yellow-900 max-w-3xl mx-auto mb-8">
            Discover the passion and purpose behind ShopEase - India's fastest growing e-commerce platform
          </p>
          <div className="bg-white/80 backdrop-blur-md border border-yellow-200 rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
            <p className="text-yellow-900 text-lg lg:text-xl leading-relaxed">
              At ShopEase, we're revolutionizing online shopping by combining cutting-edge technology with 
              exceptional customer service. Founded in 2015, we've grown from a small startup to serving 
              over 10 million satisfied customers across India and beyond. Our mission is to make quality 
              products accessible to everyone, delivered with unparalleled convenience.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section ref={addToRefs} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-md border border-yellow-200 rounded-2xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-yellow-800">Our Mission</h2>
            </div>
            <p className="text-yellow-900 mb-4">
              To empower consumers with a seamless shopping experience that offers unparalleled choice, 
              competitive prices, and exceptional service - all delivered with speed and reliability.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-yellow-900">Democratize access to quality products</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-yellow-900">Create economic opportunities for sellers nationwide</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-yellow-900">Innovate constantly to exceed customer expectations</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/80 backdrop-blur-md border border-yellow-200 rounded-2xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-yellow-800">Our Vision</h2>
            </div>
            <p className="text-yellow-900 mb-4">
              To become India's most trusted and innovative e-commerce ecosystem that transforms how people 
              shop and how businesses grow in the digital economy.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-yellow-800 italic">
                "By 2030, we aim to serve 100 million customers while maintaining our commitment to 
                sustainability, innovation, and community impact."
              </p>
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section ref={addToRefs} className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-800 bg-clip-text text-transparent mb-3">
              Our Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-300 to-orange-400 z-0 hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative z-10 ${index % 2 === 0 ? 'md:pr-8 md:pl-0 md:text-right' : 'md:pl-8 md:pr-0'} md:w-1/2 mx-auto md:mx-0 ${index % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'}`}
                >
                  <div className="bg-white/80 backdrop-blur-md border border-yellow-200 rounded-2xl shadow-lg p-6 relative">
                    <div className="absolute top-6 -left-3 w-6 h-6 bg-yellow-400 rounded-full border-4 border-white hidden md:block"></div>
                    <div className="absolute top-6 -right-3 w-6 h-6 bg-yellow-400 rounded-full border-4 border-white hidden md:block md:hidden"></div>
                    <div className="md:hidden absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-white"></div>
                    
                    <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
                      <span className="text-2xl font-bold text-yellow-700 mb-2 md:mb-0 md:mr-4">{milestone.year}</span>
                      <h3 className="text-xl font-semibold text-yellow-800">{milestone.event}</h3>
                    </div>
                    <p className="text-yellow-900">
                      ShopEase reached this significant milestone through dedication to customer satisfaction 
                      and continuous innovation in our platform and services.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section ref={addToRefs} className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-800 bg-clip-text text-transparent mb-3">
              Our Core Values
            </h2>
            <p className="text-lg text-yellow-900 max-w-2xl mx-auto">
              These principles guide every decision we make at ShopEase
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Customer First', 
                icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
                description: 'We put customers at the center of everything we do, anticipating their needs and exceeding expectations.'
              },
              { 
                title: 'Integrity', 
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                description: 'We conduct business with honesty, transparency, and ethical practices at all times.'
              },
              { 
                title: 'Innovation', 
                icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
                description: 'We embrace change and constantly seek new ways to improve our platform and services.'
              },
              { 
                title: 'Excellence', 
                icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                description: 'We pursue the highest standards in quality, performance, and execution.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-md border border-yellow-200 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-yellow-800 mb-2">{value.title}</h3>
                <p className="text-yellow-900">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Team */}
        <section ref={addToRefs} className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-800 bg-clip-text text-transparent mb-3">
              Meet Our Leadership
            </h2>
            <p className="text-lg text-yellow-900 max-w-2xl mx-auto">
              The passionate team driving ShopEase forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-md border border-yellow-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-r from-yellow-300 to-orange-300 relative">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="w-32 h-32 rounded-full border-4 border-white object-cover absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
                  />
                </div>
                <div className="pt-16 pb-6 px-6 text-center">
                  <h3 className="text-xl font-bold text-yellow-800 mb-1">{member.name}</h3>
                  <p className="text-yellow-600 font-medium mb-3">{member.role}</p>
                  <p className="text-yellow-900 mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <a href="#" className="text-yellow-600 hover:text-yellow-800">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                      </svg>
                    </a>
                    <a href="#" className="text-yellow-600 hover:text-yellow-800">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a href="#" className="text-yellow-600 hover:text-yellow-800">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Impact & Stats */}
        <section ref={addToRefs} className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl shadow-xl p-8 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Our Impact</h2>
            <p className="text-yellow-100 max-w-2xl mx-auto">
              Numbers that showcase our growth and commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '10M+', label: 'Happy Customers' },
              { value: '2M+', label: 'Products Available' },
              { value: '500K+', label: 'Sellers Empowered' },
              { value: '98%', label: 'Customer Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="bg-white/90 rounded-xl p-6 text-center shadow-lg">
                <p className="text-3xl md:text-4xl font-bold text-yellow-700 mb-2">{stat.value}</p>
                <p className="text-yellow-900 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section ref={addToRefs} className="text-center">
          <div className="bg-white/80 backdrop-blur-md border border-yellow-200 rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-800 bg-clip-text text-transparent mb-4">
              Join Our Journey
            </h2>
            <p className="text-yellow-900 text-lg mb-6 max-w-2xl mx-auto">
              Whether you're a customer, seller, or potential team member, we invite you to be part of our 
              exciting journey to transform e-commerce in India.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/careers" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all hover:shadow-lg">
                Career Opportunities
              </Link>
              <Link href="/contact" className="bg-white border-2 border-yellow-500 text-yellow-700 hover:bg-yellow-50 font-semibold px-8 py-3 rounded-full shadow-md transition-all hover:shadow-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

    </div>
      <Footer/>
    </>
  );
}