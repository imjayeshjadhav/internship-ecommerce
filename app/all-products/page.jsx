"use client"
import TopNavBar from '../../components/TopNavBar';
import Footer from '../../components/Footer';
import CategoryBar from '../../components/CategoryBar';
import SectionHeading from '../../components/SectionHeading';
import { useState, useEffect } from 'react';

// Mock wardrobe data
const wardrobes = [
    {
        id: 1,
        name: 'Wakefit Organza Plus Engineered Wood 4 Door Wardrobe',
        price: 21398,
        oldPrice: 23850,
        discount: 10,
        rating: 4.3,
        reviews: 1495,
        assured: true,
        image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        features: ['Columbian Walnut', 'Knock Down'],
        offer: 'Bank Offer',
        delivery: false,
      },
      {
        id: 2,
        name: 'Nilkamal WILLY Engineered Wood 3 Door Wardrobe',
        price: 14490,
        oldPrice: 27000,
        discount: 46,
        rating: 3.9,
        reviews: 2147,
        assured: false,
        image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        features: ['Wenge', 'Mirror Included', 'Knock Down'],
        offer: 'Bank Offer',
        delivery: false,
      },
      {
        id: 3,
        name: 'SIVOM SIVOM REDIM Multipurpose 3 Door Wardrobe With Dre...',
        price: 15643,
        oldPrice: 55999,
        discount: 72,
        rating: 2.5,
        reviews: 4,
        assured: false,
        image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        features: ['Dark Wenge', 'Mirror Included', 'Knock Down'],
        offer: 'Bank Offer',
        delivery: false,
      },
      {
        id: 4,
        name: 'Wakefit Gingham Engineered Wood 3 Door Wardrobe',
        price: 15099,
        oldPrice: 19100,
        discount: 20,
        rating: 4.3,
        reviews: 3470,
        assured: true,
        image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        features: ['Dark Brown with Drawer', 'Knock Down'],
        offer: 'Bank Offer',
        delivery: false,
      },
      {
        id: 5,
        name: 'Wakefit Organza Plus Engineered Wood 4 Door Wardrobe',
        price: 21398,
        oldPrice: 23850,
        discount: 10,
        rating: 4.3,
        reviews: 1495,
        assured: true,
        image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        features: ['Columbian Walnut', 'Knock Down'],
        offer: 'Bank Offer',
        delivery: false,
      },
      {
        id: 6,
        name: 'Nilkamal WILLY Engineered Wood 3 Door Wardrobe',
        price: 14490,
        oldPrice: 27000,
        discount: 46,
        rating: 3.9,
        reviews: 2147,
        assured: false,
        image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        features: ['Wenge', 'Mirror Included', 'Knock Down'],
        offer: 'Bank Offer',
        delivery: false,
      },
      {
        id: 7,
        name: 'SIVOM SIVOM REDIM Multipurpose 3 Door Wardrobe With Dre...',
        price: 15643,
        oldPrice: 55999,
        discount: 72,
        rating: 2.5,
        reviews: 4,
        assured: false,
        image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        features: ['Dark Wenge', 'Mirror Included', 'Knock Down'],
        offer: 'Bank Offer',
        delivery: false,
      },
      {
        id: 8,
        name: 'Wakefit Gingham Engineered Wood 3 Door Wardrobe',
        price: 15099,
        oldPrice: 19100,
        discount: 20,
        rating: 4.3,
        reviews: 3470,
        assured: true,
        image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        features: ['Dark Brown with Drawer', 'Knock Down'],
        offer: 'Bank Offer',
        delivery: false,
      },
];

