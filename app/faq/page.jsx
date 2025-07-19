"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Footer from "@/components/Footer";
import TopNavBar from "@/components/TopNavBar";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "What is ShopEase?",
    a: "ShopEase is a premium e-commerce platform offering a curated selection of products, fast delivery, secure payments, and a seamless shopping experience. We combine cutting-edge technology with exceptional customer service to create the perfect online shopping destination.",
    category: "General",
  },
  {
    q: "How do I create an account?",
    a: "Click on the Account icon in the top right, then select 'Sign Up'. Fill in your details and verify your email to get started. Alternatively, you can sign up using your Google or Facebook account for faster registration.",
    category: "Account",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept credit/debit cards (Visa, Mastercard, American Express), UPI, net banking, PayPal, Google Pay, Apple Pay, and ShopEase Wallet. All payments are processed through secure, encrypted gateways for your safety.",
    category: "Payments",
  },
  {
    q: "How can I track my order?",
    a: "Go to 'My Orders' in your account dashboard. You'll see real-time tracking updates for each order. We also send SMS and email notifications at every stage of your delivery. For premium members, we offer live GPS tracking of your delivery.",
    category: "Orders",
  },
  {
    q: "What is your return policy?",
    a: "Most items can be returned within 30 days of delivery. Visit our Returns page for step-by-step instructions and eligibility details. We offer free return pickups for orders above ₹999. Refunds are processed within 3-5 business days.",
    category: "Returns",
  },
  {
    q: "How do I contact customer support?",
    a: "You can reach us 24/7 via live chat, email (support@shopease.com), or our toll-free number 1800-123-4567. For faster resolution, use our in-app support feature which connects you to a specialized agent based on your query.",
    category: "Support",
  },
  {
    q: "Are there any delivery charges?",
    a: "Delivery is free for orders above ₹499. For orders below that, a nominal shipping fee of ₹49 applies. Express delivery (within 24 hours) is available for an additional ₹99. We also offer free delivery on your first three orders!",
    category: "Delivery",
  },
  {
    q: "How do I use a promo code?",
    a: "Enter your promo code at checkout in the 'Apply Coupon' box. The discount will be applied instantly if valid. You can also browse available promo codes in the 'Offers' section of our app. Some codes have minimum purchase requirements.",
    category: "Promotions",
  },
  {
    q: "Is my personal information safe?",
    a: "Absolutely. We use 256-bit SSL encryption and never share your data with third parties without consent. Our security protocols are PCI-DSS compliant, ensuring the highest standards for payment security. Read our Privacy Policy for more details.",
    category: "Security",
  },
  {
    q: "Can I cancel or modify my order?",
    a: "You can cancel or modify your order from the 'My Orders' section until it is shipped. After shipping, cancellation is not possible. For modifications after shipping, contact our support team immediately - we'll do our best to accommodate your request.",
    category: "Orders",
  },
  {
    q: "Do you offer gift wrapping?",
    a: "Yes! Select 'Gift Wrap' at checkout for a beautifully wrapped package and a personalized message. We offer three premium wrapping options starting at ₹49. Gift receipts are included at no extra charge.",
    category: "Gifting",
  },
  {
    q: "How do I become a seller on ShopEase?",
    a: "Click 'Become a Seller' in the footer, fill out the registration form, and our team will guide you through onboarding. We offer special benefits for small businesses including zero commission for the first 3 months and free store setup assistance.",
    category: "Selling",
  },
  {
    q: "What are ShopEase Coins?",
    a: "ShopEase Coins are loyalty points you earn on every purchase (1 coin = ₹1). Earn 5 coins for every ₹100 spent. Redeem them for discounts and exclusive rewards! Coins never expire and can be combined with other offers.",
    category: "Rewards",
  },
  {
    q: "How do I subscribe to the newsletter?",
    a: "Scroll to the bottom of any page and enter your email in the 'Subscribe' box to get the latest deals and updates. You can customize your preferences in account settings to receive only the categories you're interested in.",
    category: "Communication",
  },
];

const categories = [
  "All",
  "General",
  "Account",
  "Payments",
  "Orders",
  "Delivery",
  "Returns",
  "Support",
  "Promotions",
  "Security",
  "Gifting",
  "Selling",
  "Rewards",
  "Communication",
];

