// src/app/product/[id]/page.jsx
"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaStar, FaStarHalfAlt, FaRegStar, FaChevronRight, FaTruck, FaCalendarAlt, FaShieldAlt, FaPlayCircle } from 'react-icons/fa';
import Footer from '@/components/Footer';
import TopNavBar from '@/components/TopNavBar';
import CategoryBar from '@/components/CategoryBar';
import SectionHeading from '@/components/SectionHeading';
import gsap from 'gsap';

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const router = useRouter();
  
  // Product data - would normally come from API
  const product = {
    id: "wf-organza-plus",
    title: "Wakefit Organza Plus Engineered Wood 4 Door Wardrobe",
    subtitle: "Finish Color - Columbian Walnut, Knock Down",
    price: 21398,
    originalPrice: 29950,
    discount: 10,
    rating: 4.3,
    reviews: 1495,
    ratingsCount: 295,
    assured: true,
    deliveryDate: "3 Aug, Sunday",
    installationDate: "5 Aug, Tuesday",
    features: [
      "Columbian Walnut finish",
      "Knock Down design for easy assembly",
      "4 sliding doors for space efficiency",
      "Engineered wood construction",
      "Spacious storage compartments"
    ],
    description: "The Wakefit Organza Plus Wardrobe is a premium storage solution that combines elegance with functionality. Crafted from high-quality engineered wood with a Columbian Walnut finish, this wardrobe features four sliding doors that save space and provide easy access to your belongings. The knock-down design ensures hassle-free assembly and transportation.",
    specifications: [
      { name: "Brand", value: "Wakefit" },
      { name: "Material", value: "Engineered Wood" },
      { name: "Color", value: "Columbian Walnut" },
      { name: "Wardrobe Type", value: "Freestanding Wardrobe" },
      { name: "Door Type", value: "Sliding Door" },
      { name: "Number of Doors", value: "4" },
      { name: "Assembly Type", value: "Knock Down" },
      { name: "Dimensions", value: "200cm (H) x 180cm (W) x 60cm (D)" }
    ],
    images: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1616627981481-8d816caa0e6b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  };

  // Offers data
  const offers = [
    {
      title: "Bank Offer 5% cashback",
      description: "on FlyMart Axis Bank Credit Card upto ₹4,000 per statement quarter T&C"
    },
    {
      title: "Bank Offer 5% cashback",
      description: "on Axis Bank FlyMart Debit Card up to ₹750 T&C"
    },
    {
      title: "Bank Offer 10% off",
      description: "up to ₹1,250 on Axis Bank Credit Card Tons, Min Ton Value: ₹4,990 T&C"
    },
    {
      title: "Partner Offer Flat ₹1000 Off",
      description: "on Min. Ton. of ₹15K | ₹1500 Off on Min. Ton. of ₹25K | ₹2000 Off on Min. Ton. 35K Know More"
    }
  ];

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Furniture", path: "/category/furniture" },
    { name: "Wardrobes & Storage", path: "/category/furniture/wardrobes" },
    { name: "Wardrobes", path: "/category/furniture/wardrobes" },
    { name: "Wakefit Wardrobes", path: "/brand/wakefit" },
    { name: "Wakefit Organza Plus", path: "" }
  ];

  // Render star ratings
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
    }
    
    return stars;
  };

  // Handle quantity changes
  const handleQuantityChange = (change) => {
    setQuantity(prev => {
      const newQuantity = prev + change;
      return newQuantity < 1 ? 1 : newQuantity;
    });
  };

  // Mock recommendations (reuse product images)
  const recommendations = product.images.map((img, i) => ({
    id: i,
    name: `Recommended Wardrobe ${i + 1}`,
    price: 15999 + i * 1000,
    oldPrice: 19999 + i * 1000,
    discount: 20,
    rating: 4.2,
    reviews: 120 + i * 10,
    assured: i % 2 === 0,
    image: img,
    features: ['Engineered Wood', 'Knock Down'],
    offer: 'Bank Offer',
    delivery: false,
  }));

  // Inline ProductCard for recommendations
  function ProductCard({ product, className = '', style = {} }) {
    return (
      <div className={`bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col overflow-hidden group ${className}`} style={style}>
        <div className="relative w-full aspect-[4/3] bg-gray-50 flex items-center justify-center">
          <img src={product.image} alt={product.name} className="object-cover w-full h-72 group-hover:scale-105 transition-transform duration-300" />
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

  // GSAP animation effect
  useEffect(() => {
    // Main product section
    gsap.from('.gsap-main-section', {
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: 'power3.out',
    });
    // Product image
    gsap.from('.gsap-product-image', {
      opacity: 0,
      y: 40,
      duration: 0.7,
      delay: 0.15,
      ease: 'power3.out',
    });
    // Product details
    gsap.from('.gsap-product-details', {
      opacity: 0,
      y: 40,
      duration: 0.7,
      delay: 0.3,
      ease: 'power3.out',
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-yellow-50 w-full overflow-x-hidden">
      <TopNavBar />
      <CategoryBar />
      {/* Breadcrumbs */}
      <div className="w-full px-2 sm:px-4 lg:mx-[50px] pt-4 pb-2">
        <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-1 overflow-x-auto">
            {breadcrumbs.map((item, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && <FaChevronRight className="h-3 w-3 text-gray-400 mx-1" />}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-gray-700 font-medium">{item.name}</span>
                ) : (
                  <a href={item.path} className="hover:text-yellow-600">
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
      {/* Main Product Section */}
      <main className="w-full px-2 sm:px-4 lg:mx-[50px] py-6 flex flex-col gap-8">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 md:p-8 flex flex-col lg:flex-row gap-8 gsap-main-section">
          {/* Product Images */}
          <div className="flex-1 min-w-[320px] max-w-lg mx-auto lg:mx-0 gsap-product-image">
            <div className="rounded-lg overflow-hidden bg-gray-50 aspect-square flex items-center justify-center">
              <img 
                src={product.images[selectedImage]} 
                alt={product.title} 
                className="object-contain w-full h-full" 
              />
            </div>
            <div className="flex mt-4 space-x-3 overflow-x-auto py-2">
              {product.images.map((img, index) => (
                <button 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${selectedImage === index ? 'border-yellow-500' : 'border-gray-200'}`}
                >
                  <img 
                    src={img} 
                    alt={`Thumbnail ${index + 1}`} 
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-center">
              <button className="flex items-center text-yellow-600 font-medium hover:underline">
                <FaPlayCircle className="mr-2 text-xl" />
                Watch Video
              </button>
            </div>
          </div>
          {/* Product Details */}
          <div className="flex-1 min-w-[320px] gsap-product-details">
            <SectionHeading title={product.title} />
            <p className="text-gray-600 mt-1 text-base font-medium">{product.subtitle}</p>
            <div className="mt-4 flex items-center flex-wrap gap-2">
              <div className="flex items-center bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                {renderStars()}
                <span className="ml-2 font-medium">{product.rating}</span>
              </div>
              <span className="mx-2 text-gray-400">|</span>
              <span className="text-gray-600">{product.reviews.toLocaleString()} Ratings & {product.ratingsCount} Reviews</span>
              {product.assured && (
                <span className="ml-4 bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full flex items-center">
                  <FaShieldAlt className="mr-1" />
                  Assured
                </span>
              )}
            </div>
            <div className="mt-6 border-t border-b border-gray-200 py-4">
              <div className="flex items-end flex-wrap gap-3">
                <div className="text-3xl font-bold text-gray-900">₹{product.price.toLocaleString()}</div>
                <div className="text-lg text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</div>
                <div className="text-green-600 font-bold">{product.discount}% off</div>
              </div>
              <div className="mt-3 text-sm text-gray-500">inclusive of all taxes</div>
            </div>
            {/* Available Offers */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Available offers</h3>
              <div className="space-y-3">
                {offers.map((offer, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="ml-2">
                      <span className="font-medium text-gray-900">{offer.title}</span>
                      <span className="text-gray-600"> {offer.description}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-3 text-yellow-600 font-medium flex items-center hover:underline">
                View 35 more offers <FaChevronRight className="ml-1 text-xs" />
              </button>
            </div>
            {/* Quality Verification */}
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
              <div className="flex items-center">
                <FaShieldAlt className="text-yellow-600 text-xl" />
                <span className="ml-2 font-semibold text-yellow-700">Quality Verified</span>
              </div>
              <p className="mt-2 text-gray-700">
                Passed 30+ quality checks performed by experts for Comfort, Durability & Design.
              </p>
              <button className="mt-2 text-yellow-600 font-medium hover:underline">Know More</button>
            </div>
            {/* Delivery Information */}
            <div className="mt-6">
              <div className="flex items-center text-gray-700">
                <FaTruck className="text-gray-500" />
                <span className="ml-2 font-medium">Delivery by {product.deliveryDate}</span>
              </div>
              <div className="flex items-center mt-2 text-gray-700">
                <FaCalendarAlt className="text-gray-500" />
                <span className="ml-2 font-medium">Installation & Demo by {product.installationDate}</span>
              </div>
              <button className="mt-2 text-yellow-600 font-medium hover:underline">View Details</button>
            </div>
            {/* Quantity Selector */}
            <div className="mt-6">
              <p className="text-gray-700 font-medium">Quantity</p>
              <div className="flex items-center mt-2">
                <button 
                  onClick={() => handleQuantityChange(-1)}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-md text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>
                <div className="w-12 h-10 flex items-center justify-center border-t border-b border-gray-300 text-gray-700 font-medium">
                  {quantity}
                </div>
                <button 
                  onClick={() => handleQuantityChange(1)}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-md text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-600 transition-colors flex-1 min-w-[200px]">
                Add to Cart
              </button>
              <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors flex-1 min-w-[200px]">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        {/* Product Tabs */}
        <div className="mt-12 border-b border-gray-200">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('description')}
              className={`py-3 font-medium ${activeTab === 'description' ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('specifications')}
              className={`py-3 font-medium ${activeTab === 'specifications' ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Specifications
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`py-3 font-medium ${activeTab === 'reviews' ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Reviews ({product.reviews.toLocaleString()})
            </button>
          </div>
        </div>
        {/* Tab Content */}
        <div className="py-6">
          {activeTab === 'description' && (
            <div>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <h3 className="font-semibold text-lg mb-3">Key Features</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === 'specifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.specifications.map((spec, index) => (
                <div key={index} className="flex border-b border-gray-100 py-2">
                  <div className="w-1/3 text-gray-500">{spec.name}</div>
                  <div className="w-2/3 text-gray-700">{spec.value}</div>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'reviews' && (
            <div>
              <div className="flex items-center">
                <div className="text-4xl font-bold mr-4">{product.rating}</div>
                <div>
                  <div className="flex">{renderStars()}</div>
                  <div className="text-gray-600 mt-1">{product.reviews.toLocaleString()} Ratings & {product.ratingsCount} Reviews</div>
                </div>
              </div>
              <div className="mt-6">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold">Customer Reviews</h4>
                  <p className="mt-2 text-gray-700">
                    "This wardrobe is exactly what I was looking for. The quality is excellent and it was easy to assemble. The Columbian Walnut finish looks even better in person than in the photos."
                  </p>
                  <div className="mt-3 flex items-center text-sm text-gray-500">
                    <span className="font-medium">Rajesh Kumar</span>
                    <span className="mx-2">•</span>
                    <span>Verified Purchase</span>
                    <span className="mx-2">•</span>
                    <span>2 days ago</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Recommendations */}
        <div className="mt-12">
          <SectionHeading title="You may also like" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
            {recommendations.map((product, idx) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}