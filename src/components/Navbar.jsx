import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Certifications', path: '/certificates' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header className="bg-surface dark:bg-primary-container fixed w-full top-0 z-50 border-b border-outline-variant dark:border-outline shadow-sm">
        <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Madras Hardtools Logo" className="h-10 md:h-12 w-auto object-contain" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className={`font-label-md text-label-md transition-colors ${
                  isActive(link.path) 
                    ? 'text-secondary dark:text-secondary-fixed-dim border-b-2 border-secondary font-bold pb-1' 
                    : 'text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/contact" 
              className="bg-safety-yellow text-charcoal-gray px-6 py-2 rounded-lg font-bold hover:bg-yellow-500 scale-95 active:scale-90 duration-150 transition-all text-center inline-block"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden flex items-center justify-center p-2 text-primary focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-surface dark:bg-primary-container border-t border-outline-variant dark:border-outline absolute top-full left-0 w-full shadow-lg">
            <div className="flex flex-col px-margin-mobile py-4 space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-label-md text-lg transition-colors ${
                    isActive(link.path) 
                      ? 'text-secondary dark:text-secondary-fixed-dim font-bold' 
                      : 'text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-outline-variant dark:border-outline">
                <Link 
                  to="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-safety-yellow text-charcoal-gray w-full py-3 rounded-lg font-bold hover:bg-yellow-500 text-center inline-block"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-[76px] md:h-[84px] w-full bg-surface dark:bg-primary-container"></div>
    </>
  );
}
