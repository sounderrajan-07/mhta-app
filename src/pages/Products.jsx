import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, PackageOpen, Search, Filter } from 'lucide-react';

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeBrand, setActiveBrand] = useState('All');

  const productImages = import.meta.glob('../assets/Products/*.webp', { eager: true, query: '?url', import: 'default' });
  const productPdfs = import.meta.glob('../assets/Products pdf/*.pdf', { eager: true, query: '?url', import: 'default' });

  const productsData = [
    { name: 'Chain Blocks And Hoists', brand: 'INDEF' },
    { name: 'Chain Slings', brand: 'YOKE' },
    { name: 'Grade 100 Riggings', brand: 'YOKE' },
    { name: 'DNV & Offshore Riggings', brand: 'YOKE' },
    { name: 'Wire Rope Accessories', brand: 'YOKE' },
    { name: 'YOKE Shackles', brand: 'YOKE' },
    { name: 'CROSBY Shackles', brand: 'CROSBY' },
    { name: 'CROSBY Clamps', brand: 'CROSBY' },
    { name: 'Webbing Slings', brand: 'FERRETERRO' },
    { name: 'Industrial Safety Solutions', brand: 'UDYOGI' },
    { name: 'Eye Bolt & Swivel Eye Bolt', brand: 'TL' },
    { name: 'G30 Riggings', brand: 'TL' },
    { name: 'Grade 80 Riggings', brand: 'TL' },
    { name: 'Jacks', brand: 'TL' },
    { name: 'Lashing Components', brand: 'TL' },
    { name: 'Magnet Lifter', brand: 'TL' },
    { name: 'Plate Lifting Clamps', brand: 'TL' },
    { name: 'Polyester Slings', brand: 'TL' },
    { name: 'Precast Lifting', brand: 'TL' },
    { name: 'Turnbuckle And Bottle Screw', brand: 'TL' },
    { name: 'Winches And Pullers', brand: 'TL' },
    { name: 'Wire Rope Slings', brand: 'TL' },
    { name: 'Synthetic & Fibre Ropes', brand: 'TL' },
    { name: 'Pulley Blocks', brand: 'TL' },
    { name: 'Shackles', brand: 'TL' },
    { name: 'Stainless Steel Riggings', brand: 'TL' },
    { name: 'Braided & Twisted Ropes', brand: 'Other' },
    { name: 'Power Tools', brand: 'FEIN' },
    { name: 'Hand Tools & Storage', brand: 'STANLEY' },
    { name: 'Material Handling', brand: 'STANLEY' }
  ].map(p => ({
    ...p,
    image: productImages[`../assets/Products/${p.name}.webp`] || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
    link: productPdfs[`../assets/Products pdf/${p.name}.pdf`] || null
  }));

  const brands = ['All', ...new Set(productsData.map(p => p.brand))];

  const filteredProducts = productsData.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = activeBrand === 'All' || p.brand === activeBrand;
    return matchesSearch && matchesBrand;
  });

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/20 blur-[150px] pointer-events-none z-0"></div>

      {/* Header */}
      <section className="pt-32 pb-16 relative z-10">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-surface/80 border border-brand-border/50 text-brand-textMuted text-sm font-semibold mb-6 shadow-glow-primary"
          >
            <PackageOpen className="w-4 h-4 text-brand-highlight" /> Premium Industrial Catalog
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-extrabold text-brand-text mb-6 tracking-tight"
          >
            Discover Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-highlight drop-shadow-lg">
              Products
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-brand-textMuted max-w-2xl mx-auto font-medium"
          >
            Explore our comprehensive catalog of lifting, rigging, and material handling solutions from world-renowned manufacturers.
          </motion.p>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-8 flex-grow relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          
          {/* Filters Area */}
          <div className="glass-dark p-6 rounded-[2rem] mb-12 shadow-2xl sticky top-24 z-30">
            <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
              
              {/* Search */}
              <div className="relative w-full lg:w-1/3 group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brand-textMuted w-5 h-5 group-focus-within:text-brand-highlight transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search products or brands..." 
                  className="w-full bg-brand-surface border border-brand-border/50 shadow-inner rounded-2xl pl-12 pr-4 py-4 text-brand-text placeholder-brand-textMuted focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/50 transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Brand Pills */}
              <div className="flex-1 flex flex-wrap gap-2 justify-center lg:justify-end items-center">
                <div className="hidden lg:flex items-center gap-2 mr-2 text-brand-textMuted font-bold">
                  <Filter className="w-4 h-4" /> Filter:
                </div>
                {brands.map(brand => (
                  <button
                    key={brand}
                    onClick={() => setActiveBrand(brand)}
                    className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 ${
                      activeBrand === brand 
                        ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-glow-primary border-transparent' 
                        : 'bg-brand-surface text-brand-textMuted hover:bg-brand-primary/10 hover:text-brand-text border border-brand-border/50 shadow-md'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>

            </div>
          </div>

          {/* Product Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            <AnimatePresence>
              {filteredProducts.map((product, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={product.name}
                  className="group relative glass-dark p-2 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-glow-primary border border-brand-border/30 hover:border-brand-primary/50 flex flex-col h-full"
                >
                  {/* Subtle hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/0 to-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Product Image Box */}
                  <div className="h-56 w-full rounded-2xl bg-white/5 overflow-hidden relative border border-white/5">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                    <span className="absolute top-4 right-4 text-[10px] font-black px-3 py-1.5 bg-brand-surface/90 backdrop-blur-md text-brand-text rounded-full uppercase tracking-widest shadow-lg border border-white/10">
                      {product.brand}
                    </span>
                  </div>
                  
                  {/* Content Box */}
                  <div className="p-6 flex flex-col flex-grow relative z-10">
                    <h3 className="text-xl font-bold text-brand-text mb-6 group-hover:text-brand-highlight transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <div className="mt-auto pt-4 border-t border-brand-border/50">
                      {product.link ? (
                        <a 
                          href={product.link} 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-full py-3.5 px-4 bg-brand-surface/50 rounded-xl text-center text-brand-text font-bold hover:bg-brand-primary hover:shadow-glow-primary transition-all duration-300 flex items-center justify-center gap-2 group/btn border border-white/5"
                        >
                          <Download className="w-5 h-5 group-hover/btn:-translate-y-1 transition-transform" />
                          Specs
                        </a>
                      ) : (
                        <div className="w-full py-3.5 px-4 bg-brand-surface/20 rounded-xl text-center text-brand-textMuted/50 font-bold flex items-center justify-center gap-2 cursor-not-allowed border border-white/5">
                          <span>Unavailable</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProducts.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-center py-32 text-brand-textMuted"
            >
              <div className="w-24 h-24 rounded-full bg-brand-surface mx-auto mb-6 flex items-center justify-center border border-brand-border/50">
                <PackageOpen className="w-12 h-12 text-brand-primary opacity-50" />
              </div>
              <p className="text-2xl font-bold text-brand-text mb-2">No products found</p>
              <p className="text-brand-textMuted">Try adjusting your search or filters.</p>
            </motion.div>
          )}

        </div>
      </section>
    </div>
  );
}
