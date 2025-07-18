export default function Footer() {
  return (
    <footer className="w-full bg-[#232323] text-gray-300 pt-6 md:pt-10 border-t border-gray-700 text-xs md:text-sm">
      <div className="max-w-7xl mx-auto px-2 md:px-4 grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-8 pb-4 md:pb-8">
        {/* About */}
        <div>
          <h4 className="font-bold text-xs md:text-sm text-gray-400 mb-2 md:mb-3">ABOUT</h4>
          <ul className="space-y-0.5 md:space-y-1">
            <li><a href="#" className="hover:underline font-semibold text-white">Contact Us</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Stories</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
            <li><a href="#" className="hover:underline">Corporate Information</a></li>
          </ul>
        </div>
        {/* Group Companies */}
        <div>
          <h4 className="font-bold text-xs md:text-sm text-gray-400 mb-2 md:mb-3">GROUP COMPANIES</h4>
          <ul className="space-y-0.5 md:space-y-1">
            <li><a href="#" className="hover:underline">Myntra</a></li>
            <li><a href="#" className="hover:underline">Cleartrip</a></li>
            <li><a href="#" className="hover:underline">Shopsy</a></li>
          </ul>
        </div>
        {/* Help */}
        <div>
          <h4 className="font-bold text-xs md:text-sm text-gray-400 mb-2 md:mb-3">HELP</h4>
          <ul className="space-y-0.5 md:space-y-1">
            <li><a href="#" className="hover:underline font-semibold text-white">Payments</a></li>
            <li><a href="#" className="hover:underline">Shipping</a></li>
            <li><a href="#" className="hover:underline">Cancellation & Returns</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>
        {/* Consumer Policy */}
        <div>
          <h4 className="font-bold text-xs md:text-sm text-gray-400 mb-2 md:mb-3">CONSUMER POLICY</h4>
          <ul className="space-y-0.5 md:space-y-1">
            <li><a href="#" className="hover:underline font-semibold text-white">Cancellation & Returns</a></li>
            <li><a href="#" className="hover:underline font-semibold text-white">Terms Of Use</a></li>
            <li><a href="#" className="hover:underline">Security</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Sitemap</a></li>
            <li><a href="#" className="hover:underline">Grievance Redressal</a></li>
            <li><a href="#" className="hover:underline">EPR Compliance</a></li>
          </ul>
        </div>
        {/* Mail Us */}
        <div className="md:col-span-1">
          <h4 className="font-bold text-xs md:text-sm text-gray-400 mb-2 md:mb-3">Mail Us:</h4>
          <address className="not-italic text-[11px] md:text-xs leading-relaxed">
            ShopEase Internet Pvt. Ltd.,<br />
            123, Main Street, Tech Park,<br />
            Bengaluru, 560103,<br />
            Karnataka, India
          </address>
          <div className="mt-2 md:mt-3">
            <span className="text-gray-400 text-[11px] md:text-xs">Social:</span>
            <div className="flex gap-2 md:gap-3 mt-1">
              <a href="#" aria-label="Facebook" className="hover:text-yellow-400"><svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="#" aria-label="X" className="hover:text-yellow-400"><svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M17.5 6.5L6.5 17.5M6.5 6.5l11 11"/></svg></a>
              <a href="#" aria-label="YouTube" className="hover:text-yellow-400"><svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="7" width="20" height="10" rx="3"/><path d="M10 9.5v5l4-2.5-4-2.5z"/></svg></a>
              <a href="#" aria-label="Instagram" className="hover:text-yellow-400"><svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect width="20" height="20" x="2" y="2" rx="5" strokeWidth="2"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><circle cx="17.5" cy="6.5" r="1.5"/></svg></a>
            </div>
          </div>
        </div>
        {/* Registered Office Address */}
        <div className="md:col-span-1">
          <h4 className="font-bold text-xs md:text-sm text-gray-400 mb-2 md:mb-3">Registered Office Address:</h4>
          <address className="not-italic text-[11px] md:text-xs leading-relaxed">
            ShopEase Internet Pvt. Ltd.,<br />
            123, Main Street, Tech Park,<br />
            Bengaluru, 560103,<br />
            Karnataka, India<br />
            CIN: U123456KA2025PTC000000<br />
            Telephone: <a href="tel:044-45614700" className="text-blue-400 hover:underline">044-45614700</a>
          </address>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-2 md:py-3 px-2 md:px-4 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-3 text-[11px] md:text-xs bg-[#232323]">
        <div className="flex flex-wrap gap-3 md:gap-6 items-center text-yellow-400">
          <a href="#" className="flex items-center gap-1"><span className="text-lg">🛒</span> Become a Seller</a>
          <a href="#" className="flex items-center gap-1"><span className="text-lg">⚡</span> Advertise</a>
          <a href="#" className="flex items-center gap-1"><span className="text-lg">🎁</span> Gift Cards</a>
          <a href="#" className="flex items-center gap-1"><span className="text-lg">❓</span> Help Center</a>
        </div>
        <div className="text-gray-400">© {new Date().getFullYear()} ShopEase.com</div>
        <div className="flex gap-1 md:gap-2 items-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-4 md:h-5" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="h-4 md:h-5" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Maestro_logo.png" alt="Maestro" className="h-4 md:h-5" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/RuPay.svg" alt="RuPay" className="h-4 md:h-5" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Discover_Card_logo.svg" alt="Discover" className="h-4 md:h-5" />
        </div>
      </div>
    </footer>
  );
} 