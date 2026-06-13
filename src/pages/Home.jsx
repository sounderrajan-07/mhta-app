import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import homeImage from "../assets/Home.png";
import fein from "../assets/Companies/1.png";
import tractlift from "../assets/Companies/2.png";
import usha from "../assets/Companies/3.png";
import orion from "../assets/Companies/4.png";
import kohinoor from "../assets/Companies/5.png";
import bajaj from "../assets/Companies/6.png";
import yoke from "../assets/Companies/7.png";
import al from "../assets/Companies/8.png";
import bl from "../assets/Companies/9.png";
import cl from "../assets/Companies/10.png";

import chainBlock from "../assets/Products/Chain Blocks And Hoists.webp";
import sling from "../assets/Products/Webbing Slings.webp";
import rigging from "../assets/Products/Grade 100 Riggings.webp";

export default function Home() {
  const brands = [
    fein, tractlift, usha, orion, kohinoor, bajaj, yoke, al, bl, cl
  ];

  const featuredProducts = [
    {
      name: "Chain Blocks And Hoists",
      brand: "INDEF",
      image: chainBlock,
      description: "High-precision lifting mechanisms designed for extreme durability in heavy fabrication environments."
    },
    {
      name: "Webbing Slings",
      brand: "FERRETERRO",
      image: sling,
      description: "Industrial-grade polyester slings for delicate loads, offering high strength-to-weight ratio."
    },
    {
      name: "Grade 100 Riggings",
      brand: "YOKE",
      image: rigging,
      description: "Superior strength rigging components featuring YOKE's patented safety designs."
    },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.hover-card').forEach(card => {
      card.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-24 pb-48">
        <div className="absolute inset-0 z-0">
          <img alt="Industrial equipment background" className="w-full h-full object-cover opacity-30" src="https://lh3.googleusercontent.com/aida/AP1WRLuLWhL6eE6yrw3RPvYfzWrbzdtqalllLGJ5xirTjsGyMxtVg2FA-6a1qCzy4jWvEPrFCcB1yGxPACxKSpytwFM__XMIQcEtniu_40fVFAQW6G9fe-bf8gwIW4si-UJms5gRElHUmybmoNFNOESZ0bYFo2BIXEi2oUuFOa5mBvJ8W6NtMMHNoKn0G-y7yobjQeal75lfbp0Vq2Q05hZm0VWaSfiH-HUgwOrjKDeUCm9IwBoEw02dQhf5UQ" />
          <div className="absolute inset-0 hero-overlay bg-primary/80 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-stack-lg">
            <div className="inline-block px-3 py-1 bg-secondary text-[12px] font-bold tracking-widest uppercase rounded">
              Since 1972
            </div>
            <h1 className="font-display-lg text-4xl sm:text-5xl leading-tight md:text-6xl">
              Elevating <span className="text-safety-blue">Industries</span> Safely.
            </h1>
            <p className="font-body-lg text-body-lg text-outline-variant max-w-lg">
              Since 1972, we've provided uncompromising safety and quality in lifting & material handling equipment. Trusted by leaders across India.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
              <Link to="/products" className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-surface-container-high transition-all flex items-center justify-center gap-2">
                View Catalog
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link to="/contact" className="border-2 border-white/30 backdrop-blur-md text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center">
                Technical Support
              </Link>
            </div>
          </div>

          <div className="flex justify-center relative">
            <img 
              src={homeImage} 
              alt="Material Handling Equipment" 
              className="w-full max-w-[500px] object-contain drop-shadow-2xl relative z-10 animate-[pulse_6s_ease-in-out_infinite]"
            />
            <div className="absolute inset-0 bg-safety-blue/20 blur-[80px] rounded-full pointer-events-none"></div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-primary/80 backdrop-blur-md border-t border-white/10 py-8 hidden md:block">
          <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-gutter text-white">
            <div className="space-y-1">
              <div className="text-3xl font-black text-safety-yellow">50+</div>
              <div className="text-sm uppercase tracking-wider text-outline-variant">Years of Experience</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-black text-safety-yellow">10k+</div>
              <div className="text-sm uppercase tracking-wider text-outline-variant">Safety Products</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-black text-safety-yellow">100%</div>
              <div className="text-sm uppercase tracking-wider text-outline-variant">Quality Assured</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-black text-safety-yellow">24/7</div>
              <div className="text-sm uppercase tracking-wider text-outline-variant">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos Marquee */}
      <section className="py-12 bg-white overflow-hidden border-b border-outline-variant">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-8 text-center">
           <h2 className="text-sm font-bold text-outline uppercase tracking-widest">
             Trusted by Industry Leaders
           </h2>
        </div>
        <div className="flex overflow-hidden relative group">
          <div className="flex w-max animate-marquee">
            {[...brands, ...brands].map((logo, index) => (
              <div key={index} className="flex-shrink-0 px-8">
                <img
                  src={logo}
                  alt="Brand Logo"
                  className="h-24 lg:h-32 w-auto object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Grid (Featured Products) */}
      <section className="py-stack-lg bg-steel-bg">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-2">
              <span className="text-secondary font-bold tracking-widest uppercase text-xs">Featured Products</span>
              <h2 className="font-headline-lg text-headline-lg text-primary technical-border pl-6">Industrial Categories</h2>
            </div>
            <Link to="/products" className="text-secondary font-bold hover:underline flex items-center gap-1">
               View All Products <span className="material-symbols-outlined text-sm">chevron_right</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {featuredProducts.map((product, index) => (
              <Link key={index} to="/products" className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover-card transition-all duration-300 opacity-100 block">
                <div className="aspect-[4/3] overflow-hidden bg-surface-container flex items-center justify-center p-4">
                  <img alt={product.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 mix-blend-multiply" src={product.image} />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline-md text-xl text-primary font-bold line-clamp-1">{product.name}</h3>
                    <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity">arrow_outward</span>
                  </div>
                  <div className="font-label-md text-[10px] text-on-surface-variant bg-surface-container px-2 py-1 rounded inline-block uppercase tracking-widest font-black">
                    {product.brand}
                  </div>
                  <p className="text-sm text-outline line-clamp-2">{product.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-stack-lg bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-primary text-white p-8 md:p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none hidden md:block">
              <span className="material-symbols-outlined text-[300px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-safety-yellow text-sm font-bold">
                  <span className="material-symbols-outlined text-[16px]">build</span> Why Choose Us
                </div>
                <h2 className="font-headline-lg text-3xl md:text-5xl leading-tight">Engineering Excellence in Every Lift.</h2>
                <p className="text-outline-variant font-body-md border-l-4 border-secondary pl-4">
                  Madras Hard Tools Agencies (P) Ltd. provides industrial lifting and rigging supplies, carefully selecting products to ensure they meet the highest global standards.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 pt-4">
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex-1">
                     <span className="material-symbols-outlined text-safety-yellow text-3xl mb-3">build</span>
                     <h3 className="font-bold text-lg mb-2">Premium Tools</h3>
                     <p className="text-sm text-outline-variant">Curated from top global manufacturers ensuring unmatched durability.</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex-1">
                     <span className="material-symbols-outlined text-safety-yellow text-3xl mb-3">local_shipping</span>
                     <h3 className="font-bold text-lg mb-2">Fast Logistics</h3>
                     <p className="text-sm text-outline-variant">Deep regional network across South India for rapid, localized service.</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                 <div className="relative group/img overflow-hidden rounded-3xl p-2 bg-gradient-to-br from-secondary/20 to-white/5 border border-white/10 w-full max-w-md">
                    <img 
                      src={homeImage} 
                      alt="Rigging Equipment" 
                      className="w-full rounded-2xl shadow-2xl object-cover transform group-hover/img:scale-105 transition-transform duration-700" 
                    />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}