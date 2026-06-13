import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact Us', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-500 pt-2 lg:pt-4 px-4 lg:px-8">
      <motion.div 
        layout
        className={`mx-auto max-w-7xl transition-all duration-500 relative z-50 ${
          isScrolled 
            ? 'glass-dark rounded-full py-3 px-6 shadow-glow-primary border-brand-primary/20' 
            : 'bg-transparent py-2 px-2'
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group relative">
            <img src={logo} alt="Madras Hard Tools" className="h-10 md:h-12 w-auto filter drop-shadow-md group-hover:brightness-125 transition-all duration-300" />
            <div className="absolute inset-0 bg-brand-primary opacity-0 group-hover:opacity-20 blur-xl rounded-full transition-opacity duration-300"></div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm font-semibold tracking-wide transition-colors group ${
                  location.pathname === link.path ? 'text-brand-highlight' : 'text-brand-textMuted hover:text-brand-text'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.span 
                    layoutId="underline"
                    className="absolute -bottom-2 left-0 w-full h-[2px] bg-brand-highlight shadow-[0_0_8px_rgba(255,0,0,0.8)] rounded-full" 
                  />
                )}
                {location.pathname !== link.path && (
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-brand-primary transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(128,0,0,0.8)] rounded-full" />
                )}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="px-6 py-2.5 bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-sm font-bold rounded-full hover:from-brand-highlight hover:to-brand-primary transition-all shadow-glow-primary hover:shadow-glow-highlight transform hover:-translate-y-0.5 border border-white/10"
            >
              Get a Quote
            </Link>
          </div>

          {/* Desktop: Theme Toggle + Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button className="md:hidden text-brand-text p-2 rounded-full hover:bg-white/10 transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 overflow-hidden bg-brand-surface/95 backdrop-blur-2xl border border-brand-border/80 rounded-2xl shadow-2xl z-40"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-semibold tracking-wide transition-colors ${
                    location.pathname === link.path ? 'text-brand-highlight' : 'text-brand-text hover:text-brand-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center px-6 py-3 bg-brand-primary text-white text-lg font-bold rounded-xl shadow-glow-primary hover:bg-brand-highlight transition-colors"
              >
                Get a Quote
              </Link>
              <div className="flex flex-col gap-4 pt-4 border-t border-brand-border/50">
                <a href="tel:+919840757732" className="flex items-center gap-3 text-brand-textMuted hover:text-brand-primary transition-colors text-sm font-semibold">
                  <Phone className="w-4 h-4" /> +91 98407 57732
                </a>
                <a href="mailto:info@mhta.co.in" className="flex items-center gap-3 text-brand-textMuted hover:text-brand-primary transition-colors text-sm font-semibold">
                  <Mail className="w-4 h-4" /> info@mhta.co.in
                </a>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-brand-border/50">
                <span className="text-brand-textMuted text-sm font-bold tracking-wide uppercase">Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