// Reusable ProductCard component
function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col overflow-hidden group">
      <div className="relative w-full aspect-[4/3] bg-gray-50 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-72 group-hover:scale-105 transition-transform duration-300" 
        />
        {product.assured && (
          <span className="absolute top-2 left-2 bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full shadow">Assured</span>
        )}
      </div>
      <div className="flex-1 flex flex-col p-3 gap-1">
        <div className="font-semibold text-gray-900 text-sm line-clamp-2 min-h-[2.5em]">{product.name}</div>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-green-700 font-bold text-lg">₹{product.price.toLocaleString()}</span>
          {product.oldPrice && (
            <span className="text-gray-400 line-through text-xs">₹{product.oldPrice.toLocaleString()}</span>
          )}
          {product.discount && (
            <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">{product.discount}% off</span>
          )}
        </div>
        <div className="flex items-center gap-2 text-xs mt-1">
          <span className="bg-yellow-400 text-white font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
            <svg width="12" height="12" fill="currentColor" className="inline"><circle cx="6" cy="6" r="6" /></svg>
            {product.rating}
          </span>
          <span className="text-gray-500">({product.reviews})</span>
        </div>
        <div className="flex flex-wrap gap-1 mt-1">
          {product.features.map((f, i) => (
            <span key={i} className="bg-gray-100 text-gray-600 text-[11px] px-2 py-0.5 rounded-full">{f}</span>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-green-700 text-xs font-semibold">{product.offer}</span>
          {product.delivery && <span className="text-blue-600 text-xs font-semibold">Delivery in 1 day</span>}
        </div>
      </div>
    </div>
  );
}

// Product Skeleton Loader
function ProductSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col overflow-hidden animate-pulse">
      <div className="w-full aspect-[4/3] bg-gray-200"></div>
      <div className="flex-1 flex flex-col p-3 gap-3">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        <div className="h-3 bg-gray-200 rounded w-1/3"></div>
        <div className="flex gap-1 mt-1">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );
}

// Sidebar filter with enhancements
function SidebarFilter() {
  const [open, setOpen] = useState({
    discount: true,
    material: false,
    gst: false,
    availability: true,
  });
  const toggle = (key) => setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <aside className="hidden lg:block w-64 bg-white rounded-xl border border-gray-100 shadow-sm p-5 h-fit sticky top-28">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-lg text-gray-800">Filters</h3>
        <button className="text-sm text-blue-600 font-medium hover:text-blue-800">Reset</button>
      </div>
      
      {/* OFFERS */}
      <div className="mb-6 border-b pb-4">
        <div className="font-semibold text-gray-800 mb-2 flex items-center justify-between">
          <span>OFFERS</span>
        </div>
        <div className="flex flex-col gap-2 pl-1">
          <label className="flex items-center gap-2 text-gray-700 text-sm hover:text-gray-900 cursor-pointer">
            <input type="checkbox" className="accent-yellow-500 rounded" /> 
            No Cost EMI
          </label>
          <label className="flex items-center gap-2 text-gray-700 text-sm hover:text-gray-900 cursor-pointer">
            <input type="checkbox" className="accent-yellow-500 rounded" /> 
            Special Price
          </label>
          <label className="flex items-center gap-2 text-gray-400 text-sm cursor-not-allowed">
            <input type="checkbox" disabled className="rounded" /> 
            Buy More, Save More
          </label>
        </div>
      </div>
      
      {/* DISCOUNT */}
      <div className="mb-4 border-b pb-4">
        <button onClick={() => toggle('discount')} className="w-full flex items-center justify-between font-semibold text-gray-800 mb-2 focus:outline-none hover:text-gray-900">
          <span>DISCOUNT</span>
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`transition-transform ${open.discount ? 'rotate-180' : ''} text-gray-500`}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {open.discount && (
          <div className="pl-1 pb-2 text-gray-700 text-sm">
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer hover:text-gray-900">
                <input type="radio" name="discount" className="accent-yellow-500" /> 
                10% and above
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-gray-900">
                <input type="radio" name="discount" className="accent-yellow-500" /> 
                20% and above
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-gray-900">
                <input type="radio" name="discount" className="accent-yellow-500" /> 
                30% and above
              </label>
            </div>
          </div>
        )}
      </div>
      
      {/* Categories */}
      <div className="mb-6 border-b pb-4">
        <div className="font-semibold text-gray-700 mb-2">Categories</div>
        <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">Wardrobes & More</div>
      </div>
      
      {/* Price */}
      <div className="mb-6 border-b pb-4">
        <div className="font-semibold text-gray-700 mb-2">Price</div>
        <div className="px-1">
          <input type="range" min="5000" max="30000" defaultValue="15000" className="w-full accent-yellow-500" />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>₹5,000</span>
            <span>₹30,000+</span>
          </div>
        </div>
      </div>
      
      {/* Customer Ratings */}
      <div className="mb-6 border-b pb-4">
        <div className="font-semibold text-gray-700 mb-2">Customer Ratings</div>
        <div className="flex flex-col gap-2 pl-1">
          <label className="flex items-center gap-2 text-gray-700 text-sm hover:text-gray-900 cursor-pointer">
            <input type="checkbox" className="accent-yellow-500 rounded" /> 
            4★ & above
          </label>
          <label className="flex items-center gap-2 text-gray-700 text-sm hover:text-gray-900 cursor-pointer">
            <input type="checkbox" className="accent-yellow-500 rounded" /> 
            3★ & above
          </label>
        </div>
      </div>
      
      {/* Brand */}
      <div className="mb-6">
        <div className="font-semibold text-gray-700 mb-2">Brand</div>
        <input 
          type="text" 
          placeholder="Search brand" 
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300" 
        />
      </div>
    </aside>
  );
}

