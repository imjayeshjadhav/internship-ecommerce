"use client";
import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import TopNavBar from '@/components/TopNavBar';
import Footer from '@/components/Footer';
gsap.registerPlugin(ScrollTrigger);

export default function TermsAndConditions() {
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
              start: 'top 85%',
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

  // Smooth scroll with offset for Table of Contents
  const handleTocClick = useCallback((e, sectionId) => {
    e.preventDefault();
    const navbarHeight = 88; // px
    const el = document.getElementById(sectionId);
    if (el) {
      const rect = el.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const top = rect.top + scrollTop - navbarHeight - 12; // 12px extra for spacing
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <>
    <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-orange-50 to-yellow-100">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200/40 rounded-full blur-3xl z-0" style={{filter:'blur(80px)',top:'-6rem',left:'-6rem'}} />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl z-0" style={{filter:'blur(100px)',bottom:'-8rem',right:'-8rem'}} />
      
      {/* Navbar */}
      <TopNavBar/>

      {/* Main Content */}
      <main ref={mainRef} className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-800 bg-clip-text text-transparent mb-4">
            Terms and Conditions
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-yellow-900 max-w-4xl mx-auto">
            Please read these terms and conditions carefully before using ShopEase. By accessing and using our platform, you agree to be bound by these terms.
          </p>
          <div className="mt-6 text-sm md:text-base text-yellow-700">
            <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>

        {/* Table of Contents */}
        <div ref={addToRefs} className="bg-white/70 backdrop-blur-md border border-yellow-200 rounded-2xl p-6 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">Table of Contents</h2>
          <nav className="space-y-2 text-base md:text-lg lg:text-xl">
            {[
              'Acceptance of Terms',
              'Description of Service',
              'User Accounts and Registration',
              'Product Information and Pricing',
              'Ordering and Payment',
              'Shipping and Delivery',
              'Returns and Refunds',
              'Intellectual Property Rights',
              'User Conduct and Prohibited Activities',
              'Privacy and Data Protection',
              'Limitation of Liability',
              'Indemnification',
              'Termination',
              'Governing Law and Dispute Resolution',
              'Changes to Terms',
              'Contact Information'
            ].map((section, index) => (
              <a
                key={index}
                href={`#section-${index + 1}`}
                className="block text-yellow-700 hover:text-yellow-900 hover:bg-yellow-50 px-3 py-2 rounded-lg transition-colors cursor-pointer"
                onClick={e => handleTocClick(e, `section-${index + 1}`)}
              >
                {index + 1}. {section}
              </a>
            ))}
          </nav>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {/* Section 1: Acceptance of Terms */}
          <section ref={addToRefs} id="section-1" className="bg-white/70 backdrop-blur-md border border-yellow-200 rounded-2xl p-6 shadow-lg scroll-mt-[100px]">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">1. Acceptance of Terms</h2>
            <div className="space-y-4 text-yellow-900 text-base md:text-lg lg:text-xl">
              <p>
                By accessing and using ShopEase ("the Platform"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p>
                These Terms and Conditions ("Terms") govern your use of the ShopEase website, mobile application, and any related services (collectively, the "Service") operated by ShopEase Internet Private Limited ("we," "us," or "our").
              </p>
              <p>
                Your continued use of the Service after any such changes constitutes your acceptance of the new Terms. If you do not agree to any of these terms or any future version of the Terms, do not use or access (or continue to access) the Service.
              </p>
            </div>
          </section>

          {/* Section 2: Description of Service */}
          <section ref={addToRefs} id="section-2" className="bg-white/70 backdrop-blur-md border border-yellow-200 rounded-2xl p-6 shadow-lg scroll-mt-[100px]">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">2. Description of Service</h2>
            <div className="space-y-4 text-yellow-900 text-base md:text-lg lg:text-xl">
              <p>
                ShopEase is an e-commerce platform that provides users with access to a wide range of products and services. Our platform facilitates:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base md:text-lg lg:text-xl">
                <li>Online shopping for various product categories</li>
                <li>Secure payment processing</li>
                <li>Order tracking and management</li>
                <li>Customer support services</li>
                <li>Product reviews and ratings</li>
                <li>Personalized recommendations</li>
                <li>Loyalty programs and rewards</li>
              </ul>
              <p>
                We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, including the availability of any feature, database, or content.
              </p>
            </div>
          </section>

          {/* Section 3: User Accounts and Registration */}
          <section ref={addToRefs} id="section-3" className="bg-white/70 backdrop-blur-md border border-yellow-200 rounded-2xl p-6 shadow-lg scroll-mt-[100px]">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">3. User Accounts and Registration</h2>
            <div className="space-y-4 text-yellow-900 text-base md:text-lg lg:text-xl">
              <p>
                To access certain features of the Service, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
              </p>
              <p>
                You are responsible for safeguarding the password and for all activities that occur under your account. You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions under your account.
              </p>
              <p>
                You must be at least 18 years old to create an account. If you are under 18, you may only use the Service with the involvement of a parent or guardian.
              </p>
              <p>
                We reserve the right to terminate accounts, remove or edit content, or cancel orders at our sole discretion.
              </p>
            </div>
          </section>

          {/* Section 4: Product Information and Pricing */}
          <section ref={addToRefs} id="section-4" className="bg-white/70 backdrop-blur-md border border-yellow-200 rounded-2xl p-6 shadow-lg scroll-mt-[100px]">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">4. Product Information and Pricing</h2>
            <div className="space-y-4 text-yellow-900 text-base md:text-lg lg:text-xl">
              <p>
                We strive to provide accurate product information, including descriptions, images, and pricing. However, we do not warrant that product descriptions, colors, information, or other content available on the Service is accurate, complete, reliable, current, or error-free.
              </p>
              <p>
                All prices are subject to change without notice. Prices do not include applicable taxes, shipping charges, or other fees that may be added to your order.
              </p>
              <p>
                Product availability is not guaranteed. We reserve the right to discontinue any product at any time and to limit quantities of any products.
              </p>
              <p>
                In the event of a pricing error, we reserve the right to cancel orders and provide a full refund.
              </p>
            </div>
          </section>

          {/* Section 5: Ordering and Payment */}
          <section ref={addToRefs} id="section-5" className="bg-white/70 backdrop-blur-md border border-yellow-200 rounded-2xl p-6 shadow-lg scroll-mt-[100px]">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">5. Ordering and Payment</h2>
            <div className="space-y-4 text-yellow-900 text-base md:text-lg lg:text-xl">
              <p>
                By placing an order, you offer to purchase the product at the price listed. We reserve the right to accept or decline your order for any reason, including but not limited to product availability, errors in pricing or product information, or issues with your account.
              </p>
              <p>
                We accept various payment methods including credit cards, debit cards, digital wallets, and other payment methods as may be available from time to time. All payments must be made in the currency specified on the Service.
              </p>
              <p>
                You represent and warrant that you have the legal right to use any payment method you provide. You authorize us to charge your payment method for the total amount of your order.
              </p>
              <p>
                Orders are not confirmed until payment is successfully processed and we send you an order confirmation email.
              </p>
            </div>
          </section>

          {/* Section 6: Shipping and Delivery */}
          <section ref={addToRefs} id="section-6" className="bg-white/70 backdrop-blur-md border border-yellow-200 rounded-2xl p-6 shadow-lg scroll-mt-[100px]">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">6. Shipping and Delivery</h2>
            <div className="space-y-4 text-yellow-900 text-base md:text-lg lg:text-xl">
              <p>
                We offer various shipping options with different delivery times and costs. Shipping costs and delivery times are estimates only and may vary based on your location, product availability, and other factors.
              </p>
              <p>
                Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier. We are not responsible for any damage or loss that occurs during shipping.
              </p>
              <p>
                Delivery dates are estimates only. We are not liable for any delays in delivery beyond our control, including but not limited to weather conditions, carrier delays, or customs issues.
              </p>
              <p>
                You are responsible for providing accurate shipping information. We are not responsible for delays or non-delivery due to incorrect or incomplete shipping information.
              </p>
            </div>
          </section>

          {/* Section 7: Returns and Refunds */}
          <section ref={addToRefs} id="section-7" className="bg-white/70 backdrop-blur-md border border-yellow-200 rounded-2xl p-6 shadow-lg scroll-mt-[100px]">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">7. Returns and Refunds</h2>
            <div className="space-y-4 text-yellow-900 text-base md:text-lg lg:text-xl">
              <p>
                We want you to be completely satisfied with your purchase. If you are not satisfied, you may return most items within 30 days of delivery for a full refund or exchange.
              </p>
              <p>
                To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
              </p>
              <p>
                Certain items are not eligible for return, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base md:text-lg lg:text-xl">
                <li>Personal care items</li>
                <li>Digital downloads</li>
                <li>Gift cards</li>
                <li>Items marked as non-returnable</li>
                <li>Items that have been used or damaged</li>
              </ul>
              <p>
                Refunds will be processed within 5-7 business days after we receive and inspect your return. The refund will be credited to your original payment method.
              </p>
            </div>
          </section>

          {/* Section 8: Intellectual Property Rights */}
          <section ref={addToRefs} id="section-8" className="bg-white/70 backdrop-blur-md border border-yellow-200 rounded-2xl p-6 shadow-lg scroll-mt-[100px]">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">8. Intellectual Property Rights</h2>
            <div className="space-y-4 text-yellow-900 text-base md:text-lg lg:text-xl">
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of ShopEase and its licensors. The Service is protected by copyright, trademark, and other laws.
              </p>
              <p>
                Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
              </p>
              <p>
                You retain ownership of any content you submit, post, or display on or through the Service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute such content.
              </p>
              <p>
                You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service without our express written permission.
              </p>
            </div>
          </section>

          {/* Section 9: User Conduct and Prohibited Activities */}
          <section ref={addToRefs} id="section-9" className="bg-white/70 backdrop-blur-md border border-yellow-200 rounded-2xl p-6 shadow-lg scroll-mt-[100px]">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">9. User Conduct and Prohibited Activities</h2>
            <div className="space-y-4 text-yellow-900 text-base md:text-lg lg:text-xl">
              <p>
                You agree not to use the Service to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base md:text-lg lg:text-xl">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the Service</li>
                <li>Use automated systems to access the Service</li>
                <li>Create multiple accounts for fraudulent purposes</li>
                <li>Engage in any form of harassment or abuse</li>
              </ul>
              <p>
                We reserve the right to investigate and take appropriate action against anyone who violates these terms, including removing content, suspending or terminating accounts, and reporting violations to law enforcement.
              </p>
            </div>
          </section>

          {/* Section 10: Privacy and Data Protection */}
          <section ref={addToRefs} id="section-10" className="bg-white/70 backdrop-blur-md border border-yellow-200 rounded-2xl p-6 shadow-lg scroll-mt-[100px]">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">10. Privacy and Data Protection</h2>
            <div className="space-y-4 text-yellow-900 text-base md:text-lg lg:text-xl">
              <p>
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              <p>
                By using the Service, you consent to the collection and use of your information as described in our Privacy Policy.
              </p>
              <p>
                We implement appropriate security measures to protect your personal information, but no method of transmission over the internet is 100% secure.
              </p>
              <p>
                You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
              </p>
            </div>
          </section>

          {/* Section 11: Limitation of Liability */}
          <section ref={addToRefs} id="section-11" className="bg-white/70 backdrop-blur-md border border-yellow-200 rounded-2xl p-6 shadow-lg scroll-mt-[100px]">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">11. Limitation of Liability</h2>
            <div className="space-y-4 text-yellow-900 text-base md:text-lg lg:text-xl">
              <p>
                To the maximum extent permitted by law, ShopEase shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses.
              </p>
              <p>
                Our total liability to you for any claims arising from the use of the Service shall not exceed the amount you paid us in the 12 months preceding the claim.
              </p>
              <p>
                Some jurisdictions do not allow the exclusion or limitation of liability for consequential or incidental damages, so the above limitation may not apply to you.
              </p>
              <p>
                We do not warrant that the Service will be uninterrupted, secure, or error-free.
              </p>
            </div>
          </section>

          {/* Section 12: Indemnification */}
          <section ref={addToRefs} id="section-12" className="bg-white/70 backdrop-blur-md border border-yellow-200 rounded-2xl p-6 shadow-lg scroll-mt-[100px]">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">12. Indemnification</h2>
            <div className="space-y-4 text-yellow-900 text-base md:text-lg lg:text-xl">
              <p>
                You agree to defend, indemnify, and hold harmless ShopEase and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base md:text-lg lg:text-xl">
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Any content you submit to the Service</li>
              </ul>
              <p>
                This indemnification obligation will survive the termination of these Terms and your use of the Service.
              </p>
            </div>
          </section>

          {/* Section 13: Termination */}
          <section ref={addToRefs} id="section-13" className="bg-white/70 backdrop-blur-md border border-yellow-200 rounded-2xl p-6 shadow-lg scroll-mt-[100px]">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">13. Termination</h2>
            <div className="space-y-4 text-yellow-900 text-base md:text-lg lg:text-xl">
              <p>
                We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p>
                Upon termination, your right to use the Service will cease immediately. If you wish to terminate your account, you may simply discontinue using the Service.
              </p>
              <p>
                All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </div>
          </section>

          {/* Section 14: Governing Law and Dispute Resolution */}
          <section ref={addToRefs} id="section-14" className="bg-white/70 backdrop-blur-md border border-yellow-200 rounded-2xl p-6 shadow-lg scroll-mt-[100px]">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">14. Governing Law and Dispute Resolution</h2>
            <div className="space-y-4 text-yellow-900 text-base md:text-lg lg:text-xl">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration in accordance with the Arbitration and Conciliation Act, 1996.
              </p>
              <p>
                The seat of arbitration shall be Bengaluru, Karnataka, India. The language of arbitration shall be English.
              </p>
              <p>
                You agree to waive any right to a jury trial or to participate in a class action lawsuit.
              </p>
            </div>
          </section>

          {/* Section 15: Changes to Terms */}
          <section ref={addToRefs} id="section-15" className="bg-white/70 backdrop-blur-md border border-yellow-200 rounded-2xl p-6 shadow-lg scroll-mt-[100px]">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">15. Changes to Terms</h2>
            <div className="space-y-4 text-yellow-900 text-base md:text-lg lg:text-xl">
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
              <p>
                What constitutes a material change will be determined at our sole discretion. We will notify users of any material changes by posting the new Terms on this page and updating the "Last updated" date.
              </p>
              <p>
                Your continued use of the Service after any such changes constitutes your acceptance of the new Terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
              </p>
            </div>
          </section>

          {/* Section 16: Contact Information */}
          <section ref={addToRefs} id="section-16" className="bg-white/70 backdrop-blur-md border border-yellow-200 rounded-2xl p-6 shadow-lg scroll-mt-[100px]">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">16. Contact Information</h2>
            <div className="space-y-4 text-yellow-900 text-base md:text-lg lg:text-xl">
              <p>
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p><strong>ShopEase Internet Private Limited</strong></p>
                <p>123, Main Street, Tech Park</p>
                <p>Bengaluru, 560103</p>
                <p>Karnataka, India</p>
                <p className="mt-2">
                  <strong>Email:</strong> legal@shopease.com<br />
                  <strong>Phone:</strong> +91-80-4561-4700<br />
                  <strong>Website:</strong> www.shopease.com
                </p>
              </div>
              <p>
                For customer support inquiries, please visit our Help Center or contact our customer service team.
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
      </main>
    </div>
        <Footer/>
    </>
  );
}
