import { Link, useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <footer className="relative bg-brand-bg pt-20 pb-8 overflow-hidden border-t border-brand-border/30 mt-auto">
      
      {/* Footer Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-40 bg-brand-primary/20 blur-[120px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

        {/* Brand */}
        <div className="flex flex-col">
          <Link to="/" className="flex items-center mb-8 group">
            <img
              src={logo}
              alt="Madras Hard Tools"
              className="h-12 w-auto filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover:brightness-125 transition-all"
            />
          </Link>

          <p className="text-brand-textMuted text-sm leading-relaxed mb-6">
            Your trusted material handling equipment company. Providing
            uncompromising quality and solutions in the Lifting & Material Handling product range since
            1972.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-brand-text font-bold mb-6 text-lg tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
            Quick Links
          </h3>

         <ul className="space-y-4">
  {[
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact Us', path: '/contact' },
  ].map((item) => (
    <li key={item.name}>
      <Link
        to={item.path}
        className="group flex items-center gap-2 text-brand-textMuted hover:text-brand-highlight transition-colors text-sm font-medium"
      >
        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        {item.name}
      </Link>
    </li>
  ))}
</ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-brand-text font-bold mb-6 text-lg tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-highlight"></span>
            Contact Info
          </h3>

          <ul className="space-y-5">
            <li className="flex items-start gap-4 group">
              <div className="p-2 bg-brand-surface rounded-lg border border-brand-border/50 group-hover:bg-brand-primary/20 transition-colors">
                <MapPin className="w-4 h-4 text-brand-primary" />
              </div>
              <span className="text-brand-textMuted text-sm font-medium leading-relaxed">
                No.199, Thambu Chetty Street, <br />
                Parrys, Chennai - 600001.
              </span>
            </li>

            <li className="flex items-center gap-4 group">
              <div className="p-2 bg-brand-surface rounded-lg border border-brand-border/50 group-hover:bg-brand-primary/20 transition-colors">
                <Phone className="w-4 h-4 text-brand-primary" />
              </div>
              <a href="tel:+919840757732" className="text-brand-textMuted text-sm font-medium hover:text-brand-primary transition-colors">
                +91 98407 57732
              </a>
            </li>

            <li className="flex items-center gap-4 group">
              <div className="p-2 bg-brand-surface rounded-lg border border-brand-border/50 group-hover:bg-brand-primary/20 transition-colors">
                <Mail className="w-4 h-4 text-brand-primary" />
              </div>
              <a href="mailto:info@mhta.co.in" className="text-brand-textMuted text-sm font-medium hover:text-brand-primary transition-colors">
                info@mhta.co.in
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Contact Form */}
        <div>
          <h3 className="text-brand-text font-bold mb-6 text-lg tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-secondary"></span>
            Send a Message
          </h3>

          <form
            className="space-y-4 bg-brand-surface/30 p-6 rounded-2xl border border-brand-border/50 shadow-inner backdrop-blur-md"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-brand-bg border border-brand-border/50 rounded-xl px-4 py-3 text-sm text-brand-text placeholder-brand-textMuted/50 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-brand-bg border border-brand-border/50 rounded-xl px-4 py-3 text-sm text-brand-text placeholder-brand-textMuted/50 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
            />

            <button
              type="button"
              onClick={handleContactClick}
              className="w-full bg-brand-primary hover:bg-brand-highlight text-brand-text text-sm font-bold py-3 rounded-xl transition-all shadow-glow-primary hover:-translate-y-0.5"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="border-t border-brand-border/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-textMuted/50 text-sm font-medium">
            © {new Date().getFullYear()} Madras HardTools Agencies (P) Ltd. All Rights Reserved.
          </p>

          <p className="text-brand-textMuted/50 text-sm font-medium flex items-center gap-1">
            Engineered for <span className="text-brand-primary">Excellence</span>
          </p>
        </div>
      </div>
    </footer>
  );
}