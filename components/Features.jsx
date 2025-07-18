import { HiOutlineLightningBolt, HiOutlineDeviceMobile, HiOutlineShieldCheck, HiOutlineStar, HiOutlineTruck, HiOutlineRefresh } from 'react-icons/hi';

const features = [
  {
    icon: <HiOutlineLightningBolt className="w-7 h-7 text-yellow-500" />, title: 'Lightning Fast Delivery', desc: 'Get your products delivered at record speed, every time.'
  },
  {
    icon: <HiOutlineDeviceMobile className="w-7 h-7 text-yellow-500" />, title: 'Seamless Mobile Shopping', desc: 'Shop on the go with our intuitive, mobile-first experience.'
  },
  {
    icon: <HiOutlineShieldCheck className="w-7 h-7 text-yellow-500" />, title: '100% Secure Payments', desc: 'Your transactions are protected with industry-leading security.'
  },
  {
    icon: <HiOutlineStar className="w-7 h-7 text-yellow-500" />, title: 'Top-rated Products', desc: 'Handpicked bestsellers loved by thousands of customers.'
  },
  {
    icon: <HiOutlineTruck className="w-7 h-7 text-yellow-500" />, title: 'Free Shipping', desc: 'Enjoy free shipping on all orders above ₹499.'
  },
  {
    icon: <HiOutlineRefresh className="w-7 h-7 text-yellow-500" />, title: 'Easy Returns', desc: 'Hassle-free returns within 7 days for a worry-free experience.'
  },
];

export default function Features({ sectionRef }) {
  return (
    <section ref={sectionRef} className="w-full py-2 px-2 sm:px-4 md:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-5">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center bg-white/70 backdrop-blur-md border border-yellow-200 rounded-xl shadow p-3 sm:p-4 text-center hover:shadow-lg hover:border-yellow-400 transition-all duration-200">
            <span className="mb-2 flex items-center justify-center">{f.icon}</span>
            <h4 className="font-bold text-xs sm:text-sm md:text-base text-yellow-800 mb-1 leading-tight">{f.title}</h4>
            <p className="text-yellow-900 text-xs sm:text-sm leading-snug">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
