"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Footer from '@/components/Footer';
import TopNavBar from '@/components/TopNavBar';
gsap.registerPlugin(ScrollTrigger);

export default function ContactUs() {
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

  return (
    <>
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-100 via-orange-50 to-yellow-100 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200/40 rounded-full blur-3xl z-0" style={{filter:'blur(80px)',top:'-6rem',left:'-6rem'}} />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl z-0" style={{filter:'blur(100px)',bottom:'-8rem',right:'-8rem'}} />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl z-0" style={{filter:'blur(90px)'}} />
      
      <TopNavBar/>

      {/* Main Content */}
      <main ref={mainRef} className="relative z-10 max-w-7xl mx-auto px-4 py-10 flex-1">
        {/* Hero Section */}
        <section ref={addToRefs} className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-extrabold bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-800 bg-clip-text text-transparent mb-6">
            We'd Love to Hear From You
          </h1>
          <p className="text-lg lg:text-xl text-yellow-900 max-w-3xl mx-auto mb-8">
            Whether you have questions, feedback, or partnership opportunities, our team is ready to assist you.
          </p>
          <div className="bg-white/80 backdrop-blur-md border border-yellow-200 rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
            <p className="text-yellow-900 text-lg lg:text-xl leading-relaxed">
              At ShopEase, customer satisfaction is our top priority. Our dedicated support team is available 
              7 days a week to ensure your shopping experience is seamless and enjoyable. We value your feedback 
              and are committed to resolving any concerns promptly.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section ref={addToRefs} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-md border border-yellow-200 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-yellow-800">Call Us</h2>
            </div>
            <p className="text-yellow-900 mb-2">
              Speak directly with our customer support team:
            </p>
            <p className="text-xl font-semibold text-yellow-700 mb-1">+91 98765 43210</p>
            <p className="text-sm text-yellow-600">Monday to Friday: 9AM - 8PM</p>
            <p className="text-sm text-yellow-600">Saturday & Sunday: 10AM - 6PM</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-md border border-yellow-200 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-yellow-800">Email Us</h2>
            </div>
            <p className="text-yellow-900 mb-2">
              Send us an email and we'll respond within 24 hours:
            </p>
            <p className="text-xl font-semibold text-yellow-700 mb-1">support@shopease.in</p>
            <p className="text-sm text-yellow-600">For general inquiries</p>
            <p className="text-xl font-semibold text-yellow-700 mt-3 mb-1">business@shopease.in</p>
            <p className="text-sm text-yellow-600">For partnership opportunities</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-md border border-yellow-200 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-yellow-800">Visit Us</h2>
            </div>
            <p className="text-yellow-900 mb-2">
              Our headquarters in Bangalore:
            </p>
            <p className="text-yellow-700 font-medium">
              ShopEase Corporate Office<br />
              Level 5, Tech Hub Tower<br />
              123 Innovation Road<br />
              Whitefield, Bangalore<br />
              Karnataka 560066
            </p>
            <p className="text-sm text-yellow-600 mt-3">Appointment required for in-person visits</p>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section ref={addToRefs} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-md border border-yellow-200 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-yellow-800 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-yellow-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-yellow-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-white/70"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-yellow-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-yellow-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-white/70"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-yellow-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-yellow-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-white/70"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-yellow-700 mb-1">Your Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-yellow-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-white/70"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all hover:shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          {/* Map & Additional Info */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-md border border-yellow-200 rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-yellow-800 mb-3">Our Location</h3>
                <p className="text-yellow-700 mb-4">
                  Visit our headquarters in Bangalore's tech hub. We're conveniently located with 
                  easy access to public transportation.
                </p>
                <div className="flex items-center text-sm text-yellow-600 mb-1">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Open: Mon-Fri 9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center text-sm text-yellow-600">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Whitefield Metro Station: 5 min walk</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl shadow-xl p-6">
              <div className="flex items-center mb-4">
                <div className="bg-white p-2 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">24/7 Chat Support</h3>
              </div>
              <p className="text-yellow-100 mb-4">
                Need immediate assistance? Chat with our virtual assistant or connect with a live agent anytime.
              </p>
              <button className="bg-white text-yellow-700 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-50 transition-colors">
                Start Chat Now
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={addToRefs} className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-800 bg-clip-text text-transparent mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-yellow-900 max-w-2xl mx-auto">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-md border border-yellow-200 rounded-2xl shadow-lg p-6">
            <div className="space-y-4">
              {[
                {
                  question: "How long does it take to get a response to my inquiry?",
                  answer: "We strive to respond to all customer inquiries within 24 hours during business days. For urgent matters, we recommend calling our customer support line for immediate assistance."
                },
                {
                  question: "Can I schedule a call with your support team?",
                  answer: "Yes, you can schedule a callback by visiting our support portal. Simply select your preferred time slot and provide your contact details, and our representative will call you at the scheduled time."
                },
                {
                  question: "What information should I include in my support request?",
                  answer: "Please include your order number (if applicable), a detailed description of your inquiry or issue, and any relevant screenshots or documentation. This helps us resolve your request more efficiently."
                },
                {
                  question: "Do you have international support numbers?",
                  answer: "Currently, we provide dedicated support numbers for India, Singapore, UAE, and the United States. For other countries, please use our international toll-free number or contact us via email."
                },
                {
                  question: "How can I provide feedback about your service?",
                  answer: "We welcome all feedback! You can share your experience through our feedback form, via email at feedback@shopease.in, or by speaking directly with our customer support team."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-yellow-100 pb-4 last:border-b-0">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">{faq.question}</h3>
                  <p className="text-yellow-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section ref={addToRefs} className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-800 bg-clip-text text-transparent mb-3">
              Additional Support Channels
            </h2>
            <p className="text-lg text-yellow-900 max-w-2xl mx-auto">
              Connect with us through your preferred method
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Help Center', 
                icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
                description: 'Browse our comprehensive knowledge base for answers to common questions',
                action: 'Visit Help Center'
              },
              { 
                title: 'Community Forum', 
                icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
                description: 'Join discussions with other ShopEase customers and experts',
                action: 'Join Community'
              },
              { 
                title: 'Social Media', 
                icon: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z',
                description: 'Connect with us on social media for updates and support',
                action: 'Follow Us'
              },
              { 
                title: 'Business Inquiries', 
                icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
                description: 'For partnership and corporate inquiries',
                action: 'Contact Business Team'
              }
            ].map((channel, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-md border border-yellow-200 rounded-2xl shadow-lg p-6 flex flex-col hover:shadow-xl transition-shadow">
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={channel.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-yellow-800 mb-2">{channel.title}</h3>
                <p className="text-yellow-900 mb-4 flex-grow">{channel.description}</p>
                <button className="text-yellow-700 font-medium hover:text-yellow-900 flex items-center">
                  {channel.action}
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section ref={addToRefs} className="text-center">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Still Need Help?</h2>
            <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
              Our customer success team is ready to assist you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-yellow-700 font-semibold px-8 py-3 rounded-full shadow-md transition-all hover:bg-yellow-50 hover:shadow-lg">
                Call Now: +91 98765 43210
              </button>
              <button className="bg-yellow-900/80 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all hover:bg-yellow-900 hover:shadow-lg">
                Schedule a Callback
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
        <Footer/>
    </>
  );
}