export default function FAQPage() {
  const [open, setOpen] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const mainRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const animateSection = (ref, delay = 0) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    };

    animateSection(mainRef, 0);
    sectionsRef.current.forEach((section, index) => {
      animateSection(section, 0.1 * (index + 1));
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const handleToggle = (idx) => {
    setOpen(open === idx ? null : idx);
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch = faq.q
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-orange-50 to-yellow-100 flex flex-col relative">
      {/* Background decorative elements */}
      <div
        className="absolute top-0 left-0 w-72 h-72 bg-yellow-200/40 rounded-full blur-3xl z-0"
        style={{ filter: "blur(80px)", top: "-6rem", left: "-6rem" }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl z-0"
        style={{ filter: "blur(100px)", bottom: "-8rem", right: "-8rem" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl z-0"
        style={{ filter: "blur(90px)" }}
      />

      {/* Header */}
      <TopNavBar/>

      <main
        ref={mainRef}
        className="relative z-10 flex-1 w-full max-w-4xl mx-auto px-4 pt-28 pb-16"
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-800 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-yellow-900 max-w-2xl mx-auto">
            Find answers to the most common questions about shopping, orders,
            payments, and more on ShopEase.
          </p>
        </div>

        {/* Search and Filter Section */}
        <section
          ref={addToRefs}
          className="bg-white/80 backdrop-blur-md border border-yellow-200 rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full px-4 py-3 pl-12 rounded-lg border border-yellow-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-white/70"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-md"
                    : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section
          ref={addToRefs}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-white">10M+</div>
            <div className="text-yellow-100 text-sm">Happy Customers</div>
          </div>
          <div className="bg-gradient-to-r from-orange-400 to-pink-400 rounded-xl shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-yellow-100 text-sm">Customer Support</div>
          </div>
          <div className="bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-white">99.8%</div>
            <div className="text-yellow-100 text-sm">Issue Resolution Rate</div>
          </div>
          <div className="bg-gradient-to-r from-purple-400 to-indigo-400 rounded-xl shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-white">4.9/5</div>
            <div className="text-yellow-100 text-sm">Customer Rating</div>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={addToRefs} className="space-y-4 mb-10">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white/80 shadow border border-yellow-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  className="w-full flex justify-between items-center px-5 py-4 text-left focus:outline-none group"
                  onClick={() => handleToggle(idx)}
                  aria-expanded={open === idx}
                  aria-controls={`faq-panel-${idx}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-100 p-2 rounded-lg mt-1">
                      <svg
                        className="w-5 h-5 text-yellow-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-semibold bg-yellow-100 text-yellow-700 px-2 py-1 rounded mb-1 inline-block">
                        {faq.category}
                      </span>
                      <h3 className="font-semibold text-yellow-800 text-base sm:text-lg flex-1 pr-2 group-hover:text-yellow-900">
                        {faq.q}
                      </h3>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-yellow-500 transform transition-transform duration-300 ${
                      open === idx ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  id={`faq-panel-${idx}`}
                  className={`px-5 pb-5 text-yellow-900 text-sm sm:text-base transition-all duration-300 ease-in-out ${
                    open === idx
                      ? "max-h-96 opacity-100 pt-2"
                      : "max-h-0 opacity-0"
                  }`}
                  style={{ overflow: "hidden" }}
                  aria-hidden={open !== idx}
                >
                  <div className="border-l-2 border-yellow-300 pl-4">
                    {faq.a}
                  </div>
                  {open === idx && (
                    <div className="mt-4 flex items-center text-sm">
                      <svg
                        className="w-4 h-4 text-yellow-500 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-yellow-600">
                        Was this answer helpful?{" "}
                        <button className="text-yellow-700 font-medium hover:underline ml-2">
                          Yes
                        </button>{" "}
                        ·{" "}
                        <button className="text-yellow-700 font-medium hover:underline">
                          No
                        </button>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10">
              <svg
                className="w-16 h-16 mx-auto text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-yellow-800 mt-4">
                No questions found
              </h3>
              <p className="text-yellow-700 mt-2">
                Try another search term or category
              </p>
            </div>
          )}
        </section>

        {/* Support Section */}
        <section
          ref={addToRefs}
          className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl shadow-xl p-8 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-yellow-100 mb-6">
              Our customer success team is ready to assist you with any questions
              or concerns.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-yellow-700 font-semibold px-8 py-3 rounded-full shadow-md transition-all hover:bg-yellow-50 hover:shadow-lg"
              >
                Contact Support
              </Link>
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