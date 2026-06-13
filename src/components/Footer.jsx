import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-surface-container-highest full-width bottom-0 border-t-4 border-secondary mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-container-max mx-auto px-margin-desktop py-stack-lg">
        <div className="space-y-6">
          <img src={logo} alt="Madras Hardtools Logo" className="h-12 w-auto object-contain bg-white rounded p-1" />
          <p class="text-outline-variant text-sm leading-relaxed">
              Authorized partner for premium lifting solutions. Providing high-performance hardware for construction, shipping, and heavy manufacturing sectors across India.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-white" href="#"><span className="material-symbols-outlined">public</span></a>
            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-white" href="#"><span className="material-symbols-outlined">mail</span></a>
            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-white" href="#"><span className="material-symbols-outlined">call</span></a>
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="text-on-primary font-bold uppercase tracking-widest text-xs">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link className="text-outline-variant hover:text-white transition-colors hover:underline text-sm" to="/products">Product Catalog</Link></li>
            <li><Link className="text-outline-variant hover:text-white transition-colors hover:underline text-sm" to="/certificates">Technical Data</Link></li>
            <li><Link className="text-outline-variant hover:text-white transition-colors hover:underline text-sm" to="/certificates">Safety Guides</Link></li>
            <li><Link className="text-outline-variant hover:text-white transition-colors hover:underline text-sm" to="/contact">Contact Us</Link></li>
            <li><Link className="text-outline-variant hover:text-white transition-colors hover:underline text-sm" to="/about">About Us</Link></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-on-primary font-bold uppercase tracking-widest text-xs">Partner Brands</h4>
          <ul className="space-y-3">
            <li className="text-outline-variant text-sm">YOKE Lifting Gear</li>
            <li className="text-outline-variant text-sm">INDEF Hoists</li>
            <li className="text-outline-variant text-sm">Bajaj Industrial</li>
            <li><Link className="text-outline-variant hover:text-white transition-colors hover:underline text-sm" to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-on-primary font-bold uppercase tracking-widest text-xs">Newsletter</h4>
          <p className="text-outline-variant text-xs">Subscribe for safety updates and new product alerts.</p>
          <div className="flex gap-0">
            <input className="bg-white/10 border-0 text-white rounded-l px-4 py-2 w-full focus:ring-1 focus:ring-secondary outline-none" placeholder="Your email" type="email" />
            <button className="bg-secondary text-white px-4 py-2 rounded-r hover:bg-opacity-80 transition-all flex items-center justify-center">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-4 text-outline-variant text-xs font-label-md">
          <span>© {new Date().getFullYear()} Madras Hardtools Agencies. Authorized YOKE Partner.</span>
          <div className="flex gap-6">
            <span>Designed for Durability</span>
            <span>Safety First</span>
          </div>
        </div>
      </div>
    </footer>
  );
}