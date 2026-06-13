import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Wrench,
  ChevronRight,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

import homeImage from "../assets/home.png";

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

import chainBlock from "../assets/products/Chain Blocks And Hoists.webp";
import sling from "../assets/products/Webbing Slings.webp";
import rigging from "../assets/products/Grade 100 Riggings.webp";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  const brands = [
    fein,
    tractlift,
    usha,
    orion,
    kohinoor,
    bajaj,
    yoke,
    al,bl,cl
  ];

  const products = [
    {
      name: "Chain Blocks",
      brand: "INDEF",
      image: chainBlock,
    },
    {
      name: "Webbing Slings",
      brand: "FERRETERRO",
      image: sling,
    },
    {
      name: "Grade 100 Rigging",
      brand: "YOKE",
      image: rigging,
    },
  ];

  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="flex flex-col bg-brand-bg relative overflow-hidden">
      
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-highlight/5 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-brand-secondary/10 rounded-full blur-[80px] mix-blend-screen animate-blob animation-delay-4000"></div>
        
        {/* Modern Dot Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[100vh] flex items-center pt-24 pb-4 md:pb-12 overflow-hidden z-10">
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* LEFT CONTENT */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="order-1 z-20"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-surface/50 border border-brand-border/50 text-brand-textMuted text-xs sm:text-sm font-semibold mb-8 backdrop-blur-md shadow-lg"
              >
                <div className="w-2 h-2 rounded-full bg-brand-highlight animate-pulse"></div>
                <span>Established in 1972</span>
                <span className="w-px h-4 bg-brand-border/50 mx-1"></span>
                <span className="text-brand-text flex items-center gap-1">
                  <Star className="w-3 h-3 text-brand-highlight fill-brand-highlight" /> Premium Quality
                </span>
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-brand-text leading-[1.1] mb-6 tracking-tight">
                  Elevating <br />
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-highlight via-brand-primary to-brand-secondary">
                      Industries
                    </span>
                    <motion.div 
                      className="absolute -bottom-2 left-0 w-full h-2 bg-brand-primary/40 blur-md"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1, duration: 1 }}
                    />
                  </span>
                  <br />
                  Safely.
                </h1>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-brand-textMuted font-medium mb-10 max-w-2xl leading-relaxed"
              >
                Since 1972, we've provided uncompromising safety and quality in lifting & material handling equipment. Trusted by leaders across India.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-5"
              >
                <Link
                  to="/products"
                  className="group inline-flex justify-center items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold text-lg rounded-2xl shadow-glow-primary hover:shadow-glow-highlight transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  View Products
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex justify-center items-center gap-2 px-8 py-4 glass-dark text-brand-text font-bold text-lg rounded-2xl hover:bg-brand-surface/80 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Our Legacy
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex justify-center order-2 relative z-10"
              style={{ y: y1 }}
            >
              <div className="relative">
                {/* Floating Effect for Image */}
                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                  <div className="absolute inset-0 bg-brand-primary/20 blur-[80px] rounded-full"></div>
                  <img
                    src={homeImage}
                    alt="Material Handling Equipment"
                    className="w-full max-w-[650px] object-contain drop-shadow-2xl relative z-10"
                  />
                </motion.div>
                
                {/* Floating Badges */}
                <motion.div 
                  className="absolute top-[10%] -left-[10%] glass-dark p-4 rounded-2xl hidden md:flex items-center gap-3 border border-brand-primary/30"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-highlight">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-brand-text font-bold text-sm">100% Certified</p>
                    <p className="text-brand-textMuted text-xs">Quality Assured</p>
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>
          
          {/* Scroll Indicator */}
          <motion.div 
            style={{ opacity }}
            className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-brand-textMuted text-xs font-semibold tracking-widest uppercase">Scroll</span>
            <motion.div 
              className="w-[1px] h-12 bg-gradient-to-b from-brand-primary to-transparent"
              animate={{ scaleY: [0, 1, 0], translateY: [0, 10, 20] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </section>

      {/* ================= BRANDS SECTION ================= */}
      <section className="py-6 md:py-20 relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="glass-dark rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-bg/80 via-transparent to-brand-bg/80 z-10 pointer-events-none"></div>
            
            <h2 className="text-center text-sm font-bold text-brand-textMuted uppercase tracking-widest mb-10">
              Trusted by Industry Leaders
            </h2>

            <div className="overflow-hidden py-4 relative z-0 flex group">
              <motion.div
                className="flex gap-20 items-center pr-20"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 30,
                  ease: "linear"
                }}
              >
                {[...brands, ...brands].map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt="Brand Logo"
                    className="h-16 lg:h-24 object-contain flex-shrink-0 filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUE SECTION ================= */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-highlight text-sm font-bold mb-6">
                <Wrench className="w-4 h-4" /> Why Choose Us
              </div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-text mb-8 leading-tight">
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-highlight">Excellence</span> <br/> in Every Lift.
              </h2>

              <p className="text-brand-textMuted text-lg leading-relaxed mb-10 border-l-4 border-brand-primary pl-6">
                Madras Hard Tools Agencies (P) Ltd. provides industrial lifting and rigging supplies, carefully selecting products to ensure they meet the highest global standards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="glass-dark p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group border-t border-brand-primary/20">
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-primary/20 transition-all">
                    <Wrench className="w-7 h-7 text-brand-highlight" />
                  </div>
                  <h3 className="text-xl text-brand-text font-bold mb-3">Premium Tools</h3>
                  <p className="text-sm text-brand-textMuted leading-relaxed">
                    Curated from top global manufacturers ensuring unmatched durability.
                  </p>
                </div>

                <div className="glass-dark p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group border-t border-brand-primary/20">
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-primary/20 transition-all">
                    <Truck className="w-7 h-7 text-brand-highlight" />
                  </div>
                  <h3 className="text-xl text-brand-text font-bold mb-3">Fast Logistics</h3>
                  <p className="text-sm text-brand-textMuted leading-relaxed">
                    Deep regional network across South India for rapid, localized service.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT PRODUCT CARDS */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-brand-highlight/5 blur-3xl rounded-full"></div>
              
              <div className="flex justify-between items-end mb-8 relative z-10">
                <h3 className="text-3xl font-bold text-brand-text">Featured Products</h3>
                <Link to="/products" className="text-brand-highlight font-semibold flex items-center gap-1 hover:text-brand-text transition-colors">
                  View All <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-4 relative z-10">
                {products.map((product, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="glass-dark rounded-3xl p-4 flex items-center gap-6 hover:shadow-glow-primary transition-all duration-300 border border-brand-border/30 cursor-pointer group"
                  >
                    <div className="relative overflow-hidden rounded-2xl w-28 h-28 bg-white/5">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-brand-text mb-1 group-hover:text-brand-highlight transition-colors">
                        {product.name}
                      </h4>
                      <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-textMuted text-xs font-bold tracking-wider uppercase border border-brand-primary/20">
                        {product.brand}
                      </span>
                    </div>
                    
                    <div className="pr-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-highlight">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}