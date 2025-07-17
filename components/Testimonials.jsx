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
];

export default function Testimonials({ sectionRef }) {
  return (
    <section ref={sectionRef} className="w-full max-w-7xl mx-auto py-12 px-4 md:px-0">
      <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-700 bg-clip-text text-transparent mb-8 text-center">What Our Customers Say</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="flex flex-col items-center bg-white/80 backdrop-blur-md border border-yellow-100 rounded-2xl shadow-lg p-6 text-center">
            <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mb-3 border-4 border-yellow-200 object-cover" />
            <p className="text-yellow-900 italic mb-2">“{t.text}”</p>
            <span className="font-bold text-yellow-700">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