// Sorting options
const sortOptions = [
  'Popularity',
  'Price -- Low to High',
  'Price -- High to Low',
  'Newest First',
  'Discount',
];

export default function AllProductsPage() {
  const [sort, setSort] = useState(sortOptions[0]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-yellow-50">
      <TopNavBar />
      <CategoryBar />
      
      {/* Mobile Filter Button */}
      <div className="lg:hidden px-4 pt-3">
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className="w-full py-2 bg-white border border-gray-300 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      <main className="flex-1 w-full px-2 sm:px-4 py-6 flex flex-col lg:flex-row gap-6 mx-auto max-w-screen-2xl">
        {/* Sidebar - Desktop */}
        <SidebarFilter />
        
        {/* Mobile Filters */}
        {showFilters && (
          <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setShowFilters(false)}>
            <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-lg overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-xl">Filters</h3>
                  <button onClick={() => setShowFilters(false)} className="text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                {/* Simplified mobile filters content */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Price Range</h4>
                    <input type="range" className="w-full accent-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Customer Ratings</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2"><input type="checkbox" className="accent-yellow-500" /> 4★ & above</label>
                      <label className="flex items-center gap-2"><input type="checkbox" className="accent-yellow-500" /> 3★ & above</label>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Brand</h4>
                    <input type="text" placeholder="Search brands" className="w-full border rounded p-2" />
                  </div>
                </div>
                <div className="mt-8 flex gap-3">
                  <button className="flex-1 py-2 border border-gray-300 rounded font-medium">Reset</button>
                  <button 
                    onClick={() => setShowFilters(false)}
                    className="flex-1 py-2 bg-yellow-500 text-white rounded font-medium hover:bg-yellow-600"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main content */}
        <section className="flex-1 flex flex-col w-full">
          <SectionHeading title="Wardrobe" />
          
          {/* Sorting */}
          <div className="flex flex-wrap items-center gap-2 mb-4 px-1 text-sm">
            <span className="text-gray-600 font-medium">Sort By</span>
            {sortOptions.map(option => (
              <button
                key={option}
                onClick={() => setSort(option)}
                className={`px-3 py-1.5 rounded-full border transition-all font-semibold ${
                  sort === option 
                    ? 'bg-yellow-500 text-white border-yellow-500 shadow' 
                    : 'bg-white text-yellow-700 border-yellow-200 hover:bg-yellow-50'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          
          {/* Product grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
            {loading ? (
              // Show skeleton loaders while loading
              Array.from({ length: 8 }).map((_, idx) => (
                <ProductSkeleton key={idx} />
              ))
            ) : (
              // Show actual products when loaded
              wardrobes.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>
          
          {/* Load more button */}
          <div className="mt-8 flex justify-center">
            <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Load More Products
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}